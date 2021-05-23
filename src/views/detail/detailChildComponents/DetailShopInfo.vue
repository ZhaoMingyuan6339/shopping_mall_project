<template>
  <div id="detail-shop" v-if="Object.keys(shop).length!==0">
    <div class="shop-title">
      <span><img v-lazy="shop.shopLogo" alt=""></span>
      <span class="shop-title-item">{{shop.name}}</span>
    </div>
    <div class="shop-message">
      <div class="shop-message-left">
        <div class="shop-message-left-item">
          <span>{{getSellData}}</span>
          <p>总销量</p>
        </div>
        <div class="shop-message-left-item">
          <span>{{shop.cGoods}}</span>
          <p>全部宝贝</p>
        </div>
        <div class="shop-message-left-item">
          <span>{{shop.cFans}}</span>
          <p>粉丝数量</p>
        </div>
      </div>
      <div class="shop-message-right">
        <div class="shop-message-dis" v-for="(item,index) in shop.score">
          <span class="shop-discribe">{{item.name}}</span>
          <span class="shop-price" :style="{color: item.isBetter === false ? '#5EA732' :'#F13E3A'}">{{item.score}}</span>
          <span class="shop-quality enActive" v-if="item.isBetter === true">高</span>
          <span class="shop-quality active" v-else>低</span>
        </div>
      </div>
    </div>
    <div class="shop-into">
      <a :href="shop.allGoodsUrl"><div class="shop-into-item">进店逛逛</div></a>
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailShopInfo",
  props: {
    shop: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  computed: {
    getSellData() {
      return (this.shop.cSells /1000).toFixed(1) + '万';
    }
  }
}
</script>

<style scoped>
.shop-title {
  margin-top: 15px;
  height: 108px;
}
.shop-title img {
  width: 82px;
  height: 82px;
  vertical-align: middle;
  margin-left: 10px;
}
.shop-title-item {
  font-size: 24px;
  font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
  font-weight: bold;
  margin-left: 10px;
}
.shop-message {
  height: 80px;
}
.shop-message-left {
  float: left;
  width: 60%;
  display: flex;
  padding: 15px 5px 15px 0;
  border-right: 2px solid #ddd;
}
.shop-message-left-item {
  flex: 1;
  height: 100%;
  margin: 0 5px;
  text-align: center;
  vertical-align: middle;
}
.shop-message-left-item span {
  font-size: 14px;
  font-weight: 700;
}
.shop-message-left-item p {
  font-size: 12px;
}
.shop-message-right {
  float: left;
  font-size: 14px;
  margin-left: 5px;
}
.shop-message-dis {
  margin-bottom: 5px;
}
.shop-price{
  display: inline-block;
  width: 10px;
  margin: 0 20px;
}
.shop-quality {
  width: 16px;
  height: 16px;
  text-align: center;
  display: inline-block;
  margin-left: 5px;
}
.active {
  background-color: #5EA732;
  font-size: 12px;
  color: #fff;
}
.enActive {
  color: #fff;
  font-size: 12px;
  background-color: #F13E3A;
}
.shop-into {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80px;
  text-align: center;
}
.shop-into-item {
  width: 140px;
  height: 44px;
  background-color: #F2F5F8;
  text-align: center;
  line-height: 44px;
  border: 1px solid #F2F5F8;
  border-radius: 20px;
  font-size: 14px;
}
</style>
