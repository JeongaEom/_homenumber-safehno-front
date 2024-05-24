<script setup>
import { reactive, onMounted, watch, computed, onBeforeUnmount } from "vue";
import { termsList, mberSignup, mberIdcheck } from "@/api";
import { useAppStore, useTermsStore, useAuthStore } from "@/stores";

const app = useAppStore();
const termsStore = useTermsStore();
const auth = useAuthStore();

definePageMeta({
  name: "signup"
});

const d = reactive({
  text: "01", // 01 이용약관 동의 || 02 회원정보 입력 || 03 가입완료
  termsGrpCd: "1010001",
  selectAll: false,
  selectedItems: [],
  isActive: false,
  mberId: "",
  pwd: "",
  pwdConfirm: "",
  email: "",
  encData: "",
  validId: false,
  topText:
    "회원 가입이 완료되었습니다. <br /> 서비스 이용을 위해 홈넘버를 발급해 주세요.",
  btntext: "로그인",
  height: "507",
  completed: false,
  regex: ""
});

watch(
  () => d.mberId,
  () => {
    d.validId = false;
  }
);

const titleText = computed(() =>
  d.text === "01" ? "이용약관 동의" : "회원정보 입력"
);

const btnText = computed(() => (d.text === "01" ? "다음" : "확인"));

const listTerms = async () => {
  await termsList(d.termsGrpCd);
  termsStore.termsGrpNm = "Y";
  auth.signupTems = termsStore.data;
};

onMounted(() => {
  listTerms();
});

// 01 이용약관 동의 (체크박스)
const toggleSelectAll = () => {
  d.selectAll = !d.selectAll;
  d.selectedItems = d.selectAll
    ? auth.signupTems.map((item) => item.termsCd)
    : [];
};

const toggleItem = (item) => {
  if (d.selectedItems.includes(item.termsCd)) {
    d.selectedItems = d.selectedItems.filter(
      (termsCd) => termsCd !== item.termsCd
    );
  } else {
    d.selectedItems.push(item.termsCd);
  }
  d.selectAll = d.selectedItems.length === auth.signupTems.length;
};

watch(
  () => d.selectAll,
  (newVal) => {
    d.isActive = newVal;
  }
);

// 02 회원정보 입력
const doubleClick = async () => {
  // 중복확인
  if (d.mberId.length < 5 || d.mberId.length > 16) {
    app.error = {
      type: "alert",
      message: "아이디는 영문(소문자), 숫자로 5~16자 이내로 입력해 주세요.",
      hasClose: false
    };
  } else {
    d.validId = await mberIdcheck(d.mberId);
  }
};

const validateEmail = () => {
  d.regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
  // if (!regex.test(d.email)) {
  //   app.error = {
  //     type: "alert",
  //     message: "이메일 형식이 아닙니다.",
  //     hasClose: false
  //   };
  // }
};

const eventHpClick = async () => {
  // 휴대폰 본인 인증
  // 팝업창 크기
  const ww = 480;
  const wh = 812;
  // 팝업창 위치
  const left = (document.documentElement.clientWidth - ww) / 2;
  const top = (document.documentElement.clientHeight - wh) / 2;
  window.open(
    `${window.location.origin}/nid-request`,
    "HOMENUMBER",
    `width=${ww}, height=${wh}, top=${top}, left=${left}`
  );
};

const CB_MESSAGE = (e) => {
  const { data } = e;
  console.log(e);
  if (data.msg === "AUTH_COMPLETE") {
    d.encData = data.EncodeData;
    console.log("EncodeData 👇");
    console.log(data.EncodeData);
  }
};

onMounted(() => {
  // POSTMESSAGE 대기
  window.addEventListener("message", CB_MESSAGE);
});

onBeforeUnmount(() => {
  // POSTMESSAGE 대기 해제
  window.removeEventListener("message", CB_MESSAGE);
});

const eventClick = async (data) => {
  if (data === "01") {
    if (d.isActive) {
      d.text = "02"; // 회원정보 입력으로 이동
      d.isActive = false;
    }
  } else if (data === "02") {
    if ([d.mberId, d.pwd, d.pwdConfirm, d.email].some((item) => item === "")) {
      app.error = {
        type: "alert",
        message: "모든 필수 정보를 작성해주세요.",
        hasClose: false
      };
    } else if (d.mberId.length < 5 || d.mberId.length > 16) {
      app.error = {
        type: "alert",
        message: "아이디는 영문(소문자), 숫자로 5~16자 이내로 입력해 주세요.",
        hasClose: false
      };
    } else if (d.pwd !== d.pwdConfirm) {
      // 비밀번호 확인 불일치
      app.error = {
        type: "alert",
        message: "입력하신 비밀번호가 서로 다릅니다.",
        hasClose: false
      };
    } else if (!d.regex.test(d.email)) {
      app.error = {
        type: "alert",
        message: "이메일 형식이 아닙니다.",
        hasClose: false
      };
    } else if (!d.validId) {
      // 중복확인
      app.error = {
        type: "alert",
        message: "ID 중복확인은 필수입니다.",
        hasClose: false
      };
    } else if (!d.encData) {
      // 본인인증
      app.error = {
        type: "alert",
        message: "휴대폰 본인인증을 완료해주세요.",
        hasClose: false
      };
      app.codeActive = true;
    }

    if (d.email) {
      validateEmail();
    }

    const result = await mberSignup(d.mberId, d.pwd, d.email, d.encData);
    if (result) {
      d.text = "03"; // 가입완료 페이지 이동
      d.completed = true;
    } else {
      d.text = "02"; // 회원정보 입력 페이지 유지
      d.completed = false;
    }
  }
};

watch(
  () => [d.mberId, d.pwd, d.email, d.pwdConfirm],
  (newValues) => {
    d.isActive = newValues.some((value) => value.trim() !== "");
  }
);
</script>

<template>
  <TitleSignup :text="d.text" />
  <section>
    <div class="contents" v-if="!d.completed">
      <div class="subs-title" v-if="d.text !== '03'">
        <div>{{ titleText }}</div>
      </div>
      <div class="sub-ct">
        <div v-if="d.text === '01'">
          <input
            type="checkbox"
            id="checkbox-selectAll"
            class="custom-checkbox"
            :checked="d.selectAll"
            @change="toggleSelectAll"
          />
          <label for="checkbox-selectAll"> 모두 확인, 동의합니다. </label>
          <div
            class="terms"
            v-for="item in auth.signupTems"
            :key="item.termsCd"
          >
            <div class="t-title">{{ item.termsNm }}</div>
            <div class="textDatas">
              <div class="inner" v-html="item.termsCn"></div>
            </div>
            <input
              type="checkbox"
              :id="`checkbox-${item.termsCd}`"
              class="custom-checkbox"
              :checked="d.selectedItems.includes(item.termsCd)"
              @change="() => toggleItem(item)"
            />
            <label :for="`checkbox-${item.termsCd}`">
              <span
                :class="item.termsAgreEssntlYn === 'Y' ? 'essential' : 'select'"
              >
                [{{ item.termsAgreEssntlYn === "Y" ? "필수" : "선택" }}]&nbsp;
              </span>
              동의 합니다.
            </label>
          </div>
        </div>
        <div v-if="d.text === '02'">
          <div class="inputDatas">
            <div class="inner">
              <ul>
                <li>
                  <div class="input-text">아이디</div>
                  <div>
                    <ul>
                      <li>
                        <div>
                          <input
                            type="text"
                            placeholder="아이디"
                            v-model="d.mberId"
                          />
                        </div>
                        <div>
                          <button class="bg-w line" @click="doubleClick">
                            중복확인
                          </button>
                        </div>
                      </li>
                    </ul>
                  </div>
                </li>
                <li>
                  <div class="input-text">비밀번호 <span>*</span></div>
                  <div>
                    <input
                      type="password"
                      placeholder="비밀번호"
                      v-model="d.pwd"
                    />
                  </div>
                </li>
                <li>
                  <div class="input-text">비밀번호 확인 <span>*</span></div>
                  <div>
                    <input
                      type="password"
                      placeholder="비밀번호 확인"
                      v-model="d.pwdConfirm"
                    />
                  </div>
                </li>
                <li>
                  <div class="input-text">이메일 <span>*</span></div>
                  <div>
                    <input
                      type="text"
                      placeholder="이메일"
                      v-model="d.email"
                      @blur="validateEmail"
                    />
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <button class="bg-w line-hp" @click="eventHpClick">
            휴대폰 본인 인증
          </button>
        </div>
      </div>
    </div>
    <button
      :class="d.isActive ? 'red-active' : 'default'"
      v-if="!d.completed"
      :disabled="!d.isActive"
      @click="eventClick(d.text)"
    >
      {{ btnText }}
    </button>
    <completed
      :topText="d.topText"
      :btntext="d.btntext"
      :height="d.height"
      v-if="d.completed"
    />
  </section>
</template>

<style lang="scss" scoped>
section {
  > .contents {
    margin-top: 0;
    margin-bottom: 1.5rem;
    .sub-ct {
      height: 438px;
      position: relative;
      z-index: 1;
    }
  }
}
.subs-title {
  div {
    font-size: 24px;
    font-weight: bold;
    height: 56px;
    background-color: $c-g100;
    margin-bottom: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
}

.textDatas {
  margin: 10px 0;
}

.t-title {
  font-size: 18px;
  font-weight: bold;
}

.terms {
  margin-bottom: 40px;
  &:last-child {
    margin-bottom: 0;
  }
}

.inputDatas {
  margin-bottom: 20px;
}

button {
  z-index: 1000;
  position: relative;
}
</style>
