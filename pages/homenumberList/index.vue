<script setup>
import { reactive, onMounted } from "vue";
import { useRouter } from "vue-router";
import { useHnoMyGetStore } from "@/stores";
import { hnoMyGet } from "@/api";
import { formatNb } from "@/utils";

const router = useRouter();
const myGetStore = useHnoMyGetStore();

definePageMeta({
  name: "homenumberList"
});

const d = reactive({
  text: "홈넘버",
  noDataText: "등록된 홈넘버가<br/>존재하지 않습니다.",
  selectedhnoNo: [],
  isActive: false,
  isMyHnoYn: "Y" // (로그인) 마이 홈넘버 조회
});

const hnbIssuance = () => {
  //발급
  router.replace("/issuance");
  // alert("준비중입니다.");
};

const fetchHnoMyGet = async () => {
  // 리스트
  const hnoMyGetResult = await hnoMyGet();
  console.log("hnoMyGetResult: ", hnoMyGetResult);
};

onMounted(() => {
  fetchHnoMyGet();
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
  router.replace("/modification");
  // alert("준비중입니다.");
};

const nextClick = async () => {
  const selectedItem = myGetStore.hnos.find(
    (listItem) => listItem.hnoNo === d.selectedhnoNo[0]
  );
  console.log("selectedItem", selectedItem);
  myGetStore.selectedItem = selectedItem;
  myGetStore.isMyHnoYn = d.isMyHnoYn;
  router.push("/personalInformation");
};
</script>

<template>
  <TitleTop :text="d.text" :number="myGetStore.hnos.length" />
  <div class="top-btn">
    <button class="bg-w line-active" @click="hnbIssuance">홈넘버 추가</button>
  </div>
  <section>
    <div
      class="contents"
      :class="myGetStore.hnos.length === 0 ? 'no-data' : ''"
    >
      <detallError
        :noDataText="d.noDataText"
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
              <ul>
                <li>
                  <div>{{ formatNb(item.hnoNo) }}</div>
                  <div>{{ item.addrNcm }}</div>
                </li>
                <li>
                  <div>{{ item.nm }}</div>
                  <div>{{ formatNb(item.moblphonNo) }}</div>
                </li>
                <li>
                  <div>{{ item.postNo }}</div>
                  <div>
                    <div>{{ item.bassAddr }}</div>
                    <div v-if="item.detailAddr">{{ item.detailAddr }}</div>
                  </div>
                </li>
              </ul>
              <ul>
                <li>
                  <div
                    :class="
                      d.selectedhnoNo.includes(item.hnoNo)
                        ? 'red-active'
                        : 'default'
                    "
                  >
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
                    선택
                  </div>
                </li>
                <li>
                  <button @click.stop="modifiClick(item)">수정</button>
                </li>
              </ul>
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
</template>

<style lang="scss" scoped>
.contents {
  display: flex;
  flex-direction: column;
  height: 540px;
  margin-top: 0;
  margin-bottom: 2.36rem;
}
.no-data {
  height: 598px;
}
.top-btn {
  position: relative;
  button {
    width: 120px;
    position: absolute;
  }
}

@media (min-width: 769px) {
  section {
    > .contents {
      height: 438px;
    }
  }
  .top-btn {
    top: -61px;
    button {
      right: 24px;
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
  .top-btn {
    top: -75px;
    button {
      right: 14px;
    }
  }
}
</style>
