<script setup>
import { reactive } from "vue";
import { useRouter } from "vue-router";
import { noauthHnoGet } from "@/api";

const route = useRoute();
const router = useRouter();
const shno = useSingleHnoStore();

definePageMeta({
  name: "homenumberInquiry"
});

const d = reactive({
  backAction() {
    if (d.data) {
      d.data = false;
    } else {
      router.replace("/");
    }
  },
  data: false, // false 홈넘버, 보안키 입력 | true 홈넘버 조회 리스트
  // hnoNo: "",
  // scrtky: ""
  hnoNo: "10034205960",
  scrtky: "1234"
});

onMounted(() => {
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

const nextClick = () => {
  router.push("/personalInformation");
};
</script>

<template>
  <TitleTop :hasBackButton="d.backAction" text="홈넘버로 조회" />
  <section>
    <div :class="!d.data ? 'contents no-data' : 'contents'">
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
                <ul>
                  <li>
                    <div>{{ formatNb(shno.hnoNo) }}</div>
                  </li>
                  <li>
                    <div>{{ shno.nm }}</div>
                    <div>{{ formatNb(shno.moblphonNo) }}</div>
                  </li>
                  <li>
                    <div>{{ shno.postNo }}</div>
                    <div>
                      <div>{{ shno.bassAddr }}</div>
                      <div v-if="shno.detailAddr">{{ shno.detailAddr }}</div>
                    </div>
                  </li>
                </ul>
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
</template>

<style lang="scss" scoped>
.contents {
  display: flex;
  flex-direction: column;
  height: 533px;
}

.contents.no-data {
  height: 495px;
}

@media (min-width: 769px) {
  section {
    > .contents {
      padding: 0;
      min-height: 443px;
      .inner {
        padding: 2rem 2rem 0;
      }
    }
    .bottom {
      p {
        text-align: center;
      }
    }
  }
}

@media (max-width: 768px) {
  section {
    > .contents {
      padding: 0;
      min-height: 443px;
    }
  }
  .bottom {
    br {
      display: none;
    }
  }
}
.notData {
  margin-top: 26%;
}
</style>
