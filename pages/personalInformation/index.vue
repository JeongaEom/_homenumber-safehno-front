<script setup>
  import { reactive, onMounted } from "vue";
  import { useHnoMyGetStore, useTermsStore } from '@/stores'
  import { termsAgree, termsList } from "@/api";

  const myGetStore = useHnoMyGetStore();
  const termsStore = useTermsStore();

  definePageMeta({
    name: "personalInformation",
  });

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
    if(d.modelValue) {
      d.isActive = true;
    } else {
      d.isActive = false;
    }
  }

  const listTerms = async () => {
    const termsResult =  await termsList(d.termsGrpCd);

    // 첫번째 배열 값제외하고 리스트 받아오기
    d.termsWithoutFirst = termsStore.data.slice(1);
    termsStore.termsAgreEssntlYn = "Y"

    console.log('listTerms: ', termsResult);
    console.log('myGetStore.isMyHnoYn: ', myGetStore.isMyHnoYn);

    console.log('termsStore : ', termsStore.data[0].termsCn);
  };

  onMounted(() => {
    listTerms();
  });

  const endClick = async () => {
    const termsD = await termsAgree(
      myGetStore.selectedItem.hnoNo,
      myGetStore.selectedItem.subCd,
      myGetStore.infoProvAuthNo,
      d.termsCd,
      d.termsVer,
      myGetStore.isMyHnoYn
    );


    console.log('termsD: ', termsD);

    console.log('myGetStore.selectedItem: ', myGetStore.selectedItem);

  }
</script>

<template>
  <TitleTop :text="d.text" />
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
              :class="termsStore.termsAgreEssntlYn === 'Y' ? 'essential':'select'"
            >
              [{{ termsStore.termsAgreEssntlYn === 'Y' ? '필수' : '선택' }}]&nbsp;
            </span>
            {{ termsStore.data[0].termsNm }}
          </label>
          <div class="textDatas">
            <div class="inner" v-html="termsStore.data[0].termsCn"></div>
          </div>
        <div>
          <ul v-for="item in d.termsWithoutFirst">
            <li >
              <div>{{ item.termsNm }}</div>
              <div>{{ item.termsCn }}</div>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <button
      :class="d.isActive ? 'red-active':'default'"
      :disabled="!d.isActive"
      @click="endClick"
    >
      확인
    </button>
  </section>
</template>

<style lang="scss" scoped>
  ul {
    >li {
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