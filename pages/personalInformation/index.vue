<script setup>
  import { reactive } from "vue";

  definePageMeta({
    name: "personalInformation",
    // middleware: [
    //   function (to, from) {
    //     // 로직 inline 정의
    //  },
    //   'app',
    // ],
  });

  const d = reactive({
    text: "개인정보 제3자 제공 동의",
    isActive: false,
    dataList: [
      {
        id: "1",
        type: "필수",
        name: "개인정보 제3자 제공 동의",
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
        `
      },
    ],
    modelValue: false
  });

  const handleCheckboxChange = () => {
    if(d.modelValue) {
      d.isActive = true;
    } else {
      d.isActive = false;
    }
  }

  const endClick = () => {
    window.close();
  }
</script>

<template>
  <TitleTop :text="d.text" />
  <section>
    <div class="contents">
      <div v-for="item in d.dataList" :key="d.id">
        <input
          type="checkbox"
          :id="`checkbox-${item.id}`"
          class="custom-checkbox"
          v-model="d.modelValue"
          @change="handleCheckboxChange"
        />
        <label :for="`checkbox-${item.id}`">
          <span
            :class="item.type === '필수' ? 'essential':'select'"
          >
            [{{ item.type }}]&nbsp;
          </span>
          {{ item.name }}
        </label>
        <div class="textDatas">
          <div class="inner" v-html="item.data"></div>
        </div>
      </div>
      <div>
      <ul>
        <li>
          <div>제공받는 자</div>
          <div>(주) 우리홈쇼핑</div>
        </li>
        <li>
          <div>제공 목적</div>
          <div>보안택배</div>
        </li>
        <li>
          <div>제공 항목</div>
          <div>홈넘버, 가상 홈넘버, 이름, 휴대폰 번호, 주소</div>
        </li>
        <li>
          <div>보유 및 이용기간</div>
          <div>배송완료 시 또는 법정 의무 보유 기간까지</div>
        </li>
        <li>
          <div>거부권 및 불이익</div>
          <div>이용자는 동의를 거부 할 수 있으나, 동의를 거부하 실 경우 서비스 이용이 제한됩니다.</div>
        </li>
      </ul>
      </div>
    </div>
    <button
      :class="d.isActive ? 'red-active':'default'"
      @click="endClick"
    >
      확인
    </button>
  </section>
</template>

<style lang="scss" scoped>
  ul {
    >li {
      line-height: 20px;
      margin-bottom: 20px;
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