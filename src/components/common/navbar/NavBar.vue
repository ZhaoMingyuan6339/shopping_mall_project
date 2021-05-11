<template>
  <div class="nav-bar">
    <div class="nav-left">
      <slot name="left"></slot>
    </div>
    <div class="nav-center">
      <slot name="center"></slot>
    </div>
    <div class="nav-right">
      <slot name="right"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "NavBar"
}
</script>

<style scoped>
.nav-bar {
  display: flex;
  height: 44px;
  line-height: 44px;
  box-shadow: 1px 1px 5px 1px rgba(0,0,0,0.09);
}
.nav-left, .nav-right {
  width: 60px;
}
.nav-center {
  flex: 1;
  text-align: center;
}
</style>
