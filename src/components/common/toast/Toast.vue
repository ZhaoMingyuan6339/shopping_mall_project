<template>
  <div id="toast">
    <div class="toast-item" v-show="show">
      <i class="toast-img"><img src="~@/assets/img/toast/toast.svg" alt=""></i>
      <span class="toast-text">{{message}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "Toast",
  props: {
    message: {
      type: String,
      default: '',
    },
    show:{
      type: Boolean,
      default: false,
    }
  }
}
</script>

<style scoped>
.toast-item {
  position: relative;
  text-align: center;
  line-height: 80px;
  width: 300px;
  height: 80px;
  background:rgba(0,0,0,0.5);
  border: 1px solid transparent;
  border-radius: 30px;
}
.toast-img {
  position: absolute;
  top: 50%;
  left: 5px;
  margin-top: -30px;
  width: 60px;
  height: 60px;
  text-align: center;
}
.toast-img img {
  width: 40px;
  height: 40px;
}
.toast-text {
  color: #fff;
  font-size: 16px;
  margin-left: 60px;
  font-weight: 700;

}
</style>
