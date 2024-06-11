<script setup>
import { onMounted } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();
const app = useAppStore();

const p = defineProps({
  topText: { type: String, default: "" },
  btntext: { type: String, default: "" },
  btn: { type: String, default: "block" },
  type: { type: String, default: "" }
});

const endnextClick = () => {
  if (p.btntext === "로그인") {
    router.replace({
      path: "/",
      query: {
        tokenIssuId: app.tokenIssuId,
        encData: app.encData,
        sign: app.sign
      }
    });
  } else {
    router.replace("/homenumberList");
  }
};

onMounted(async () => {
  const type = p.type;
  if (type === "contents-end") {
    // 수정, 발급
    const isError = await app.requiredValue();
    if (!isError) {
      app.page = true;
    }
  } else if (type === "signup") {
    // 회원가입
    const isErrorNon = await app.requiredValueNon();
    if (!isErrorNon) {
      app.page = true;
    }
  }
  return true;
});
</script>

<template>
  <div v-if="app.page">
    <div class="contents" :class="p.type">
      <div>
        <img src="@/assets/images/data-end.png" alt="홈넘버 데이터 없음" />
        <div>
          <p v-html="p.topText" />
        </div>
      </div>
    </div>
    <button
      class="bg-w line-active"
      @click="endnextClick()"
      :style="{ display: p.btn }"
    >
      {{ p.btntext }}
    </button>
  </div>
</template>

<style lang="scss" scoped>
.contents {
  display: flex;
  justify-content: center;
  align-items: center;
  div {
    img {
      width: 70px;
      margin: 0 auto 10%;
      display: block;
    }
    div {
      font-size: 24px;
      text-align: center;
      font-weight: bold;
      line-height: 3rem;
    }
  }
}

.contents-end {
  height: 55vh;
  height: 55dvh;
  min-height: 52vh;
  min-height: 52dvh;
}

.signup {
  height: 49vh;
  height: 49dvh;
  min-height: 38vh;
  min-height: 38dvh;
}

//팝업창
@media (min-height: 769px) and (max-width: 820px) {
  .contents-end {
    height: 72vh;
    height: 72dvh;
  }

  .signup {
    height: 65vh;
    height: 65dvh;
  }
}

//모바일 사이즈별
@media (max-height: 768px) {
  .signup {
    height: 58vh;
    height: 58dvh;
  }
}

@media (max-height: 740px) {
  .contents-end {
    height: 63vh;
    height: 63dvh;
  }

  .signup {
    height: 60vh;
    height: 60dvh;
  }

  p {
    font-size: 16px;
  }
}

@media (max-height: 667px) {
  .contents-end {
    height: 60vh;
    height: 60dvh;
  }

  .signup {
    height: 58vh;
    height: 58dvh;
  }
  .contents {
    div {
      img {
        width: 50px;
      }
    }
  }
}

@media (max-height: 634px) {
  .signup {
    height: 56vh;
    height: 56dvh;
  }
}

@media (max-height: 599px) {
  .signup {
    height: 53vh;
    height: 53dvh;
  }
}

@media (max-height: 568px) {
  .contents-end {
    height: 56vh;
    height: 56dvh;
  }

  .signup {
    height: 50vh;
    height: 50dvh;
  }
}

@media (max-height: 540px) {
  .signup {
    height: 46vh;
    height: 46dvh;
  }
}

@media (min-width: 344px) and (max-width: 430px) and (min-height: 812px) and (max-height: 935px) {
  // 높이가 높은 모바일
  .contents-end {
    height: 66vh;
    height: 66dvh;
  }

  .signup {
    height: 62vh;
    height: 62dvh;
  }
}

@media (max-height: 480px) {
  section {
    > div {
      overflow: auto;
      min-height: 240px;
    }
  }

  // 높이가 낮은 모바일
  .contents-end {
    height: 52vh;
    height: 52dvh;
  }

  .signup {
    height: 38vh;
    height: 38dvh;
  }
}
</style>
