<template>
  <div class="goods-list">
    <goods-list-item v-for="(item,index) in goods" :goods="item" :key="index"></goods-list-item>
  </div>
</template>

<script>
import GoodsListItem from "@/components/content/goods/GoodsListItem";
export default {
  name: "GoodsList",
  props: {
    goods: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  components: {
    GoodsListItem,
  }
}
</script>

<style scoped>
.goods-list {
  /*margin-bottom: 10px;*/
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  padding: 10px;
}
</style>
