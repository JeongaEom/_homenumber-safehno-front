<script setup>
import { reactive, onMounted } from "vue";
import { tknEncValid } from "@/api";

const app = useAppStore();

const d = reactive({
  tknEncValid: null
});

const params = new URLSearchParams(window.location.search);
const tokenIssuId = params.get("tokenIssuId");
const encData = params.get("encData");
const sign = params.get("sign");

app.tokenIssuId = tokenIssuId;
app.encData = encData;
app.sign = sign;

const closeClick = () => {
  if (app.closeType === "1450001") {
    // iframe 일땐 window.parent | popup 일땐 window.opener 사용
    if (window.parent) {
      window.parent.postMessage(
        {
          msg: "SAFE_HNO_CLOSE",
          retUrl: app.retUrl
        },
        app.retUrl
      );
    } else {
      console.warn("window.parent가 존재하지 않습니다.");
    }
  } else if (app.closeType === "1450002") {
    window.close();
  }
  console.log("app.closeType: ", app.closeType);
};

onMounted(async () => {
  // 2.16 암호화 토큰 유효성 검사 후 로그인페이지(팝업창) 실행
  const result = await tknEncValid(app.tokenIssuId, app.encData, app.sign);
  console.log("app.tokenIssuId_메인: ", app.tokenIssuId);
  console.log("app.encData_메인: ", app.encData);
  console.log("app.sign_메인: ", app.sign);
  if (result) {
    d.tknEncValid = true;
    localStorage.setItem("tokenIssuId", app.tokenIssuId);
  } else {
    d.tknEncValid = false;
    app.error = {
      type: "alert",
      message: app.error.message,
      hasClose: false,
      onConfirm: () => {
        window.close();
      }
    };
  }
});
</script>

<template>
  <div class="login" v-if="d.tknEncValid">
    <header>
      <div class="close">
        <img
          src="@/assets/images/icon-close.png"
          alt="닫기"
          @click="closeClick"
        />
      </div>
      <div class="inners">
        <img
          src="@/assets/images/logo_g.png"
          alt="홈넘버 로고(글씨 회색 버전)"
        />
      </div>
    </header>
    <section>
      <div class="inners">
        <slot />
      </div>
    </section>
  </div>
</template>

<style lang="scss" scoped>
header {
  width: 100%;
  .inners {
    width: 12rem;
    padding: 2.55rem 0;
    margin: auto;
  }
}

.close {
  width: 100%;
  height: 50px;
  position: relative;
  img {
    width: 24px;
    height: 24px;
    position: absolute;
    right: 24px;
    top: 24px;
    cursor: pointer;
    filter: invert(25%) sepia(28%) saturate(389%) hue-rotate(180deg)
      brightness(87%) contrast(92%);
  }
}

@media (max-height: 740px) {
  header {
    .inners {
      width: 8rem;
      padding: 1rem 0;
    }
  }
}

@media (min-width: 375px) and (max-height: 667px) {
  header {
    .inners {
      width: 7rem;
      padding: 0.6rem 0;
    }
  }
}

@media (max-height: 640px) {
  header {
    .inners {
      width: 7rem;
      padding: 0.6rem 0;
    }
  }
}

@media (max-height: 568px) {
  section {
    height: 80vh;
    height: 80dvh;
    overflow: auto;
  }
}

@media (max-height: 480px) {
  section {
    height: 77vh;
    height: 77dvh;
  }
}
</style>
