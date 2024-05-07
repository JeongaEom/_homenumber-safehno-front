<script setup>
  import { reactive } from "vue";
  import { useEndDataStore } from '@/stores'
  import { formaNb } from '@/utils';

  const endDataStore = useEndDataStore()

  definePageMeta({
    name: "modification",
    // middleware: [
    //   function (to, from) {
    //     // 로직 inline 정의
    //  },
    //   'app',
    // ],
  });

  const d = reactive({
    link: true,
    linkAddress: "/homenumberList",
    text: "홈넘버 수정",
    isPhone: false,
    isActive: false,
    homeNb: '10010001005',
    isNext: true, // true는 휴대폰 인증 | false는 수정
    completed: false,
    isReadOnly: true,
  });

  const btn1EventClick = () => {
    d.isPhone = true;
  }

  const btn2EventClick = () => {
    // 필수입력 완료시
    d.isActive = true;
  }

  const nextClick = () => {
    if(d.isNext) {
      if(d.isActive) {
        d.isNext = false;
        // d.isActive = false;
      }
    } else if(!d.isNext) {
      // if(d.isActive) {
        endDataStore.endData = "2"; // 수정
        d.completed = true;
      // }
    }
  }
</script>

<template>
  <TitleTop
  :link="d.link"
  :linkAddress="d.linkAddress"
  :text="d.text"
  />
  <section v-if="!d.completed">
    <div class="top" v-if="!d.isNext">
      <div class="input-text">홈넘버 <span>*</span></div>
      <div>{{ formaNb(d.homeNb) }}</div>
    </div>
    <div class="contents">
      <div class="phone" v-if="d.isNext">
        <div>
          외부로부터 회원님의 정보를 더 안전하게 보호하기 위한 방법입니다.&nbsp;
          본인 확인을 위해 회원가입 시 입력하신 휴대폰 번호로 인증하여 주시기 바랍니다.
        </div>
        <div>
          <ul>
            <li class="input-text">휴대폰 번호 <span>*</span></li>
            <li>
              <div class="input-box">
                <input
                  type="text"
                  placeholder=""
                  :readonly="d.isReadOnly"
                >
                <button class="bg-w line" @click="btn1EventClick">인증번호 전송</button>
              </div>
            </li>
            <li class="input-box" v-if="d.isPhone">
              <div class="input-box">
                <input
                  type="text"
                  placeholder=""
                >
                <button class="bg-w line" @click="btn2EventClick">인증번호 확인</button>
              </div>
              <div>
                *3분 이내로 인증번호(6자리)를 입력해주세요.<br/>
                *인증번호 재전송은 1분내 1회만 가능합니다.
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div class="modifi" v-if="!d.isNext">
        <div class="inputDatas">
          <div class="inner">
            <ul>
              <li>
                <div class="input-text">이름 <span>*</span></div>
                <div>
                  <input
                    type="text"
                    placeholder=""
                  >
                </div>
              </li>
              <li>
                <div class="input-text">휴대폰 번호 <span>*</span></div>
                <div>
                  <input
                    type="text"
                    placeholder=""
                  >
                </div>
              </li>
              <li class="addInp">
                <div class="input-text">배송지 주소 <span>*</span></div>
                <div>
                  <ul>
                    <li>
                        <div>
                          <input
                            type="text"
                            placeholder=""
                            disabled
                          >
                        </div>
                        <div>
                          <button class="bg-w line">우편번호 찾기</button>
                        </div>
                    </li>
                    <li>
                      <input
                        type="text"
                        placeholder=""
                        disabled
                      >
                    </li>
                    <li>
                      <input
                        type="text"
                        placeholder=""
                      >
                    </li>
                  </ul>
                </div>
              </li>
              <li>
                <div class="input-text">주소 별칭</div>
                <div>
                  <input
                    type="text"
                    placeholder=""
                  >
                </div>
              </li>
              <li>
                <div class="input-text">보안키 <span>*</span></div>
                <div>
                  <input
                    type="text"
                    placeholder=""
                  >
                </div>
              </li>
            </ul>
            <div class="red">
              홈넘버 정보를 수정하더라도 이전에 주문한 보안 택배의 배송지 정보는 변경되지 않습니다.
            </div>
          </div>
        </div>
      </div>
    </div>
    <button
      :class="d.isActive ? 'red-active':'default'"
      @click="nextClick"
    >
      확인
    </button>
  </section>

  <section v-if="d.completed">
    <completed/>
  </section>
</template>

<style lang="scss" scoped>
  .top {
    justify-content: flex-start;
    div {
      font-size: 18px;
      font-weight: bold;
      &:first-child {
        width: 30%;
        padding-left: 10px;
        margin-right:10px;
        margin-bottom: 0;
      }
    }
  }

  .contents {
    min-height: 514px;
  }

  .phone {
    div {
      &:nth-child(1) {
        font-size: 15px;
        line-height: 1.2rem;
      }
      &:nth-child(2) {
        line-height: 1.5rem;
        margin-top: 20px;
        ul {
          li {
            &:nth-child(1) {
              margin-bottom: 10px;
            }
            &:nth-child(2) {
              margin-bottom: 10px;
            }
            div.input-box {
              display: flex;
              justify-content: space-between;
            }
            button {
              width: 200px;
              margin-left: 10px;
            }
          }
        }
      }
    }
  }

  .red {
    font-weight: bold;
    margin-top: 20px;
    line-height: 1.3rem;
    color: $c-b500;
  }
</style>