<script setup>
  import { reactive } from "vue";

  definePageMeta({
    name: "serviceInfo",
    // middleware: [
    //   function (to, from) {
    //     // 로직 inline 정의
    //  },
    //   'app',
    // ],
  });

  const d = reactive({
    link: true,
    linkAddress: "/",
    text: "서비스 안내"
  });
</script>

<template>
  <TitleTop
  :link="d.link"
  :linkAddress="d.linkAddress"
  :text="d.text"
  />
  <section>
    <div class="contents">
      <p class="top-title">간편하고 안전한 배송지 정보 관리</p>
      <p>
        고객님의 소중한 개인정보를 보호하면서도 편리하게 배송을 받을 수 있는
        11자리 보안번호인 홈넘버를 소개합니다. 홈넘버를 통해 이름, 휴대폰 번호,
        주소 대신 사용할 수 있는 11자리 번호로 배송지 정보를 간편하고 안전하게
        관리하세요.
      </p>
      <br/>
      <p class="top-title">기능 및 장점</p>
      <ul class="numbers">
        <li>
          <div class="sub-title">개인정보 보호 </div>
          <p>
            고객님의 개인정보를 보호하기 위해 실제 정보 대신 고유한 11자리
            보안번호를 사용합니다.
          </p>
        </li>
        <li>
          <div class="sub-title">간편한 관리</div>
          <p>
            번거로운 주소 입력 과정을 생략하고 간편하게, 홈넘버 번호 입력만으로
            배송지 정보를 관리할 수 있습니다.
          </p>
        </li>
        <li>
          <div class="sub-title">편리한 주문</div>
          <p>
            재구매나 새로운 주문 시에도 홈넘버로 손쉽게 주문할 수 있습니다.
          </p>
        </li>
      </ul>
      <br/>
      <p class="top-title">이용 방법</p>
      <ul class="numbers">
        <li><div class="sub-title">회원 가입을 먼저 진행해주세요.</div></li>
        <li><div class="sub-title">로그인 후 상단의 “홈넘버 추가” 버튼을 눌러 홈넘버를 발급해주세요.</div></li>
      </ul>
    </div>
    <div class="bottom">
      <p>홈넘버와 함께라면, 개인정보 보호와 편리한 배송정보 관리를 경험할 수 있습니다. 지금 바로 가입하세요.</p>
    </div>
  </section>
</template>

<style lang="scss" scoped>
  .top-title {
    font-weight: bold;
    font-size: 20px;
    margin-bottom: 4px;
  }

  .numbers {
    list-style: none;
    counter-reset: custom-counter;
    margin:0;
    padding: 0;
    overflow: hidden;

    >li {
      float: inline-start;
      margin-bottom: 6px;
      counter-increment: custom-counter;
      &:first-child {
        margin-top: 8px;
      }
      &::before {
        float: left;
        content: counter(custom-counter)". ";
        font-weight: bold;
        font-size: 16px;
      }
      .sub-title {
        font-weight: bold;
        font-size: 16px;
        margin-left: 20px;
        margin-bottom: 4px;
      }
      p {
        float: left;
      }
    }
  }
  section{
    >.contents {
      height: auto;
    }
  }

  .bottom {
    float: inline-start;
    p {
      font-weight: bold;
      font-size: 18px;
    }
  }
</style>