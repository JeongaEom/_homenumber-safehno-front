<script setup>
import { reactive, onMounted, watch, computed, onBeforeUnmount } from "vue";
import { termsList, mberSignup, mberIdcheck, certiPhoneEncDecode } from "@/api";


const app = useAppStore();
const termsStore = useTermsStore();
const auth = useAuthStore();


definePageMeta({
  name: "signup-web"
});

const d = reactive({
  text: "01", // 01 이용약관 동의 || 02 회원정보 입력 || 03 가입완료
  termsGrpCd: "1010001",
  selectAll: false,
  selectedItems: [],
  isActive: false,
  isWebbrowser: true,
  mberId: "",
  pwd: "",
  pwdConfirm: "",
  email: "",
  encData: "",
  gender: computed(() =>
    auth.gender === "0" ? "여성" : auth.gender === "1" ? "남성" : "없음"
  ),
  validId: false,
  validId1: false,
  validId2: false,
  topText:
    "회원 가입이 완료되었습니다.<br /> 이 창을 닫고 쇼핑을 계속하실 수 있습니다.",
  btntext: "로그인",
  type: "signup-web",
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

const btnText_name = computed(() => (d.text === "01" ? "다음" : "확인"));

const listTerms = async () => {
  await termsList(d.termsGrpCd);
  termsStore.termsGrpNm = "Y";
  auth.signupTems = termsStore.data;
};

onMounted(async () => {
  const isErrorNon = false; //await app.requiredValueNon();
  if (!isErrorNon) {
    app.page = true;
    app.isBrowser = true;
  }

	
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
function limitInputTextE(event, field) {
  const value = event.target.value.replace(/[^a-zA-Z0-9]/g, ""); // 영문자와 숫자만 허용
  d[field] = value;
}

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
};

const eventHpClick = () => {
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

const CB_MESSAGE = async (e) => {
  const { data } = e;
  // console.log(e);
  if (data.msg === "AUTH_COMPLETE") {
    d.encData = data.EncodeData;
    //document.querySelector('#divContents').style.height = '98vh'
    console.log("EncodeData 👇");
    console.log(data.EncodeData);
    await certiCode(); // EncodeData가 설정된 후 certiCode 호출

    // 이벤트 리스너 제거
    window.removeEventListener("message", CB_MESSAGE);
  }
};

const certiCode = async () => {
  await certiPhoneEncDecode(d.encData);
  console.log("d.encData_tttt: ", d.encData);
  console.log("gender: ", d.gender);
};

onMounted(() => {
  // POSTMESSAGE 대기
  window.addEventListener("message", CB_MESSAGE);
  console.log("gender: ", d.gender);
});

onBeforeUnmount(() => {
  // POSTMESSAGE 대기 해제
  window.removeEventListener("message", CB_MESSAGE);
});

const verification = () => {
  if ([d.mberId, d.pwd, d.pwdConfirm, d.email].some((item) => item === "")) {
    app.error = {
      type: "alert",
      message: "모든 필수 정보를 작성해주세요.",
      hasClose: false
    };
    return false;
  } else if (d.mberId.length < 5 || d.mberId.length > 16) {
    app.error = {
      type: "alert",
      message: "아이디는 영문(소문자), 숫자로 5~16자 이내로 입력해 주세요.",
      hasClose: false
    };
    return false;
  } else if (d.pwd !== d.pwdConfirm) {
    // 비밀번호 확인 불일치
    app.error = {
      type: "alert",
      message: "입력하신 비밀번호가 서로 다릅니다.",
      hasClose: false
    };
    return false;
  } else if (!d.regex.test(d.email)) {
    app.error = {
      type: "alert",
      message: "이메일 형식이 아닙니다.",
      hasClose: false
    };
    return false;
  } else if (!d.validId) {
    // 중복확인
    app.error = {
      type: "alert",
      message: "ID 중복확인은 필수입니다.",
      hasClose: false
    };
    return false;
  } else if (!d.encData) {
    // 본인인증
    app.error = {
      type: "alert",
      message: "휴대폰 본인인증을 완료해주세요.",
      hasClose: false
    };
    return false;
  }
  return true;
};

const eventClick = async (data) => {
  if (data === "01") {
  	document.getElementById("divContents").scrollTop=0
    if (d.isActive) {
      d.text = "02"; // 회원정보 입력으로 이동
      d.isActive = false;
    }
    console.log("app.tokenIssuId_: ", app.tokenIssuId);
  } else if (data === "02") {
    const isValid = verification();
    if (isValid) {
      const result = await mberSignup(
        app.tokenIssuId,
        d.mberId,
        d.pwd,
        d.email,
        d.encData
      );
      if (result) {
        d.text = "03"; // 가입완료 페이지 이동
        d.completed = true;
      } else {
        d.text = "02"; // 회원정보 입력 페이지 유지
        d.completed = false;

      }
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
    <div class="contents" id="divContents" v-if="!d.completed">
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
          <div class="inputDatas" id="divTab2" tabindex="1"> <!--add 0813-->
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
                            @input="limitInputTextE($event, 'mberId')"
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
                <!-- 휴대폰 본인 인증 완료후 나오는 데이터 -->
                <li v-if="d.encData" >
                  <div class="input-text">이름 <span>*</span></div>
                  <div>
                    <input type="text" v-model="auth.name" disabled />
                  </div>
                </li>
                <li v-if="d.encData">
                  <div class="input-text">생년월일 <span>*</span></div>
                  <div>
                    <input type="text" v-model="auth.birthDate" disabled />
                  </div>
                </li>
                <li v-if="d.encData">
                  <div class="input-text">성별 <span>*</span></div>
                  <div>
                    <input type="text" v-model="d.gender" disabled />
                  </div>
                </li>
                <li v-if="d.encData">
                  <div class="input-text">휴대폰 번호 <span>*</span></div>
                  <div>
                    <input type="text" v-model="auth.mobileNo" disabled />
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <button class="bg-w line-hp" v-if="!d.encData" @click="eventHpClick">
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
      {{ btnText_name }}
    </button>
    <completed
      :topText="d.topText"
      :btntext="d.btntext"
      :type="d.type"
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
      height: 415px;
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

//팝업창
@media (min-height: 769px) and (max-width: 820px) {
  section {
    > .contents {
      height: 62vh;
      height: 62dvh;
    }
  }
}

//모바일 사이즈별
@media (max-height: 768px) {
  section {
    overflow: auto;
    height: 72vh;
    height: 72dvh;
    > .contents {
      overflow: hidden;
      height: 75vh;
      height: 75dvh;
    }
  }
}

@media (max-height: 740px) {
  section {
    > .contents {
      height: 110vh;
      // height: 82dvh;
    }
    > .contents + button.default{margin: 0 0 1rem 0;}
  }
}



@media (max-height: 667px) {
  section {
    height: 69vh;
    height: 69dvh;
    > .contents {
      height: 97vh;
      height: 97dvh;
    }
   
  }
}

@media (max-height: 568px) {
  section {
    height: 63vh;
    height: 63dvh;
    > .contents {
      height: 106vh;
      height: 106dvh;
    }
  }
}

@media (min-width: 344px) and (max-width: 430px) and (min-height: 812px) and (max-height: 935px) {
  // 높이가 높은 모바일
  section {
    > .contents {
      height: 64vh;
      height: 64dvh;
    }
  }
}

@media (max-height: 480px) {
  // 높이가 낮은 모바일
  section {
    min-height: 100px;
    > .contents {
      min-height: 600px;
    }
  }
}
</style>
