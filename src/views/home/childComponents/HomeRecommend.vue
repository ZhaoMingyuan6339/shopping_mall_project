<template>
 <div class="recommend">
   <div class="recommend-data" v-for="items in recommend" >
     <a v-bind:href="items.link">
       <img v-lazy="items.image" alt="">
       <div class="recommend-text">{{items.title}}</div>
     </a>
   </div>
 </div>
</template>

<script>
export default {
  name: "HomeRecommend",
  props: {
    recommend: {
      type:Array,
      default() {
        return [];
      }
    }
  }
}
</script>

<style scoped>
.recommend {
  display: flex;
  text-align: center;
}
.recommend .recommend-data {
  flex: 1;
  border-bottom: 10px solid #eee;
}
.recommend .recommend-data img {
  width: 68px;
  height: 68px;
  padding-bottom: 5px;
  margin-top: 5px;
}
.recommend-text {
  font-size: 12px;
  font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
  margin-bottom: 5px;
}
</style>
