<script setup>
import { reactive, onMounted } from "vue";
import { useRouter } from "vue-router";
import { noauthHnoGet, provhnoTermsAgree, closeTypeGet } from "@/api";

const route = useRoute();
const router = useRouter();
const app = useAppStore();
const shno = useSingleHnoStore();
const myGetStore = useHnoMyGetStore();
const hnoSearchType = localStorage.getItem("hnoSearchType");

definePageMeta({
  name: "homenumberInquiry"
});

let hnoNo;
let scrtky;

if (import.meta.env.MODE === "production") {
  // 운영 아이디, 비번
  hnoNo = "";
  scrtky = "";
} else {
  // 로컬, 개발에만 아이디, 비번 고정
  hnoNo = "10034205960";
  scrtky = "1234";
}

const d = reactive({
  backAction() {
    if (d.data) {
      d.data = false;
    } else {
      router.replace({
        path: "/",
        query: {
          tokenIssuId: app.tokenIssuId,
          encData: app.encData,
          sign: app.sign
        }
      });
    }
  },
  data: false, // false 홈넘버, 보안키 입력 | true 홈넘버 조회 리스트
  hnoNo: hnoNo,
  scrtky: scrtky,
  text: "개인정보 제3자 제공 동의",
  termsGrpCd: "1010005",
  termsCd: "1020007",
  termsVer: "1",
  termsWithoutFirst: []
});

onMounted(async () => {
  const isErrorNon = await app.requiredValueNon();
  if (!isErrorNon) {
    app.page = true;
  }
  if (!app.closeType) {
    const result = await closeTypeGet();
    console.log("result: ", result);
  }
  if (shno.hnoNo) {
    d.data = true;
  }
});

const eventClick = async () => {
  const noauth = await noauthHnoGet(
    d.hnoNo,
    d.scrtky,
    route.query.tokenIssuId,
    route.query.encData,
    route.query.sign
  );

  if (noauth) {
    d.data = true;
  }
};

const nextClick = async () => {
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
</script>

<template>
  <div v-if="app.page">
    <TitleTop :hasBackButton="d.backAction" text="홈넘버로 조회" />
    <section>
      <div :class="!d.data ? 'contents check' : 'contents'">
        <div v-if="!d.data">
          <input
            v-model="d.hnoNo"
            class="mb-btm-6"
            type="text"
            placeholder="홈넘버(숫자만)"
          />
          <input
            v-model="d.scrtky"
            class="mb-btm-20"
            type="password"
            placeholder="보안키"
          />
          <button class="mb-btm-20 red-active" @click="eventClick">조회</button>
        </div>
        <div v-if="d.data">
          <div class="dataList">
            <ul>
              <li>
                <div class="active-line">
                  <div></div>
                  <div>
                    <div>
                      <ul>
                        <li>
                          <div>{{ formatNb(shno.hnoNo) }}</div>
                        </li>
                        <li>
                          <div>{{ shno.nm }}</div>
                          <div>{{ formatNb(shno.moblphonNo) }}</div>
                        </li>
                      </ul>
                    </div>
                    <ul>
                      <li>
                        <div>
                          {{ shno.postNo }}
                          <div>{{ shno.bassAddr }}</div>
                        </div>
                        <div>
                          <div v-if="shno.detailAddr">
                            {{ shno.detailAddr }}
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="bottom" v-if="!d.data">
        <p>
          찾고자 하시는 본인 혹은 상대방의 홈넘버 및 보안키를 입력하세요.
          <br />보안키를 모르신다면 상대방에게 문의하세요.
        </p>
      </div>
      <button v-if="d.data" class="red-active" @click="nextClick">다음</button>
    </section>
  </div>
</template>

<style lang="scss" scoped>
section {
  > .contents {
    display: flex;
    flex-direction: column;
    height: 52vh;
    height: 52dvh;
    margin-top: 20px;
    &.check {
      height: 48vh;
      height: 48dvh;
    }
  }
}

.dataList {
  > ul {
    > li {
      > div {
        > div:nth-child(1) {
          width: 0 !important;
        }
      }
    }
  }
}

@media (min-width: 769px) {
  section {
    .bottom {
      p {
        text-align: center;
      }
    }
  }
}

@media (max-width: 768px) {
  .bottom {
    br {
      display: none;
    }
  }
}

//팝업창
@media (min-height: 769px) and (max-width: 820px) {
  section {
    > .contents {
      height: 66vh;
      height: 66dvh;
      &.check {
        height: 62vh;
        height: 62dvh;
      }
    }
  }
}

//모바일 사이즈별
@media (max-height: 768px) {
  section {
    > .contents {
      height: 63vh;
      height: 63dvh;
    }
  }
}

@media (max-height: 740px) {
  section {
    > .contents {
      height: 62vh;
      height: 62dvh;
      &.check {
        height: 55vh;
        height: 55dvh;
      }
    }
  }
}

@media (max-height: 667px) {
  section {
    > .contents {
      height: 60vh;
      height: 60dvh;
      &.check {
        height: 52vh;
        height: 52dvh;
      }
    }
  }
}

@media (max-height: 568px) {
  section {
    > .contents {
      height: 56vh;
      height: 56dvh;
      &.check {
        height: 40vh;
        height: 40dvh;
      }
    }
  }
}

@media (min-width: 344px) and (max-width: 430px) and (min-height: 812px) and (max-height: 935px) {
  // 높이가 높은 모바일
  section {
    > .contents {
      height: 66vh;
      height: 66dvh;
      &.check {
        height: 58vh;
        height: 58dvh;
      }
    }
  }
}

@media (max-height: 480px) {
  // 높이가 낮은 모바일
  section {
    > .contents {
      height: 50vh;
      height: 50dvh;
      &.check {
        height: 36vh;
        height: 36dvh;
      }
    }
  }
}
</style>
