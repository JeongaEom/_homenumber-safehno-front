<script setup>
// import { useRouter } from "vue-router";

// const router = useRouter();
const app = useAppStore();

const closeClick = () => {
  if (app.closeType === "1450001") {
    // iframe 일땐 window.parent | popup 일땐 window.opener 사용
    if (window.parent) {
      window.parent.postMessage(
        {
          msg: "SAFE_HNO_CLOSE"
        },
        "http://localhost:3002/test1"
      );
      console.log("app.closeType???: ", app.closeType);
    } else {
      console.warn("window.parent가 존재하지 않습니다.");
    }
    console.log("app.closeType???: ", app.closeType);
  } else if (app.closeType === "1450002") {
    window.close();
  }
};

const clickEvent = () => {
  // if (router.pathname === "/signup") {
  //   router.replace("/");
  // } else {
  //   router.replace("/homenumberList");
  // }
  // router.replace("/homenumberList");
};
</script>

<template>
  <header>
    <div class="inners">
      <div class="logo">
        <img
          src="@/assets/images/logo_w.png"
          alt="홈넘버 로고(글씨 화이트 버전)"
          @click="clickEvent"
        />
      </div>
    </div>
    <div class="close">
      <img
        src="@/assets/images/icon-close.png"
        alt="닫기"
        @click="closeClick"
      />
    </div>
  </header>
</template>

<style lang="scss" scoped>
header {
  width: 100%;
  background-color: $c-g900;
  display: flex;
  align-items: center;
  justify-content: space-between;
  .inners {
    width: 90%;
    padding: 1rem;
    .logo {
      width: 25%;
      margin: auto;
      img {
        width: 10rem;
      }
    }
  }
}

.close {
  width: 10%;
  img {
    width: 24px;
    height: 24px;
    cursor: pointer;
    filter: invert(98%) sepia(2%) saturate(373%) hue-rotate(181deg)
      brightness(98%) contrast(89%);
  }
}

@media (max-height: 740px) {
  header {
    .inners {
      .logo {
        img {
          width: 7rem;
        }
      }
    }
  }

  .close {
    img {
      width: 20px;
      height: 20px;
    }
  }
}

@media (min-width: 360px) and (max-height: 900px) {
  header {
    .inners {
      .logo {
        img {
          width: 7rem;
        }
      }
    }
  }
}

@media (max-height: 640px) {
  header {
    .inners {
      .logo {
        img {
          width: 6.3rem;
        }
      }
    }
  }

  .close {
    img {
      width: 18px;
      height: 18px;
    }
  }
}

@media (max-width: 375px) {
  header {
    .inners {
      .logo {
        img {
          width: 6rem;
        }
      }
    }
  }
}
</style>
