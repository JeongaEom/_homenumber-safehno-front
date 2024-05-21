<script setup>
import { reactive, onMounted, watch, computed } from "vue";
import { termsList } from "@/api";
import { useTermsStore } from "@/stores";

const termsStore = useTermsStore();

definePageMeta({
  name: "signup"
});

const d = reactive({
  text: "01",
  termsGrpCd: "1010001",
  termsListData: [],
  selectAll: false,
  isActive: "",
  topText:
    "회원 가입이 완료되었습니다. <br /> 서비스 이용을 위해 홈넘버를 발급해 주세요.",
  btntext: "내 홈넘버 보기",
  height: "468",
  completed: false
});

const titleText = computed(() =>
  d.text === "01" ? "이용약관 동의" : "회원정보 입력"
);

const btnText = computed(() => (d.text === "01" ? "다음" : "확인"));

const listTerms = async () => {
  await termsList(d.termsGrpCd);
  termsStore.termsGrpNm = "Y";
  d.termsListData = termsStore.data;
  console.log("d.termsListData: ", d.termsListData);
  console.log("termsStore.termsGrpNm : ", termsStore.termsGrpNm);
};

onMounted(() => {
  listTerms();
});

// 01 이용약관 동의 (체크박스)
// const allRequiredChecked = computed(() => {
//   // return d.dataList
//   // .filter((item) => item.type === "필수")
//   // .every((item) => item.checked);
// });

// watch(allRequiredChecked, (newVal) => {
//   d.isActive = newVal;
// });

const toggleSelectAll = () => {
  d.selectAll = !d.selectAll;
  d.termsListData.forEach((item) => {
    if (d.selectAll) {
      item.termsCd = "Y";
    } else {
      item.termsCd = "N";
    }
  });
};

const toggleItem = (item) => {
  item.termsCd = item.termsCd === "Y" ? "N" : "Y";
  d.selectAll = d.termsListData.every((item) => item.termsCd === "Y");
};

// 02 회원정보 입력
const doubleClick = () => {
  // 중복확인
};

const eventHpClick = () => {
  // 휴대폰 본인 인증
};

const eventClick = (data) => {
  if (data === "01") {
    d.text = "02"; // 회원정보 입력
  } else if (data === "02") {
    d.text = "03";
    d.completed = true;
  }
};
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
            :checked="selectAll"
            @change="toggleSelectAll"
          />
          <label for="checkbox-selectAll"> 모두 확인, 동의합니다. </label>
          <div
            class="terms"
            v-for="item in d.termsListData"
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
              :checked="item.termsCd === 'Y'"
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
                          <input type="text" placeholder="아이디" />
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
                    <input type="text" placeholder="비밀번호" />
                  </div>
                </li>
                <li>
                  <div class="input-text">비밀번호 확인 <span>*</span></div>
                  <div>
                    <input type="text" placeholder="비밀번호 확인" />
                  </div>
                </li>
                <li>
                  <div class="input-text">이메일 <span>*</span></div>
                  <div>
                    <input type="text" placeholder="이메일" />
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
