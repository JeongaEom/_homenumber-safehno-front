<script setup>
import { reactive, onMounted, watch, computed, onBeforeUnmount } from "vue";
import { termsList, userSignup, mberIdcheck } from "@/api";
import { useAppStore, useTermsStore, useAuthStore } from "@/stores";

const app = useAppStore();
const termsStore = useTermsStore();
const auth = useAuthStore();

definePageMeta({
  name: "signup"
});

const d = reactive({
  text: "01",
  termsGrpCd: "1010001",
  selectAll: false,
  selectedItems: [],
  isActive1: false,
  isActive2: false,
  mberId: "",
  pwd: "",
  pwdConfirm: "",
  email: "",
  encData: "",
  validId: false,
  topText:
    "회원 가입이 완료되었습니다. <br /> 서비스 이용을 위해 홈넘버를 발급해 주세요.",
  btntext: "내 홈넘버 보기",
  height: "468",
  completed: false
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

const listTerms = async () => {
  await termsList(d.termsGrpCd);
  termsStore.termsGrpNm = "Y";
  auth.signupTems = termsStore.data;
  console.log("auth.signupTems: ", auth.signupTems);
  console.log("termsStore.termsGrpNm : ", termsStore.termsGrpNm);
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

  if (d.selectAll) {
    d.isActive1 = true;
  } else {
    d.isActive1 = false;
  }
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

  if (d.selectAll) {
    d.isActive1 = true;
  } else {
    d.isActive1 = false;
  }
};

// 02 회원정보 입력
const doubleClick = async () => {
  // 중복확인
  d.validId = await mberIdcheck(d.mberId);
  console.log("d.mberId: ", d.mberId);
  console.log("d.validId: ", d.validId);
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
    // `${window.location.origin}/nid-success`,
    "HOMENUMBER",
    `width=${ww}, height=${wh}, top=${top}, left=${left}`
  );
};

const eventClick1 = () => {
  if (d.isActive1) {
    d.text = "02"; // 회원정보 입력
  }
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
  window.addEventListener("message", CB_MESSAGE);
});

onBeforeUnmount(() => {
  window.removeEventListener("message", CB_MESSAGE);
});

const eventClick2 = async () => {
  // 비밀번호 확인 불일치
  if (d.pw !== d.pwConfirm) {
    app.error = {
      type: "alert",
      message: "입력하신 비밀번호가 서로 다릅니다.",
      hasClose: false
    };
  }
  if (d.isActive2) {
    await userSignup(d.mberId, d.pwd, d.email, d.encData);
    if (userSignup) {
      d.text = "03";
      d.completed = true;
    }
  }
};

watch(
  () => [d.mberId, d.pwd, d.email, d.pwdConfirm],
  (newValues) => {
    d.isActive2 = newValues.some((value) => value.trim() !== "");
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
                    <input type="text" placeholder="이메일" v-model="d.email" />
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
      :class="d.isActive1 ? 'red-active' : 'default'"
      v-if="d.text === '01'"
      @click="eventClick1"
    >
      다음
    </button>
    <button
      :class="d.isActive2 ? 'red-active' : 'default'"
      v-if="d.text === '02'"
      @click="eventClick2"
    >
      확인
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
</style>
