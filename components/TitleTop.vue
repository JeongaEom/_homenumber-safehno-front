<script setup>
import { useRouter } from "vue-router";

const router = useRouter();

const p = defineProps({
  text: { type: String, default: "" },
  number: { type: Number, default: 0 },
  hasBackButton: { default: false }
});

const eventClick = () => {
  if (typeof p.hasBackButton === "function") {
    p.hasBackButton();
  } else {
    router.go(-1);
  }
};
</script>

<template>
  <div class="title-top">
    <div class="inner">
      <div class="btns" v-if="p.hasBackButton" @click="eventClick">
        <img src="@/assets/images/arrow-left.png" alt="이전페이지로" />
      </div>
      <div :class="p.hasBackButton ? 'btn' : 'default'">
        {{ p.text }}
        <span v-if="p.number != ''">{{ p.number }}</span>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.title-top {
  .inner {
    width: 100%;
    height: 50px;
    display: flex;
    align-items: center;
    padding-bottom: 1.5rem;
    border-bottom: 2px solid $c-g700;
    .btns {
      width: 24px;
      margin-left: 16px;
      img {
        height: 22px;
        width: 14px;
      }
    }
    div {
      width: 100%;
      text-align: center;
      font-size: 24px;
      font-weight: bold;
      span {
        margin-left: 4px;
        color: $c-b500;
      }
    }
  }
}

@media (min-width: 769px) {
  .title-top {
    padding: 1.5rem 1.5rem 0;
  }
}

@media (max-width: 768px) {
  .title-top {
    height: 9vh;
    height: 9dvh;
    padding: 1.5rem 0;
    .inner {
      padding-bottom: 1.5rem;
      .btns {
        width: 8%;
        margin-right: 0;
        cursor: pointer;
      }
      .btn {
        width: 90%;
        margin-right: 10%;
      }
      .default {
        width: 100%;
      }
    }
  }
}

@media (max-height: 740px) {
  .title-top {
    .inner {
      height: 35px;
    }
  }
}

@media (max-width: 375px) {
  .title-top {
    .inner {
      font-size: 20px;
    }
  }
}
</style>
