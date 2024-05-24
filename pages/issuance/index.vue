<script setup>
import { reactive, computed, onMounted, watch } from "vue";
import { useRouter } from "vue-router";
import { hnoIssDo, hnoDupchk } from "@/api";
import { useAppStore } from "@/stores";

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
  btntext: "발급",
  height: "545",
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
  }
};

onMounted(() => {
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
      d.postNo = data.zonecode;
      d.bassAddr = data.roadAddress;
    }
  }).open({
    popupTitle: "우편번호 검색",
    left,
    top
  });
};

const endClick = async () => {
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
  } else if (d.hnoNo2.length !== 4 && d.hnoNo3.length !== 4) {
    app.error = {
      type: "alert",
      message: "홈넘버 번호가 유효하지 않습니다. (중간 4자리, 뒤 4자리)",
      hasClose: false
    };
  } else if (d.moblphonNo.length < 11) {
    app.error = {
      type: "alert",
      message: "휴대폰 번호가 유효하지 않습니다.",
      hasClose: false
    };
  } else if (d.scrtky !== d.scrtkyConfirm) {
    app.error = {
      type: "alert",
      message: "보안키가 일치하지 않습니다.",
      hasClose: false
    };
  } else if (!d.dupchkResult) {
    app.error = {
      type: "alert",
      message: "홈넘버 중복확인을 해주세요.",
      hasClose: false
    };
  }
  if (d.scrtkyConfirm && d.scrtky === d.scrtkyConfirm) {
    /*
      보안키 확인 입력 및 보안키와 보안키 확인이 일치해야
      '발급 api | hnoIssDo' 동작 그외에는 서버에서 입력여부를 잡아줌
    */
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
  <TitleTop :hasBackButton="d.backAction" text="홈넘버 발급" />
  <section v-if="!d.completed">
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
      :class="d.isActive ? 'red-active' : 'default'"
      :disabled="!d.isActive"
      @click="endClick"
    >
      확인
    </button>
  </section>

  <section v-if="d.completed">
    <completed :topText="d.topText" :btntext="d.btntext" :height="d.height" />
  </section>
</template>

<style lang="scss" scoped>
section {
  > .contents {
    min-height: 444px;
    margin-top: 30px;
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
</style>
