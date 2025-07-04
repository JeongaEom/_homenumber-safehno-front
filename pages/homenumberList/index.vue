<script setup>
import { reactive, onMounted } from "vue";
import { useRouter } from "vue-router";
import { hnoMyGet, provhnoTermsAgree, closeTypeGet } from "@/api";
import { formatNb } from "@/utils";

const router = useRouter();
const app = useAppStore();
const myGetStore = useHnoMyGetStore();
const hnoSearchType = localStorage.getItem("hnoSearchType");

definePageMeta({
  name: "homenumberList"
});

const d = reactive({
  selectedhnoNo: [],
  isActive: false,
  isMyHnoYn: "Y", // (로그인) 마이 홈넘버 조회
  topText: "등록된 홈넘버가<br />존재하지 않습니다.",
  btntext: "내 홈넘버 보기",
  type: "contents-end",
  btn: "none",
  text: "개인정보 제3자 제공 동의",
  termsGrpCd: "1010005",
  termsCd: "1020007",
  termsVer: "1",
  termsWithoutFirst: []
  
});

const hnbIssuance = () => {
  //발급
  //router.replace("/issuance");
  router.push("/personalInformation");
};

const fetchHnoMyGet = async () => {
  // 리스트
  await hnoMyGet(app.tokenIssuId, app.encData, app.sign);
  console.log("app.tokenIssuId_마이 홈넘버 리스트: ", app.tokenIssuId);
  console.log("app.encData_마이 홈넘버 리스트: ", app.encData);
  console.log("app.sign_마이 홈넘버 리스트: ", app.sign);

  // 불러온 데이터를 최신순으로 정렬
  myGetStore.hnos.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
};

onMounted(async () => {
  const isError = await app.requiredValue();
  if (!isError) {
    fetchHnoMyGet();
    app.page = true;
  }
  if (!app.closeType) {
    const result = await closeTypeGet();
    console.log("result: ", result);
  }
  // console.log("isError_홈넘버 회원조회: ", isError);

  console.log("app.tokenIssuId_마이 홈넘버: ", app.tokenIssuId);
  console.log("app.encData_마이 홈넘버: ", app.encData);
  console.log("app.sign_마이 홈넘버: ", app.sign);
});

const selectClick = (item) => {
  // 모든 선택을 취소하고 현재 항목만 선택
  d.selectedhnoNo = [item.hnoNo];

  // isActive 상태 업데이트
  d.isActive = true;

  // 선택된 항목의 정보를 문자열로 모아 콘솔에 출력
  const selectedItem = myGetStore.hnos.find(
    (listItem) => listItem.hnoNo === item.hnoNo
  );
  let selectedItemsInfo = `홈넘버: ${selectedItem.hnoNo}, 이름: ${selectedItem.nm}, 주소: ${selectedItem.bassAddr}, 상세주소: ${selectedItem.detailAddr}\n`;
  console.log("data: ", selectedItemsInfo);
};

const modifiClick = (item) => {
  // 수정
  router.replace({
    path: "/modification",
    query: { hnoIssuNo: item.hnoIssuNo }
  });
  d.isActive = false;
  console.log("d.isActive_홈넘버 조회_수정버튼:", d.isActive);
};

const nextClick = async () => {
  const selectedItem = myGetStore.hnos.find(
    (listItem) => listItem.hnoNo === d.selectedhnoNo[0]
  );
  console.log("selectedItem", selectedItem);
  myGetStore.selectedItem = selectedItem;
  myGetStore.isMyHnoYn = d.isMyHnoYn;
    
  //경로 삭제
  //router.push("/personalInformation");
  const params =
    hnoSearchType === "multi"
      ? [
          app.tokenIssuId,
          app.encData,
          app.sign,
          myGetStore.selectedItem.hnoNo,
          myGetStore.selectedItem.subCd,
          myGetStore.infoProvAuthNo,
          d.termsCd,
          d.termsVer,
          "Y"
        ]
      : [
          app.tokenIssuId,
          app.encData,
          app.sign,
          shno.hnoNo,
          shno.subCd,
          shno.infoProvAuthNo,
          d.termsCd,
          d.termsVer,
          "N"
        ];

  await provhnoTermsAgree(...params);
  
  //PostMessage 보내기

  
};

console.log("d.isActive_홈넘버 조회:", d.isActive);
</script>

<template>
  <div v-if="app.page">
    <TitleTop text="홈넘버" :number="myGetStore.hnos.length || 0" />
    <div class="top-btn">
      <button class="bg-w line-active" @click="hnbIssuance">
        + 신규 홈넘버 추가
      </button>
    </div>
    <section>
      <div
        class="contents"
        :class="myGetStore.hnos.length === 0 ? 'no-data' : ''"
      >
        <completed
          :topText="d.topText"
          :btntext="d.btntext"
          :type="d.type"
          :btn="d.btn"
          v-if="myGetStore.hnos.length === 0"
        />
        <div class="dataList" v-else>
          <ul>
            <li v-for="item in myGetStore.hnos">
              <div
                :class="
                  d.selectedhnoNo.includes(item.hnoNo)
                    ? 'active-line'
                    : 'default-line'
                "
                @click="selectClick(item)"
              >
                <div>
                  <span>
                    <img
                      src="@/assets/images/checkIconOff.png"
                      v-if="!d.selectedhnoNo.includes(item.hnoNo)"
                      alt="미선택"
                    />
                    <img
                      src="@/assets/images/checkIconOn.png"
                      v-if="d.selectedhnoNo.includes(item.hnoNo)"
                      alt="선택"
                    />
                  </span>
                  <p
                    :class="
                      d.selectedhnoNo.includes(item.hnoNo)
                        ? 'active'
                        : 'default'
                    "
                  >
                    선택
                  </p>
                </div>
                <div>
                  <div>
                    <ul>
                      <li>
                        <div>{{ formatNb(item.hnoNo) }}</div>
                        <div>{{ item.addrNcm }}</div>
                      </li>
                      <li>
                        <div>{{ item.nm }}</div>
                        <div>{{ formatNb(item.moblphonNo) }}</div>
                      </li>
                    </ul>
                    <button class="modifi" @click.stop="modifiClick(item)">
                      수정
                    </button>
                  </div>
                  <ul>
                    <li>
                      <div>
                        {{ item.postNo }}
                        <div>{{ item.bassAddr }}</div>
                      </div>
                      <div v-if="item.detailAddr">
                        {{ item.detailAddr }}
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <button
        :class="d.isActive ? 'red-active' : 'default'"
        v-if="myGetStore.hnos.length > 0"
        :disabled="!d.isActive"
        @click="nextClick"
      >
        다음
      </button>
    </section>
  </div>
</template>

<style lang="scss" scoped>
section {
  > .contents {
    display: flex;
    flex-direction: column;
    height: 49vh;
    height: 49dvh;
  }
}

.no-data {
  height: 585px;
}

.top-btn {
  padding: 0 30px;
  margin-top: 20px;
}

button.modifi {
  background-color: $wt;
  border: 1px solid $c-g300;
  color: $fg;
}

//팝업창
@media (min-height: 769px) and (max-width: 820px) {
  section {
    > .contents {
      height: 60.3vh !important;
      height: 60.3dvh !important;
    }
  }
}

@media (max-width: 768px) {
  section {
    > .contents {
      height: 57vh;
      height: 57dvh;
    }
  }
}

@media (max-height: 740px) {
  section {
    > .contents {
      height: 54vh;
      height: 54dvh;
    }
  }
}

@media (max-height: 667px) {
  section {
    > .contents {
      height: 48vh;
      height: 48dvh;
    }
  }
}

@media (max-height: 568px) {
  .top-btn {
    padding: 0 12px;
  }

  section {
    padding: 1rem 0.8rem;
    > .contents {
      height: 46vh;
      height: 46dvh;
    }
  }
}

@media (max-height: 550px) {
  section {
    padding: 1rem 0.8rem;
    > .contents {
      height: 44vh;
      height: 44dvh;
    }
  }
}

@media (min-width: 344px) and (max-width: 430px) and (min-height: 812px) and (max-height: 935px) {
  // 높이가 높은 모바일
  section {
    > .contents {
      height: 62vh;
      height: 62dvh;
    }
  }
}

@media (max-height: 480px) {
  // 높이가 낮은 모바일
  section {
    > .contents {
      height: 40vh;
      height: 40dvh;
    }
  }
}
</style>
