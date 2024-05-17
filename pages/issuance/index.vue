<script setup>
import { reactive, onMounted } from "vue";
// import { hnoIssDo, hnoDupchk } from "@/api";
import { useAppStore, useEndDataStore } from "@/stores";

const app = useAppStore();
const endDataStore = useEndDataStore();

definePageMeta({
  name: "issuance"
});

const d = reactive({
  text: "홈넘버 발급",
  hnoNo1: "123",
  hnoNo2: "4567",
  hnoNo3: "1234",
  nm: "엄정아",
  moblphonNo: "01012341234",
  postNo: "01234",
  bassAddr: "테스트주소",
  detailAddr: "테스트 상세",
  scrtky: "1234",
  scrtkyConfirm: "1234",
  addrNcm: "기타",
  isActive: false,
  completed: false
});

onMounted(() => {
  app.addrds();
});

const combined = reactive({
  hnoNo: `${d.hnoNo1}${d.hnoNo2}${d.hnoNo3}`
});

const dupchk = async () => {
  // await hnoDupchk({
  //   hnoNo: d.hnoNo
  // });
  // consol.log("hnoDupchk: ", hnoDupchk);
};

const endClick = async () => {
  endDataStore.endData = "1"; //발급
  // d.completed = true;
  d.isActive = true;

  // await hnoIssDo({
  //   hnoNo: d.hnoNo,
  //   nm: d.nm,
  //   moblphonNo: d.moblphonNo,
  //   postNo: d.postNo,
  //   bassAddr: d.bassAddr,
  //   detailAddr: d.detailAddr,
  //   scrtky: d.scrtky,
  //   addrNcm: d.addrNcm
  // });

  // consol.log("hnoIssDo: ", hnoIssDo);
  console.log("endDataStore.endData : ", endDataStore.endData);

  // consol.log("d.hnoNo: ", d.hnoNo);
  consol.log("d.hnoNo1: ", d.hnoNo1);
  consol.log("d.hnoNo2: ", d.hnoNo2);
  consol.log("d.hnoNo3: ", d.hnoNo3);

  console.log(combined.hnoNo);
  consol.log("d.nm: ", d.nm);
  consol.log("d.moblphonNo: ", d.moblphonNo);
  consol.log("d.postNo: ", d.postNo);
  consol.log("d.bassAddr: ", d.bassAddr);
  consol.log("d.detailAddr: ", d.detailAddr);
  consol.log("d.scrtky: ", d.scrtky);
  consol.log("d.addrNcm: ", d.addrNcm);
};
</script>

<template>
  <TitleTop :text="d.text" />
  <section v-if="!d.completed">
    <div class="top">
      <div class="inputDatas">
        <div class="inner">
          <div class="input-text">홈넘버 <span>*</span></div>
          <div>
            <input
              type="number"
              placeholder="NNN"
              maxlength="3"
              v-model="d.hnoNo1"
            />&nbsp;-&nbsp;
            <input
              type="number"
              placeholder="NNNN"
              maxlength="4"
              v-model="d.hnoNo2"
            />&nbsp;-&nbsp;
            <input
              type="number"
              placeholder="NNNN"
              maxlength="4"
              v-model="d.hnoNo3"
            />&nbsp;
          </div>
          <button class="bg-w line" @click="dupchk">중복확인</button>
        </div>
      </div>
    </div>
    <div class="contents">
      <div class="inputDatas">
        <div class="inner">
          <ul>
            <li>
              <div class="input-text">이름 <span>*</span></div>
              <div>
                <input type="text" v-model="d.nm" placeholder="이름 입력" />
              </div>
            </li>
            <li>
              <div class="input-text">휴대폰 번호 <span>*</span></div>
              <div>
                <input
                  type="number"
                  v-model="d.moblphonNo"
                  placeholder="번호 입력 (배송지 연락처)"
                />
              </div>
            </li>
            <li class="addInp">
              <div class="input-text">배송지 주소 <span>*</span></div>
              <div>
                <ul>
                  <li>
                    <div>
                      <input
                        type="number"
                        v-model="d.postNo"
                        placeholder="우편번호"
                        disabled
                      />
                    </div>
                    <div>
                      <button class="bg-w line">우편번호 찾기</button>
                    </div>
                  </li>
                  <li>
                    <input
                      type="text"
                      v-model="d.bassAddr"
                      placeholder="기본주소"
                      disabled
                    />
                  </li>
                  <li>
                    <input
                      type="text"
                      v-model="d.detailAddr"
                      placeholder="상세 주소 입력"
                    />
                  </li>
                </ul>
              </div>
            </li>
            <li>
              <div class="input-text">주소 별칭</div>
              <div>
                <input
                  type="text"
                  maxLength="10"
                  v-model="d.addrNcm"
                  placeholder="최대 10자"
                />
              </div>
            </li>
            <li>
              <div class="input-text">보안키 <span>*</span></div>
              <div>
                <input
                  type="number"
                  maxLength="4"
                  v-model="d.scrtky"
                  placeholder="숫자 4자리"
                />
              </div>
            </li>
            <li>
              <div class="input-text">보안키 확인 <span>*</span></div>
              <div>
                <input
                  type="number"
                  maxLength="4"
                  v-model="d.scrtkyConfirm"
                  placeholder="숫자 4자리"
                />
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <button :class="d.isActive ? 'red-active' : 'default'" @click="endClick">
      확인
    </button>
  </section>

  <section v-if="d.completed">
    <completed />
  </section>
</template>

<style lang="scss" scoped>
.top {
  .inputDatas {
    .inner {
      div {
        &:nth-child(2) {
          display: flex;
          align-items: center;
        }
      }
    }
  }
}

@media (min-width: 466px) {
  .top {
    .inputDatas {
      .inner {
        display: flex;
        justify-content: space-between;
        align-items: center;
        div {
          &:nth-child(1) {
            width: 20%;
          }
          &:nth-child(2) {
            width: 60%;
          }
        }
        button {
          width: 19%;
          margin-left: 1%;
        }
      }
    }
  }
}

@media (max-width: 465px) {
  .top {
    .inputDatas {
      .inner {
        div {
          &:nth-child(2) {
            margin: 10px 0;
          }
        }
      }
    }
  }
}
</style>
