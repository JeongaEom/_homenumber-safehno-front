<script setup>

//우편번호 찾기 iframe 교체
function closeDaumPostcode() {
    // iframe을 넣은 element를 안보이게 한다.
    document.getElementById('layer').style.display = 'none';
}

</script>

<template>
 <div id="layer" style="-webkit-overflow-scrolling:touch;">
      <img src="//t1.daumcdn.net/postcode/resource/images/close.png" class="btnCloseLayer" id="btnCloseLayer" style="cursor:pointer;position:absolute;right:-3px;top:-3px;z-index:1" @click="closeDaumPostcode()" alt="닫기 버튼">
    </div>
</template>

<style lang="scss" scoped>
  .btnCloseLayer{width:20px;}
</style>
