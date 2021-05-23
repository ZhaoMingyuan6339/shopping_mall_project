<template>
<div id="car-item">
  <check-box class="car-item-checked" @click.native="check" :is-checked="product.checked"></check-box>
  <div class="car-item-detail">
   <div class="car-item-detail-img"><img :src="product.image" alt=""></div>
    <div class="car-item-detail-detail">
      <h5 class="title">{{product.title}}</h5>
      <p class="desc">{{product.title}}</p>
      <div class="bottom-item">
        <span class="price">￥{{product.price}}</span>
        <span class="count">X{{product.count}}</span>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import CheckBox from "@/components/common/checkBox/CheckBox";
export default {
  name: "ShoppingCarListItem",
  props:{
    product: {
      type:Object,
      default() {
        return {};
      }
    }
  },
  methods:{
    check() {
      this.$store.dispatch('clickCheck',this.product);
    }
  },
  components: {
    CheckBox,
  }
}
</script>

<style scoped>
#car-item {
  display: flex;
  position: relative;
  margin-top: 10px;
  width: 100%;
  height: 100%;
  border-top: 1px solid #ccc;
  border-bottom: 1px solid #ccc;
  margin-bottom: 20px;
}
.car-item-checked {
  align-self: center;
  margin-left: 5px;
}

.car-item-detail {
  margin-left: 10px;
  width: 90%;
  flex: 1;
  height: 166px;
}
.car-item-detail-detail {
  float: right;
  /*padding: 0 10px;*/
  width: 56%;
  text-align: left;
  padding: 5px 10px;
}
.car-item-detail-img {
  float: left;
  text-align: center;
  width: 34%;
  height: 100%;
  /*flex: 1;*/
}
.car-item-detail-img img {
  width: 100%;
  height: 100%;
}
.title{
  width: 100%;
  font-size: 16px;
  font-weight: 700;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin-bottom: 3px;
}
.desc {
  width: 100%;
  font-size: 14px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin-bottom: 50px;
}
.bottom-item {
}
.price {
  width: 30%;
  color: crimson;
  height: 24px;
}
.count {
  display: inline-block;
  float: right;
}
</style>
