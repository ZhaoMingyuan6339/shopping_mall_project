<template>
<div>
  <div id="detail-recommend-info">
    <h2 class="like">猜您喜欢</h2>
  </div>
  <goods-list :goods="recommendInfo"></goods-list>
</div>
</template>

<script>
import GoodsList from "@/components/content/goods/GoodsList";
export default {
  name: "DetailRecommendInfo",
  props: {
    recommendInfo:{
      type: Array,
      default() {
        return [];
      }
    }
  },
  components: {
    GoodsList,
  }
}
</script>

<style scoped>
#detail-recommend-info {
  display: flex;
  justify-content: center;
  align-items: center;
}
.like {
  font-size: 16px;
  width: 180px;
  height: 40px;
  border: 2px solid #ccc;
  text-align: center;
  line-height: 40px;
  margin-top: 10px;
  background-color: #FD98A5;
  color: #fff;
}
</style>
