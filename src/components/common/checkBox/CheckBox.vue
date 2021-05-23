<template>
  <div class="checkbox">
    <img v-if="isChecked" src="~@/assets/img/shoppingCar/checked.svg" alt="">
    <img v-else src="~@/assets/img/shoppingCar/unchecked.svg" alt="">
  </div>
</template>

<script>
export default {
  name: "CheckBox",
  data() {
    return {
      isShow: false,
    }
  },
  props: {
    isChecked:{
      type:Boolean,
      default:false,
    }
  },
}
</script>

<style scoped>
.checkbox img {
  width: 24px;
  height: 24px;
}
</style>
