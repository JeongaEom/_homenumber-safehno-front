<script setup>
import { reactive, computed, onMounted, watch } from "vue";
import { useRouter } from "vue-router";
import { hnoIssDo, hnoDupchk } from "@/api";

const router = useRouter();
const app = useAppStore();

definePageMeta({
  name: "issuance"
});

const d = reactive({
  backAction() {
    router.replace("/homenumberList");
  },
  hnoNo1: "100",
  hnoNo2: "",
  hnoNo3: "",
  dupchkResult: "",
  nm: "",
  moblphonNo: "",
  postNo: "",
  bassAddr: "",
  detailAddr: "",
  scrtky: "",
  scrtkyConfirm: "",
  addrNcm: "",
  isActive: false,
  topText: "홈넘버 발급이<br />성공적으로 이루어졌습니다.",
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
    d[field] = value.slice(0, maxLength);
  } else {
    d[field] = value;
  }
}

const combinedHnoNo = computed(() => `${d.hnoNo1}${d.hnoNo2}${d.hnoNo3}`);

const dupchk = async () => {
  // 중복확인

  if (
    (d.hnoNo2.length !== 4 && d.hnoNo3.length !== 4) ||
    d.hnoNo2.length !== 4 ||
    d.hnoNo3.length !== 4
  ) {
    app.error = {
      type: "alert",
      message: "홈넘버 번호가 유효하지 않습니다. (중간 4자리, 뒤 4자리)",
      hasClose: false
    };
  } else {
    d.dupchkResult = await hnoDupchk(combinedHnoNo.value);
    console.log("d.dupchkResult: ", d.dupchkResult);
    console.log("combinedHnoNo.value: ", combinedHnoNo.value);
  }
};

onMounted(async () => {
  const isError = await app.requiredValue();
  if (!isError) {
    app.page = true;
  }

  app.addDaumPostcodeScript(); // daum 우편번호 찾기 API
});

const handleClickAddressSearch = () => {
  // daum 우편번호 찾기
  // 팝업창 크기
  const width = 500;
  const height = 500;
  // 팝업창 위치
  const left = window.screen.width / 2 - width / 2;
  const top = window.screen.height / 2 - height / 2;

  new daum.Postcode({
    width,
    height,
    oncomplete: function (data) {
      console.log(data);
      d.postNo = data.zonecode; // 우편번호
      let address = data.roadAddress; // 도로명 주소
      let building = data.buildingName ? ` (${data.buildingName})` : ""; // 건물명이 있으면 앞에 공백을 두고 추가, 없으면 빈 문자열
      d.bassAddr = address + building;
    }
  }).open({
    popupTitle: "우편번호 검색",
    left,
    top
  });
};

const verification = () => {
  if (
    [
      d.hnoNo1,
      d.hnoNo2,
      d.hnoNo3,
      d.nm,
      d.moblphonNo,
      d.postNo,
      d.bassAddr,
      d.detailAddr,
      d.scrtky,
      d.scrtkyConfirm
    ].some((item) => item === "")
  ) {
    // *표시된 필수 정보 입력 여부 확인
    app.error = {
      type: "alert",
      message: "모든 필수 정보를 작성해주세요.",
      hasClose: false
    };
    return false;
  } else if (d.hnoNo2.length !== 4 && d.hnoNo3.length !== 4) {
    app.error = {
      type: "alert",
      message: "홈넘버 번호가 유효하지 않습니다. (중간 4자리, 뒤 4자리)",
      hasClose: false
    };
    return false;
  } else if (d.moblphonNo.length < 11) {
    app.error = {
      type: "alert",
      message: "휴대폰 번호가 유효하지 않습니다.",
      hasClose: false
    };
    return false;
  } else if (d.scrtky !== d.scrtkyConfirm) {
    app.error = {
      type: "alert",
      message: "보안키가 일치하지 않습니다.",
      hasClose: false
    };
    return false;
  } else if (!d.dupchkResult) {
    app.error = {
      type: "alert",
      message: "홈넘버 중복확인을 해주세요.",
      hasClose: false
    };
    return false;
  }
  return true;
};

const endClick = async () => {
  const isValid = verification();
  if (isValid) {
    const result = await hnoIssDo({
      hnoNo: combinedHnoNo.value,
      nm: d.nm,
      moblphonNo: d.moblphonNo,
      postNo: d.postNo,
      bassAddr: d.bassAddr,
      detailAddr: d.detailAddr,
      scrtky: d.scrtky,
      addrNcm: d.addrNcm
    });

    if (result) {
      d.completed = true;
      d.isActive = true; // 완료페이지 활성화
    } else {
      d.completed = false;
      d.isActive = false;
    }
  }
};

watch(
  // input 값 입력이 하나라도 되어 있으면 d.isActive = true; 하나도 입력이 없으면 d.isActive = false;
  () => [
    d.hnoNo1,
    d.hnoNo2,
    d.hnoNo3,
    d.nm,
    d.moblphonNo,
    d.postNo,
    d.bassAddr,
    d.detailAddr,
    d.addrNcm,
    d.scrtky,
    d.scrtkyConfirm
  ],
  (newValues) => {
    /*
      d.hnoNo1, d.hnoNo2, d.hnoNo3 세 개의 변수만 숫자로 구성되어 있는지 확인하고
      모두 숫자로 구성되어 있다면 d.isActive를 true로 설정
      그외에는 input 입력시 바로 반응
    */
    const isNumberOnly = newValues
      .slice(0, 3)
      .every((value) => /^\d+$/.test(value));
    d.isActive =
      isNumberOnly || newValues.slice(3).some((value) => value.trim() !== "");
  }
);
</script>

<template>
  <div v-if="app.page">
    <TitleTop :hasBackButton="d.backAction" text="홈넘버 발급" />
    <section class="sections" v-if="!d.completed">
      <div class="top">
        <div class="inputDatas">
          <div class="inner">
            <div class="input-text">홈넘버 <span>*</span></div>
            <div>
              <input type="text" class="disabled" v-model="d.hnoNo1" disabled />
              <div>-</div>
              <input
                type="text"
                placeholder="NNNN"
                @input="limitInputNumber($event, 4, 'hnoNo2')"
                v-model="d.hnoNo2"
              />
              <div>-</div>
              <input
                type="text"
                placeholder="NNNN"
                @input="limitInputNumber($event, 4, 'hnoNo3')"
                v-model="d.hnoNo3"
              />
            </div>
            <button class="bg-w line" @click="dupchk">중복확인</button>
          </div>
        </div>
      </div>
      <div class="contents">
        <div class="inputDatas">
          <div class="inner">
            <ul>
              <li>
                <div class="input-text">이름 <span>*</span></div>
                <div>
                  <input
                    type="text"
                    v-model="d.nm"
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
                    v-model="d.moblphonNo"
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
                          type="number"
                          class="disabled"
                          v-model="d.postNo"
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
                        v-model="d.bassAddr"
                        placeholder="기본주소"
                        disabled
                      />
                    </li>
                    <li>
                      <input
                        type="text"
                        v-model="d.detailAddr"
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
                    v-model="d.addrNcm"
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
              <li>
                <div class="input-text">보안키 확인 <span>*</span></div>
                <div>
                  <input
                    type="password"
                    maxLength="4"
                    v-model="d.scrtkyConfirm"
                    placeholder="숫자 4자리"
                    @input="limitInputNumber($event, 4, 'scrtkyConfirm')"
                  />
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <button
        class="btn-checks"
        :class="d.isActive ? 'red-active' : 'default'"
        :disabled="!d.isActive"
        @click="endClick"
      >
        확인
      </button>
    </section>

    <section v-if="d.completed">
      <completed :topText="d.topText" :btntext="d.btntext" :type="d.type" />
    </section>
  </div>
</template>

<style lang="scss" scoped>
section {
  > .contents {
    margin-top: 30px;
    height: auto;
  }
}

.top {
  .inputDatas {
    .inner {
      div {
        &:nth-child(2) {
          display: flex;
          align-items: center;
        }
      }
    }
  }
}

@media (max-width: 768px) {
  section {
    margin-top: 10px;
    overflow: auto;
    height: 79vh;
  }
}

@media (min-width: 466px) {
  .top {
    .inputDatas {
      .inner {
        display: flex;
        justify-content: space-between;
        align-items: center;
        div {
          &:nth-child(1) {
            width: 20%;
          }
          &:nth-child(2) {
            width: 60%;
            div {
              margin: 0 4px;
              width: 10px;
            }
          }
        }
        button {
          width: 19%;
          margin-left: 1%;
        }
      }
    }
  }
}

@media (max-width: 465px) {
  .top {
    .inputDatas {
      .inner {
        div {
          &:nth-child(2) {
            margin: 10px 0;
          }
        }
      }
    }
  }
}

//모바일 사이즈별
@media (max-width: 480px) and (max-width: 820px) {
  section {
    height: 80vh !important;
    height: 80dvh !important;
  }
}

@media (max-height: 940px) {
  .sections {
    height: 78vh;
    height: 78dvh;
  }
}

@media (max-height: 667px) {
  .sections {
    height: 77vh;
    height: 77dvh;
  }
}

@media (max-height: 667px) {
  .sections {
    height: 77vh;
    height: 77dvh;
  }
}

@media (max-height: 480px) {
  // 높이가 낮은 모바일
  .sections {
    height: 70vh;
    height: 70dvh;
    margin-top: 28px;
  }
}
</style>
