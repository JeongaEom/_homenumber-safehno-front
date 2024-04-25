<script setup>
  import { reactive, watch, computed } from 'vue';
  import { useEndDataStore } from '@/stores/endData';

  const endDataStore = useEndDataStore();

  definePageMeta({
    name: "signup",
  });

  const d = reactive({
    text: '01',
    all: '0',
    dataList: [
      {
        id: '1',
        toptitle: '서비스 이용 약관',
        type: '필수',
        name: '개인정보 제3자 제공 동의',
        data: `
          <div id="checkText">
            <p>회사는 원칙적으로 이용자 동의 없이 개인정보를 외부에 제공하지 않습니다.</p>
            <br/>
            <div class="box">
              <p>이용자 동의 후 개인정보 제공이 발생하는 경우</p>
              <br/>
              <p> 1) 이용자가 서비스 이용을 위해 직접 자신의 개인정보를 제3자에게 제공하는 것에 대해 동의한 경우이며, 회사는 이용자에게 '개인정보를 제공받는 자,</p>
            </div>
          </div>
        `,
        checked: false,
      },
      {
        id: '2',
        toptitle: '개인정보 수집 및 이용동의',
        type: '선택',
        name: '개인정보 제3자 제공 동의2',
        data: `
          <div id="checkText">
            <p>회사는 원칙적으로 이용자 동의 없이 개인정보를 외부에 제공하지 않습니다.</p>
            <br/>
            <div class="box">
              <p>이용자 동의 후 개인정보 제공이 발생하는 경우</p>
              <br/>
              <p> 1) 이용자가 서비스 이용을 위해 직접 자신의 개인정보를 제3자에게 제공하는 것에 대해 동의한 경우이며, 회사는 이용자에게 '개인정보를 제공받는 자,</p>
            </div>
          </div>
        `,
        checked: false,
      },
    ],
    isActive: '',
    completed: false,
  });

  const titleText = computed(() => (d.text === '01' ? '이용약관 동의' : '회원정보 입력'));
  const btnText = computed(() => (d.text === '01' ? '다음' : '확인'));

  // 01 이용약관 동의 (체크박스)
  const allRequiredChecked = computed(() => {
    return d.dataList.filter(item => item.type === '필수').every(item => item.checked);
  });

  watch(allRequiredChecked, (newVal) => {
    d.isActive = newVal;
  });

  // 02 회원정보 입력
  const doubleClick = () => {
    // 중복확인
  }

  const eventHpClick = () => {
    // 휴대폰 본인 인증
  }

  const eventClick = (data) => {
    if(data === '01') {
      d.text = '02'; // 회원정보 입력
    } else if(data === '02') {
      d.text = '03';
      endDataStore.endData = '3'; // 회원 가입 완료
      d.completed = true;
    }
  }
</script>

<template>
  <TitleSignup :text="d.text" />
  <div
    class="subs-title"
    v-if="d.text !== '03'"
  >
    <div>{{ titleText }}</div>
  </div>
  <section v-if="!d.completed">
    <div class="contents">
      <div v-if="d.text === '01'">
        <div>
          <input
            type="checkbox"
            :id="`checkbox-${d.all}`"
            class="custom-checkbox"
            v-model="d.all"
            @change="toggleAll($event.target.checked)"
          />
          <label :for="`checkbox-${d.all}`">
            모두 확인, 동의합니다.
          </label>
        </div>
        <div
          class="terms"
          v-for="item in d.dataList"
          >
          <div class="t-title">{{ item.toptitle }}</div>
          <div class="textDatas">
            <div class="inner" v-html="item.data"></div>
          </div>
          <input
            type="checkbox"
            :id="`checkbox-${item.id}`"
            class="custom-checkbox"
            v-model="item.checked"
          />
          <label :for="`checkbox-${item.id}`">
            <span
              :class="item.type === '필수' ? 'essential':'select'"
            >
              [{{ item.type }}]&nbsp;
            </span>
            {{ item.name }}
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
                        <input
                          type="text"
                          placeholder="아이디"
                        >
                      </div>
                      <div>
                        <button
                      class="bg-w line"
                      @click="doubleClick"
                    >
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
                  <input
                    type="text"
                    placeholder="비밀번호"
                  >
                </div>
              </li>
              <li>
                <div class="input-text">비밀번호 확인 <span>*</span></div>
                <div>
                  <input
                    type="text"
                    placeholder="비밀번호 확인"
                  >
                </div>
              </li>
              <li>
                <div class="input-text">이메일 <span>*</span></div>
                <div>
                  <input
                    type="text"
                    placeholder="이메일"
                  >
                </div>
              </li>
            </ul>
          </div>
        </div>
        <button
          class="bg-w line-hp"
          @click="eventHpClick"
        >
          휴대폰 본인 인증
        </button>
      </div>
    </div>
    <button
      :class="d.isActive ? 'red-active':'default'"
      @click="eventClick(d.text)"
    >
      {{ btnText }}
    </button>
  </section>

  <section v-if="d.completed">
    <completed/>
  </section>
</template>

<style lang="scss" scoped>
  section {
    >.contents {
      min-height: 418px;
    }
  }
  .subs-title {
    border: 1px solid #171A22;
    border-top: none;
    border-bottom: none;
    div {
      font-size: 24px;
      font-weight: bold;
      height: 56px;
      background-color: $c-g100;
      margin: 0 1.5rem;
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