<template>
  <div>
    <shopping-car-list-item
      v-for="(item,index) in carList"
      :product="item"
      :key="index"></shopping-car-list-item>
  </div>
</template>

<script>
import ShoppingCarListItem from "@/views/shoppingcar/childComponents/ShoppingCarListItem";
export default {
  name: "ShoppingCarList",
  props: {
    carList: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  components:{
    ShoppingCarListItem,
  }
}
</script>

<style scoped>

</style>
