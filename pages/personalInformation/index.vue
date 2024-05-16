<script setup>
import { reactive, onMounted } from "vue";
import { useHnoMyGetStore, useTermsStore } from "@/stores";
import { termsAgree, termsList } from "@/api";

const myGetStore = useHnoMyGetStore();
const termsStore = useTermsStore();
const shno = useSingleHnoStore();
const router = useRouter();

definePageMeta({
  name: "personalInformation"
});

// 조회 타입
const hnoSearchType = localStorage.getItem("hnoSearchType");

const d = reactive({
  text: "개인정보 제3자 제공 동의",
  isActive: false,
  termsGrpCd: "1010005",
  termsCd: "1020007",
  termsVer: "1",
  termsWithoutFirst: [],
  modelValue: false
});

const handleCheckboxChange = () => {
  if (d.modelValue) {
    d.isActive = true;
  } else {
    d.isActive = false;
  }
};

const listTerms = async () => {
  const termsResult = await termsList(d.termsGrpCd);

  // 첫번째 배열 값제외하고 리스트 받아오기
  d.termsWithoutFirst = termsStore.data.slice(1);
  termsStore.termsAgreEssntlYn = "Y";

  console.log("listTerms: ", termsResult);
  console.log("myGetStore.isMyHnoYn: ", myGetStore.isMyHnoYn);

  console.log("termsStore : ", termsStore.data[0].termsCn);
};

const CB_MESSAGE = (e) => {
  const { origin, data } = e;
  if (data.msg === "SAFE_HNO_SUCCESS") {
    console.log("SAFE_HNO_SUCCESS 👇");
    console.log(data);
    if (confirm("확인을 누르면 URL 이동")) {
      location.href = data.retUrl;
    }
  }
};

onMounted(() => {
  // @TEMP
  // setTimeout(() => {
  //   const width = 480;
  //   const height = 820;
  //   const left = window.screen.width / 2 - width / 2;
  //   const top = window.screen.height / 2 - height / 2;
  //   const windowFeatures = `width=${width},height=${height},top=${top},left=${left}`;
  //   const link =
  //     process.env.NODE_ENV === "development"
  //       ? `http://localhost:3002`
  //       : `https://dev-safehno.homenumber.co.kr/`;
  //   const url = `http://localhost:3002/safe-hno-success`;
  //   window.open(url, "_blank", windowFeatures);
  // }, 3000);

  // POSTMESSAGE 대기
  window.addEventListener("message", CB_MESSAGE);

  // 조회 타입이 회원(multi)인 경우에 새로고침 처리
  if (hnoSearchType === "multi" && !myGetStore.selectedItem.hnoNo) {
    router.replace("/homenumberList");
    return;
  }
  // 조회 타입이 홈넘버(single)인 경우에 새로고침 처리
  else if (hnoSearchType === "single" && !shno.hnoNo) {
    const app = useAppStore();
    app.error = {
      type: "alert",
      message: "폐이지를 새로 고침하여 상태가 초기화 되었습니다.",
      hasClose: false,
      onConfirm: () => {
        router.replace("/homenumberInquiry");
      }
    };
  }
  listTerms();
});

onBeforeUnmount(() => {
  // POSTMESSAGE 대기 해제
  window.removeEventListener("message", CB_MESSAGE);
});

const endClick = async () => {
  const params =
    hnoSearchType === "multi"
      ? [
          myGetStore.selectedItem.hnoNo,
          myGetStore.selectedItem.subCd,
          myGetStore.infoProvAuthNo,
          d.termsCd,
          d.termsVer,
          "Y"
        ]
      : [
          shno.hnoNo,
          shno.subCd,
          shno.infoProvAuthNo,
          d.termsCd,
          d.termsVer,
          "N"
        ];
  await termsAgree(...params);
};
</script>

<template>
  <TitleTop :hasBackButton="true" :text="d.text" />
  <section>
    <div class="contents">
      <div>
        <input
          type="checkbox"
          id="01"
          class="custom-checkbox"
          v-model="d.modelValue"
          @change="handleCheckboxChange"
        />
        <label for="01">
          <span
            :class="
              termsStore.termsAgreEssntlYn === 'Y' ? 'essential' : 'select'
            "
          >
            [{{ termsStore.termsAgreEssntlYn === "Y" ? "필수" : "선택" }}]&nbsp;
          </span>
          {{ termsStore.data[0].termsNm }}
        </label>
        <div class="textDatas">
          <div class="inner" v-html="termsStore.data[0].termsCn"></div>
        </div>
        <div>
          <ul v-for="item in d.termsWithoutFirst">
            <li>
              <div>{{ item.termsNm }}</div>
              <div>{{ item.termsCn }}</div>
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
</template>

<style lang="scss" scoped>
ul {
  > li {
    line-height: 20.7px;
    margin-bottom: 16px;
    div {
      &:nth-child(1) {
        font-weight: bold;
        font-size: 18px;
      }
      &:nth-child(2) {
        font-weight: 300;
        color: $c-g600;
      }
    }
  }
}

.textDatas {
  margin-bottom: 30px;
}
</style>
