<script setup>
  // const cbKeydown = (e) => {
  //   const { code } = e;
  //   if (["Enter", "Space"].includes(code)) {
  //     e.preventDefault();
  //     return;
  //   }
  // };

  // onMounted(() => {
  //   window.addEventListener("keydown", cbKeydown);
  // });

  // onBeforeUnmount(() => {
  //   window.removeEventListener("keydown", cbKeydown);
  // });
</script>

<template>
  <div class="loader">
    <div class="panel">
      <img class="spinner" src="@/assets/images/spinner.png" alt="spinner" />
      <div class="text">처리 중입니다.</div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .loader {
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background-color: transparent;
    z-index: 99999;
  }

  .panel {
    position: absolute;
    left: 50%;
    top: 50%;
    padding: 22px 30px;
    transform: translate(-50%, -50%);
    white-space: nowrap;
    background-color: rgba(0, 0, 0, 0.6);
    text-align: center;
    color: #fff;
    border-radius: 8px;
  }

  .spinner {
    width: 48px;
    height: 48px;
  }

  .text {
    margin-top: 16px;
    font-size: 23px;
  }
</style>
