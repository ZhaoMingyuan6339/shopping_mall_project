<template>
  <div id="detail-bottom-bar">
    <div class="bar-item bar-left">
      <div>
        <i class="icon service"><img src="~@/assets/img/detail/kefu.svg" alt=""></i>
        <span class="text">客服</span>
      </div>
      <div>
        <i class="icon shop"><img src="~@/assets/img/detail/shop.svg" alt=""></i>
        <span class="text">店铺</span>
      </div>
      <div>
        <i class="icon select"><img src="~@/assets/img/detail/collecting.svg" alt=""></i>
        <span class="text">收藏</span>
      </div>
    </div>
    <div class="bar-item bar-right">
      <div class="car" @click="addToCar">加入购物车</div>
      <div class="buy">购买</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailBottomBar",
  methods:{
    addToCar() {
      this.$emit('addToCar')
    }
  }
}
</script>

<style scoped>
#detail-bottom-bar {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  height: 49px;
  background-color: #fff;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.bar item {
  flex: 1;
}
.bar-left {
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.bar-right {
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.icon {
  padding-top: 5px;
  text-align: center;
  padding: 0 15px;
}
.text {
  display: inline-block;
  padding-left: 10px;
  font-size: 14px;
}
.icon img {
  width: 24px;
  height: 24px;
}
.bar-right {
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.car {
  font-size: 14px;
  text-align: center;
  width: 140px;
  flex: 1;
  padding: 0 10px;
  line-height: 49px;
  background-color: #FFDE0F;
  color: #000;
}
.buy {
  font-size: 14px;
  text-align: center;
  line-height: 49px;
  width: 40px;
  flex: 1;
  padding: 0 10px;
  background-color: #FF789A;
  color: #fff;
}
</style>
