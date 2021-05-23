<template>
  <div>
<!--    1.导航栏-->
    <nav-bar class="car-nav">
      <template v-slot:center>
        <div class="shopping-car">购物车({{carLength}})</div>
      </template>
    </nav-bar>
    <toast :message="message" :show="show" class="toast"></toast>
<!--    2.商品列表-->
    <scroll class="content" ref="scroll">
      <shopping-car-list :car-list="carList"></shopping-car-list>
    </scroll>
<!--    3.底部提交订单栏-->
    <shopping-car-bottom-bar @clickSubmit="clickSubmit" class="radius" ref="shopping-car-bottom-bar"></shopping-car-bottom-bar>
  </div>
</template>

<script>
import NavBar from "@/components/common/navbar/NavBar";
import Scroll from "@/components/common/scroll/Scroll";
/**导入商品列表*/
import ShoppingCarList from "@/views/shoppingcar/childComponents/ShoppingCarList";
import ShoppingCarBottomBar from "@/views/shoppingcar/childComponents/ShoppingCarBottomBar";
import {mapGetters} from 'vuex';
import Toast from "@/components/common/toast/Toast";
export default {
  name: "ShoppingCar",
  data() {
    return {
      message: '订单提交成功！请稍后结算',
      show: false,
      isSelect: false,
    }
  },
  components:{
    NavBar,
    ShoppingCarList,
    Scroll,
    ShoppingCarBottomBar,
    Toast,
  },
  computed: {
    ...mapGetters([
      'carList',
      'carLength'
    ]),
    isSelecting() {
      for(let i = 0; i < this.carList.length; i++) {
        if(this.carList[i].checked) {
          return true;
        }
      }
      return false;
    }
  },
  activated() {
    this.$refs.scroll.scroll.refresh();
  },
  methods:{
    clickSubmit() {
      setTimeout(() => {
        if(this.carLength == 0 || (!this.$refs["shopping-car-bottom-bar"].allChecked && !this.isSelecting)) {
          setTimeout(() => {
            this.show = true;
            this.message = '您还没有选择商品！';
            setTimeout(() => {
              this.show = false;
            },1000)
          },500)
        }else {
          this.show = true;
          this.message = '订单提交成功！请稍后结算';
          setTimeout(() => {
            this.show = false;
          },1000)
        }
      },500)

    }
  }
}
</script>

<style scoped>
.shopping-car {
  color: #fff;
  font-size: 20px;
  font-weight: 700;
}
.car-nav {
  background-color: #FD98A5;
}
.content {
  height: calc(100vh - 44px - 49px - 57px);
  overflow: hidden;
}
.toast {
  z-index:9;
  position: absolute;
  top: 40%;
  left: 15%;
}
</style>
