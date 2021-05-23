<template>
  <div class="goods-list-item" @click="getGoodsDetail">
    <img class="item-img" v-lazy="isShowImg" alt="">
    <div>
      <p class="title">{{ goods.title }}</p>
      <div style="clear:both">
        <div class="caption">
          <span class="price">{{goods.price}}</span>
          <img src="~@/assets/img/home/collect.svg" alt="">
          <span class="collect">{{goods.cfav}}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "GoodsListItem",
  props:{
    goods: Object,
  },
  methods:{
    getGoodsDetail() {
      this.$router.push('/detail/' + this.goods.iid);
    }
  },
  computed: {
    isShowImg() {
      if(this.goods.img) {
        return this.goods.img
      }else if(this.goods.image) {
        return this.goods.image;
      }else {
        return this.goods.show.img;
      }
      // return this.goods.image || this.goods.show.img;
    }
  }
}
</script>

<style scoped>
.goods-list-item {
  position: relative;
  text-align: center;
  width: 45%;
  font-size: 12px;
  padding-bottom: 20px;
}
.item-img {
  border-radius: 10px;
  width: 100%;
}
.caption img {
  width: 12px;
  height: 12px;
}
.price {
  color: #FF8E96;
}
.collect {
  color: skyblue;
}
.title {
  /*margin-bottom: 20px;*/
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin-bottom: 3px;
}
.caption {
  position: absolute;
  bottom: 5px;
  left: 0;
  right: 0;
  vertical-align: bottom;
  margin-top: 5px;
  font-size: 12px;
  overflow: hidden;
  text-align: center;
}
</style>
