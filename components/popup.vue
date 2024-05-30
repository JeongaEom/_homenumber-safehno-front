<script setup>
const app = useAppStore();

const closeClick = () => {
  app.error?.onConfirm && app.error.onConfirm();
  app.error = null;
};
</script>

<template>
  <div class="popup" v-if="app.error?.type === 'alert'">
    <div class="inner">
      <div class="top-ct">
        <div>알림</div>
        <div
          class="close"
          v-if="app.error?.hasClose !== false"
          @click="closeClick"
        >
          <img src="@/assets/images/icon-close.png" alt="닫기" />
        </div>
      </div>
      <div class="body-ct">
        {{ app.error?.message }}
      </div>
      <div class="bottom-ct">
        <button class="red-active" @click="closeClick">확인</button>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.popup {
  position: absolute;
  z-index: 1;
  top: 0;
  height: 100%;
  overflow: auto;
  max-width: 480px;
  .inner {
    background-color: #fefefe;
    margin: 17rem auto;
    padding: 20px;
    border: 1px solid $c-g400;
    box-shadow: 0 5px 10px $c-g400;
    .top-ct {
      display: flex;
      align-items: center;
      div {
        font-weight: bold;
        &:nth-child(1) {
          text-align: center;
          width: 100%;
          font-size: 20px;
        }
      }
    }
    .body-ct {
      height: 100px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: 600;
    }
  }
}
.close {
  width: 20px;
  cursor: pointer;
}

@media (min-width: 481px) {
  .popup {
    .inner {
      width: 350px;
    }
  }
}

@media (max-width: 480px) {
  .popup {
    width: 100%;
    .inner {
      width: 80%;
    }
  }
}
</style>
