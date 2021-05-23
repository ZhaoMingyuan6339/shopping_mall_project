<template>
<div id="back-top">
 <div class="back-top-item">
   <img src="~@/assets/img/home/rocket.svg" alt="">
 </div>
</div>
</template>

<script>
export default {
  name: "BackTop"
}
</script>

<style scoped>
.back-top-item {
  position: fixed;
  bottom: 60px;
  right: 20px;
}
.back-top-item img {
  width: 33px;
  height: 33px;
}
#back-top {
  z-index:999;
  position: relative;
}
</style>
