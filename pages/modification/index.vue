<script setup>
// import { reactive, watch } from "vue";
import { reactive } from "vue";
// import { smsCertiReq, smsCertiConfirm, hnoGet, hnoUpdate } from "@/api";
import { smsCertiReq, smsCertiConfirm, hnoGet } from "@/api";
import { useAppStore, useEndDataStore } from "@/stores";
import { formatNb } from "@/utils";

const endDataStore = useEndDataStore();
const app = useAppStore();

definePageMeta({
  name: "modification"
});

const d = reactive({
  text: "홈넘버 수정",
  isPhone: false, // 휴대폰 인증 확인
  isActive: false,
  moblphonNo1: "", // 휴대폰 인증번호 요청
  crtfcNo: "",
  homeNb: "10010001005",
  isNext: true, // true는 휴대폰 인증 | false는 수정
  completed: false
});

function limitInputNumber(event, maxLength, field) {
  const value = event.target.value.replace(/[^0-9]/g, ""); // 숫자만 허용
  if (value.length > maxLength) {
    d[field] = value.slice(0, maxLength);
  } else {
    d[field] = value;
  }
}

const phoneAuth = async () => {
  const phoneReq = await smsCertiReq(d.moblphonNo1);

  if (phoneReq) {
    d.isPhone = true;
  }
};

const phoneAuthCheck = async () => {
  // 필수입력 완료시
  const phoneConfirm = await smsCertiConfirm(
    d.moblphonNo1,
    app.crtfcTkn,
    d.crtfcNo
  );

  if (phoneConfirm) {
    d.isActive = true;
  }
};

const nextClick = () => {
  if (d.isNext) {
    if (d.isActive) {
      d.isNext = false;
      d.isActive = false;
    }
  } else if (!d.isNext) {
    // if(d.isActive) {
    endDataStore.endData = "2"; // 수정
    d.completed = true;
    // }
  }
};

// watch(
//   // input 값 입력이 하나라도 되어 있으면 d.isActive = true; 하나도 입력이 없으면 d.isActive = false;
//   () => [
//     d.hnoNo1,
//     d.hnoNo2,
//     d.hnoNo3,
//     d.nm,
//     d.moblphonNo,
//     d.postNo,
//     d.bassAddr,
//     d.detailAddr,
//     d.addrNcm,
//     d.scrtky,
//     d.scrtkyConfirm
//   ],
//   (newValues) => {
//     d.isActive = newValues.some((value) => value.trim() !== "");
//   }
// );
</script>

<template>
  <TitleTop :text="d.text" />
  <section v-if="!d.completed">
    <div class="top" v-if="!d.isNext">
      <div class="input-text">홈넘버 <span>*</span></div>
      <div>{{ formatNb(d.homeNb) }}</div>
    </div>
    <div class="contents">
      <div class="phone" v-if="d.isNext">
        <div>
          외부로부터 회원님의 정보를 더 안전하게 보호하기 위한 방법입니다.&nbsp;
          본인 확인을 위해 회원가입 시 입력하신 휴대폰 번호로 인증하여 주시기
          바랍니다.
        </div>
        <div>
          <ul>
            <li class="input-text">휴대폰 번호 <span>*</span></li>
            <li>
              <div class="input-box">
                <input
                  type="text"
                  placeholder=""
                  @input="limitInputNumber($event, 11, 'moblphonNo1')"
                  v-model="d.moblphonNo1"
                />
                <button class="bg-w line" @click="phoneAuth">
                  인증번호 전송
                </button>
              </div>
            </li>
            <li class="input-box" v-if="d.isPhone">
              <div class="input-box">
                <input
                  type="text"
                  placeholder=""
                  @input="limitInputNumber($event, 25, 'crtfcNo')"
                  v-model="d.crtfcNo"
                />
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
                  <input type="text" placeholder="" />
                </div>
              </li>
              <li>
                <div class="input-text">휴대폰 번호 <span>*</span></div>
                <div>
                  <input type="text" placeholder="" />
                </div>
              </li>
              <li class="addInp">
                <div class="input-text">배송지 주소 <span>*</span></div>
                <div>
                  <ul>
                    <li>
                      <div>
                        <input type="text" placeholder="" disabled />
                      </div>
                      <div>
                        <button class="bg-w line">우편번호 찾기</button>
                      </div>
                    </li>
                    <li>
                      <input type="text" placeholder="" disabled />
                    </li>
                    <li>
                      <input type="text" placeholder="" />
                    </li>
                  </ul>
                </div>
              </li>
              <li>
                <div class="input-text">주소 별칭</div>
                <div>
                  <input type="text" placeholder="" />
                </div>
              </li>
              <li>
                <div class="input-text">보안키 <span>*</span></div>
                <div>
                  <input type="text" placeholder="" />
                </div>
              </li>
            </ul>
            <div class="red">
              홈넘버 정보를 수정하더라도 이전에 주문한 보안 택배의 배송지 정보는
              변경되지 않습니다.
            </div>
          </div>
        </div>
      </div>
    </div>
    <button :class="d.isActive ? 'red-active' : 'default'" @click="nextClick">
      확인
    </button>
  </section>

  <section v-if="d.completed">
    <completed />
  </section>
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
  min-height: 514px;
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
            justify-content: space-between;
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
</style>
