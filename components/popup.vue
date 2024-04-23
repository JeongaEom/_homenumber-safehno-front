<script setup>
  const p = defineProps({
    isVisible: { type: Boolean, default: "" },
    idType: { type: String, default: "" },
    texts: { type: String, default: "" },
    btntexts: { type: String, default: "" },
  });

  const emit = defineEmits(['update:isVisible']);

  const closeClick = () => {
    emit('update:isVisible', false);
  };
</script>

<template>
  <div class="popup" v-if="p.isVisible">
    <div class="inner">
      <div class="top-ct">
        <div>알림</div>
        <div @click="closeClick">X</div>
      </div>
      <div class="body-ct">
        {{ p.texts }}
      </div>
      <div class="bottom-ct">
        <button class="red-active" @click="closeClick">{{ p.btntexts }}</button>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .popup {
    position: fixed;
    z-index: 1;
    left: 0;
    top: 0;
    height: 100%;
    overflow: auto;
    /*background-color: rgba(0, 0, 0, 0.4);*/
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

  @media (min-width: 481px) {
    .popup {
      width: 480px;
      left: 36.3%;
      .inner {
        width: 350px;;
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