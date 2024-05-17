<script setup>
import { reactive } from "vue";
import { useEndDataStore } from "@/stores";

const endDataStore = useEndDataStore();

definePageMeta({
  name: "issuance"
});

const d = reactive({
  text: "홈넘버 발급",
  isActive: false,
  completed: false
});

const endClick = () => {
  endDataStore.endData = "1"; //발급
  d.completed = true;
  d.isActive = true;
  console.log("endDataStore.endData : ", endDataStore.endData);
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
            <input type="text" placeholder="NNN" />&nbsp;-&nbsp;
            <input type="text" placeholder="NNNN" />&nbsp;-&nbsp;
            <input type="text" placeholder="NNNN" />&nbsp;
          </div>
          <button class="bg-w line">중복확인</button>
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
                <input type="text" placeholder="이름 입력" />
              </div>
            </li>
            <li>
              <div class="input-text">휴대폰 번호 <span>*</span></div>
              <div>
                <input type="text" placeholder="번호 입력 (배송지 연락처)" />
              </div>
            </li>
            <li class="addInp">
              <div class="input-text">배송지 주소 <span>*</span></div>
              <div>
                <ul>
                  <li>
                    <div>
                      <input type="text" placeholder="우편번호" disabled />
                    </div>
                    <div>
                      <button class="bg-w line">우편번호 찾기</button>
                    </div>
                  </li>
                  <li>
                    <input type="text" placeholder="기본주소" disabled />
                  </li>
                  <li>
                    <input type="text" placeholder="상세 주소 입력" />
                  </li>
                </ul>
              </div>
            </li>
            <li>
              <div class="input-text">주소 별칭</div>
              <div>
                <input type="text" placeholder="최대 10자" />
              </div>
            </li>
            <li>
              <div class="input-text">보안키 <span>*</span></div>
              <div>
                <input type="text" placeholder="숫자 4자리" />
              </div>
            </li>
            <li>
              <div class="input-text">보안키 확인 <span>*</span></div>
              <div>
                <input type="text" placeholder="숫자 4자리" />
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

@media (min-width: 769px) {
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

@media (max-width: 768px) {
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
