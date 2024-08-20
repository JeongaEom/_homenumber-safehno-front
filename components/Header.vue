<script setup>
import { useRoute } from "vue-router";
import { closeTypeGet } from "@/api";

const route = useRoute();
const app = useAppStore();

const closeClickHeader = async () => {
  if (!app.closeType) {
    const result = await closeTypeGet();
    console.log("result: ", result);
  }

  // app.closeType: 1450001 or 1450002
  if (app.closeType === "1450001") {
    // iframe 일땐 window.parent | popup 일땐 window.opener 사용
    if (window.parent) {
      window.parent.postMessage(
        {
          msg: "SAFE_HNO_CLOSE",
          satk: app.satk,
          closeMenuCd: route.path === "/personalInformation" ? "3" : "0"
        },'*'
      );
    } else {
      console.warn("window.parent가 존재하지 않습니다.");
    }
  } else if (app.closeType === "1450002") {
    window.close();
  }
  console.log("app.closeType: ", app.closeType);
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
    <div v-if="!app.isBrowser" class="close">
      <img
        src="@/assets/images/icon-close.png"
        alt="닫기"
        @click="closeClickHeader"
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
    padding: 3%;
    padding-left: 9%;
    .logo {
      width: 100px;
      margin: auto;
      img {
        width: 8rem;
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

@media (min-width: 968px) {
  header {
    .inners {
      padding: 15px;
      padding-left: 9%;
      .logo {
        width: 130px;
      }
    }
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
