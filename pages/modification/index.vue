<script setup>
import { reactive, onMounted, watch } from "vue";
import { smsCertiReq, smsCertiConfirm, hnoGet, hnoUpdate } from "@/api";
import { formatNb } from "@/utils";

const app = useAppStore();
const myGetStore = useHnoMyGetStore();
const get = useHnoGetStore();

definePageMeta({
  name: "modification"
});

const d = reactive({
  text: "홈넘버 수정",
  isPhone: false, // 휴대폰 인증 확인
  isActive1: false, // 확인 활성화 여부
  crtfcNo: "",
  cdCommand: "stop",
  time: "",
  isNext: true, // true는 휴대폰 인증 | false는 수정
  scrtky: "",
  addrNcm: get.addrNcm,
  topText: "홈넘버 수정이<br />성공적으로 이루어졌습니다.",
  btntext: "내 홈넘버 보기",
  type: "contents-end",
  completed: false
});

function limitInputText(event, field) {
  const value = event.target.value.replace(/[^a-zA-Z가-힣ㄱ-ㅎㅏ-ㅣ]/g, ""); // 영문자와 한글만 허용
  d[field] = value;
}

function limitInputNumber(event, maxLength, field) {
  const value = event.target.value.replace(/\D/g, ""); // 숫자만 허용
  if (value.length > maxLength) {
    if (get) {
      get[field] = value.slice(0, maxLength);
    } else {
      d[field] = value.slice(0, maxLength);
    }
  } else if (get) {
    get[field] = value;
  } else {
    d[field] = value;
  }
}

const phoneAuth = async () => {
  const phoneReq = await smsCertiReq(myGetStore.moblphonNo);

  if (phoneReq) {
    d.isPhone = true;
    d.cdCommand = null;
    setTimeout(() => {
      d.cdCommand = "start";
    });
  }
  console.log("d.isActive1_수정_111:", d.isActive1);
};

const phoneAuthCheck = async () => {
  // 필수입력 완료시
  const phoneConfirm = await smsCertiConfirm(
    myGetStore.moblphonNo,
    app.crtfcTkn,
    d.crtfcNo
  );

  if (phoneConfirm) {
    d.cdCommand = "stop";
    d.time = "인증완료";
    d.isActive1 = true;
  }
  console.log("d.isActive1_수정_필수입력:", d.isActive1);
};

const handleTimerEnd = () => {
  app.error = {
    type: "alert",
    message: "인증시간이 만료됐습니다..",
    hasClose: false
  };
  d.authState = 0;
  d.crtfcTkn = "";
  d.crtfcNo = "";
};

const hnogetList = async () => {
  const params = new URLSearchParams(window.location.search);
  const hnoIssuNo = params.get("hnoIssuNo");

  const success = await hnoGet(hnoIssuNo);
  if (success) {
    console.log(get.hnoIssuNo);
  }
  d.isActive1 = false;
};

//우편번호 찾기 iframe 교체
const handleClickAddressSearch = () => {
	var element_layer = document.getElementById('layer');

	new daum.Postcode({
 		oncomplete: function (data) {
      console.log(data);
      get.postNo = data.zonecode; // 우편번호
      let address = data.roadAddress; // 도로명 주소
      let building = data.buildingName ? ` (${data.buildingName})` : ""; // 건물명이 있으면 앞에 공백을 두고 추가, 없으면 빈 문자열
      get.bassAddr = address + building;
			element_layer.style.display = 'none';
    },
			width : '100%',
			height : '100%',
			maxSuggestItems : 1
  }).embed(element_layer);

	element_layer.style.display = 'block';
	document.querySelector('[id^=__daum__layer]').style.position = 'absolute'
	document.querySelector('[id^=__daum__layer]').style.top = '60px'
  document.querySelector('[id=closewrap]').style.display = 'block'

};



const verification = () => {
  if (
    [
      get.nm,
      get.moblphonNo,
      get.postNo,
      get.bassAddr,
      get.detailAddr,
      d.scrtky
    ].some((item) => item === "")
  ) {
    // *표시된 필수 정보 입력 여부 확인
    app.error = {
      type: "alert",
      message: "모든 필수 정보를 작성해주세요.",
      hasClose: false
    };
    return false;
  } else if (get.moblphonNo.length < 11) {
    app.error = {
      type: "alert",
      message: "휴대폰 번호가 유효하지 않습니다.",
      hasClose: false
    };
    return false;
  }
  return true;
};

const nextClick = async () => {
  if (d.isNext) {
    // [휴대폰 인증] 완료 후 '확인'
    if (d.isActive1) {
      d.isNext = false; // [수정] 활성화
      d.isActive1 = false; // '확인' 버튼 비활성화
    }
  } else if (!d.isNext) {
    // [수정] 완료 후 '확인'
    if (d.isActive1) {
      const isValid = verification();
      if (isValid) {
        const result = await hnoUpdate({
          hnoIssuNo: get.hnoIssuNo,
          nm: get.nm,
          moblphonNo: get.moblphonNo,
          postNo: get.postNo,
          bassAddr: get.bassAddr,
          detailAddr: get.detailAddr,
          scrtky: d.scrtky,
          addrNcm: get.addrNcm
        });
        if (result) {
          d.completed = true; // 완료페이지 활성화
        } else {
          d.completed = false;
        }
      }
    }
  }
};

watch(
  // input 값 입력이 하나라도 되어 있으면 d.isActive1 = true; 하나도 입력이 없으면 d.isActive1 = false;
  () => [
    get.nm,
    get.moblphonNo,
    get.postNo,
    get.bassAddr,
    get.detailAddr,
    d.scrtky,
    get.addrNcm
  ],
  (newValues) => {
    d.isActive1 = newValues.some((value) => value.trim() !== "");
    console.log("d.isActive1_수정_워치:", d.isActive1);
  }
);

onMounted(async () => {
  d.isActive1 = false;
  const isError = await app.requiredValue();
  if (!isError) {
    hnogetList();
    app.page = true;
  }
  app.addDaumPostcodeScript(); // daum 우편번호 찾기 API
});

console.log("d.isActive1_수정:", d.isActive1);
</script>

<template>
  <div v-if="app.page">
    <TitleTop :text="d.text" />
    <section v-if="!d.completed">
      <div class="top" v-if="!d.isNext">
        <div class="input-text">홈넘버 <span>*</span></div>
        <div>{{ formatNb(get.hnoNo) }}</div>
      </div>
      <div class="contents" :class="d.isNext ? 'hp' : 'modifi'">
        <div class="phone" v-if="d.isNext">
          <div>
            외부로부터 회원님의 정보를 더 안전하게 보호하기 위한
            방법입니다.&nbsp; 본인 확인을 위해 회원가입 시 입력하신 휴대폰
            번호로 인증하여 주시기 바랍니다.
          </div>
          <div>
            <ul>
              <li class="input-text">휴대폰 번호 <span>*</span></li>
              <li>
                <div class="input-box">
                  <input
                    type="text"
                    class="disabled"
                    v-model="myGetStore.moblphonNo"
                    disabled
                  />
                  <button class="bg-w line" @click="phoneAuth">
                    인증번호 전송
                  </button>
                </div>
              </li>
              <li class="input-box" v-if="d.isPhone">
                <div class="input-box time">
                  <input
                    type="text"
                    placeholder=""
                    @input="limitInputNumber($event, 6, 'crtfcNo')"
                    v-model="d.crtfcNo"
                  />
                  <Countdown
                    :command="d.cdCommand"
                    :seconds="180"
                    :onEnd="handleTimerEnd"
                  >
                    <div ref="timer" counter>
                      {{ d.time }}
                    </div>
                  </Countdown>
                  <button class="bg-w line" @click="phoneAuthCheck">
                    인증번호 확인
                  </button>
                </div>
                <div>
                  *3분 이내로 인증번호(6자리)를 입력해주세요.<br />
                  *인증번호 재전송은 1분내 1회만 가능합니다.
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div class="modifi" v-if="!d.isNext">
          <div class="inputDatas">
            <div class="inner">
              <ul>
                <li>
                  <div class="input-text">이름 <span>*</span></div>
                  <div>
                    <input
                      type="text"
                      v-model="get.nm"
                      placeholder="이름 입력"
                      @input="limitInputText($event, 'nm')"
                    />
                  </div>
                </li>
                <li>
                  <div class="input-text">휴대폰 번호 <span>*</span></div>
                  <div>
                    <input
                      type="text"
                      v-model="get.moblphonNo"
                      placeholder="번호 입력 (배송지 연락처)"
                      @input="limitInputNumber($event, 11, 'moblphonNo')"
                    />
                  </div>
                </li>
                <li class="addInp">
                  <div class="input-text">배송지 주소 <span>*</span></div>
                  <div>
                    <ul>
                      <li>
                        <div>
                          <input
                            type="text"
                            class="disabled"
                            v-model="get.postNo"
                            placeholder="우편번호"
                            disabled
                          />
                        </div>
                        <div>
                          <button
                            class="bg-w line"
                            @click="handleClickAddressSearch()"
                          >
                            우편번호 찾기
                          </button>
                        </div>
                      </li>
                      <li>
                        <input
                          type="text"
                          class="disabled"
                          v-model="get.bassAddr"
                          placeholder="기본주소"
                          disabled
                        />
                      </li>
                      <li>
                        <input
                          type="text"
                          v-model="get.detailAddr"
                          placeholder="상세 주소 입력"
                        />
                      </li>
                    </ul>
                  </div>
                </li>
                <li>
                  <div class="input-text">주소 별칭</div>
                  <div>
                    <input
                      type="text"
                      maxLength="10"
                      v-model="get.addrNcm"
                      placeholder="최대 10자"
                    />
                  </div>
                </li>
                <li>
                  <div class="input-text">보안키 <span>*</span></div>
                  <div>
                    <input
                      type="password"
                      maxLength="4"
                      v-model="d.scrtky"
                      placeholder="숫자 4자리"
                      @input="limitInputNumber($event, 4, 'scrtky')"
                    />
                  </div>
                </li>
              </ul>
              <div class="red">
                홈넘버 정보를 수정하더라도 이전에 주문한 보안 택배의 배송지
                정보는 변경되지 않습니다.
              </div>
            </div>
          </div>
        </div>
      </div>
      <button
        :class="d.isActive1 ? 'red-active' : 'default'"
        :disabled="!d.isActive1"
        @click="nextClick"
      >
        확인
      </button>
    </section>
    <postcode />
    <section v-if="d.completed">
      <completed :topText="d.topText" :btntext="d.btntext" :type="d.type" />
    </section>
  </div>
</template>

<style lang="scss" scoped>
.top {
  justify-content: flex-start;
  div {
    font-size: 18px;
    font-weight: bold;
    &:first-child {
      width: 30%;
      padding-left: 10px;
      margin-right: 10px;
      margin-bottom: 0;
    }
  }
}
.contents {
  overflow: hidden;
}

.hp {
  margin-top: 20px;
  height: 56vh;
  height: 56dvh;
}

.modifi {
  margin-top: 20px;
  height: 51dvh;
  height: 51dvh;
}

.phone {
  div {
    &:nth-child(1) {
      font-size: 15px;
      line-height: 1.2rem;
    }
    &:nth-child(2) {
      line-height: 1.5rem;
      margin-top: 20px;
      ul {
        li {
          &:nth-child(1) {
            margin-bottom: 10px;
          }
          &:nth-child(2) {
            margin-bottom: 10px;
          }
          div.input-box {
            display: flex;
            justify-content: center;
            align-items: center;
          }
          button {
            width: 200px;
            margin-left: 10px;
          }
        }
      }
    }
  }
}

.red {
  font-weight: bold;
  margin-top: 20px;
  line-height: 1.3rem;
  color: $c-b500;
}

.time {
  > input {
    position: relative;
    z-index: 0;
  }
  > div {
    width: 140px;
    position: relative;
    z-index: 1;
    margin-top: 0 !important;
    margin-left: -90px;
    > div {
      font-size: 16px !important;
      font-weight: bold;
      color: $c-b500;
    }
  }
}

//팝업창
@media (min-height: 769px) and (max-width: 820px) {
  .hp {
    height: 66vh;
    height: 66dvh;
  }

  .modifi {
    height: 58.5vh;
    height: 58.5dvh;
  }

  .time {
    > div {
      width: 110px;
      margin-left: -70px;
    }
  }
}

@media (max-width: 712px) {
  .top {
    margin-top: 2vh;
  }
}

@media (max-width: 479px) and (min-height: 769px) and (max-width: 819px) {
  section {
    overflow: auto;
  }

  .hp {
    height: 58vh;
    height: 58dvh;
  }

  .modifi {
    height: 81vh;
    height: 81dvh;
  }
}

//모바일 사이즈별
@media (max-height: 768px) {
  section {
    height: 76vh;
    height: 76dvh;
    margin-top: 5%;
    overflow: auto;
  }

  .hp {
    height: 60vh;
    height: 60dvh;
  }

  .modifi {
    height: 88dvh;
    height: 88dvh;
  }
}

@media (max-height: 740px) {
  .hp {
    height: 60vh;
    height: 60dvh;
  }

  .modifi {
    height: 100dvh;
    height: 100dvh;
    margin-bottom: 1.5rem;
  }
}

@media (max-height: 667px) {
  section {
    height: 75vh;
    height: 75dvh;
  }

  .hp {
    height: 55vh;
    height: 55dvh;
    .phone {
      div {
        font-size: 14px;
      }
    }
  }

  .modifi {
    height: 107dvh;
    height: 107dvh;
  }
}

@media (max-height: 600px) {
  .modifi {
    height: 115dvh;
    height: 115dvh;
  }
}

@media (max-height: 568px) {
  section {
    height: 73vh;
    height: 73dvh;
  }

  .hp {
    height: 53vh;
    height: 53dvh;
  }

  .modifi {
    height: 130dvh;
    height: 130dvh;
  }
}

@media (max-height: 530px) {
  .modifi {
    height: 134dvh;
    height: 134dvh;
  }
}

@media (min-width: 344px) and (max-width: 430px) and (min-height: 812px) and (max-height: 935px) {
  // 높이가 높은 모바일
  section {
    height: 82vh;
    height: 82dvh;
    overflow-y: auto;
  }

  .hp {
    height: 65vh;
    height: 65dvh;
  }

  .modifi {
    height: 80dvh;
    height: 80dvh;
  }
}

@media (max-height: 480px) {
  // 높이가 낮은 모바일

  section {
    min-height: 71vh;
    min-height: 71dvh;
  }

  .top {
    margin-top: 6vh;
  }

  .hp {
    min-height: 74vh;
    min-height: 74dvh;
  }

  .modifi {
    min-height: 160vh;
    min-height: 160dvh;
  }
}
</style>
