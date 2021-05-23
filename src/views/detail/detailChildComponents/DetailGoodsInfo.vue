<template>
  <div id="detail-info" v-if="Object.keys(goods).length!==0">
    <h4 class="detail-info-title">{{goods.title}}</h4>
    <div class="detail-title">
      <span class="new-price">{{goods.newPrice}}</span>
      <del class="old-price" v-if="goods.oldPrice">{{goods.oldPrice}}</del>
      <span class="real-price" v-else>{{goods.realPrice}}</span>
      <span class="discount" v-if="goods.discount">{{goods.discount}}</span>
    </div>
    <div class="detail-middle">
<!--      <span>{{goods.columns[0]}}</span>
      <span>{{goods.columns[1]}}</span>-->
      <span class="detail-middle-item" v-for="item in goods.columns">{{item}}</span>
      <span class="detail-middle-item" v-if="goods.services.length!==0">{{goods.services[goods.services.length - 1].name}}</span>
    </div>
    <div class="detail-rule">
      <span class="detail-rule-item" v-for="index in goods.services.length - 1" :key="index">
        <i><img :src="goods.services[index - 1].icon" alt=""></i>
        <span>{{goods.services[index - 1].name}}</span>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailGoodsInfo",
  props: {
    goods: {
      type: Object,
      default() {
        return {};
      }
    },
    methods: {
    },
    created() {
    }
  }
}
</script>

<style scoped>
.detail-info-title {
  height: 50px;
  line-height: 20px;
  font-size: 14px;
  padding: 10px 0;
}
.detail-title {
  position: relative;
  height: 35px;
  padding: 5px 0;
  /*line-height: 30px;*/
  vertical-align: top;
  margin-left: 5px;
}
.new-price {
  font-size: 22px;
  color: #FF8E96;
  font-weight: 700;
}
.old-price, .real-price {
  font-size: 16px;
  padding:0 10px
}
.discount {
  /*position: absolute;
  top: -1px;
  left: 134px;*/
  width: 78px;
  height: 30px;
  line-height: 30px;
  background-color: #FF8E96;
  border: 1px solid #FF8E96;
  border-radius: 10px;
  font-size: 14px;
  padding: 3px 3px;
  text-align: center;
  color: #fff;
  vertical-align: bottom;
}
.detail-middle {
  display: flex;
  height: 30px;
  padding: 5px 2px;
  border-bottom: 2px solid #eee;
  justify-content: space-around;
}
.detail-middle-item {
  flex: 1;
  font-size: 14px;
  color: #AAAAAA;
  padding: 0 2px;
}
.detail-rule {
  display: flex;
  height: 54px;
  line-height: 54px;
  justify-content: space-around;
  border-bottom: 4px solid #eee;
  padding: 0 5px;
  text-align: center;
}
.detail-rule-item {
  flex: 1;
  font-size: 10px;
  /*vertical-align: bottom;*/
  /*margin: 0 2px 0 5px;*/
}
.detail-rule-item img{
  width: 15px;
  height: 15px;
  margin-right: 1px;
  margin-bottom: 5px;
  vertical-align: middle;
}
</style>
