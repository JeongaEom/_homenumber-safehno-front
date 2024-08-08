<script setup>

//우편번호 찾기 iframe 교체
function closeDaumPostcode() {
    // iframe을 넣은 element를 안보이게 한다.
    document.getElementById('layer').style.display = 'none';
}

</script>

<template>
 <div id="layer" style="-webkit-overflow-scrolling:touch;">
    <div class="close-wrap" id="closewrap">
      <img src="/_nuxt/assets/images/svg/post_close.svg"  class="btnCloseLayer" id="btnCloseLayer" @click="closeDaumPostcode()" alt="닫기 버튼">
    </div>
     
    </div>
</template>

<style lang="scss" scoped>
  .close-wrap{
    width:100%;
    height:60px;
    position: absolute;
    right: 0;
    top: 0;
    background: #fff;
    display:none;
      .btnCloseLayer{width: 36px;position: absolute;right: 10px;top: 10px;cursor:pointer;}
    }
</style>
