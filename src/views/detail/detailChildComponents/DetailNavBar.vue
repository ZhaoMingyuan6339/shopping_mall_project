<template>
 <div id="detail-nav-bar">
   <nav-bar>
     <template
       v-slot:left>
       <div
         class="back"
         @click="backClick">
         <img src="~@/assets/img/detail/back.svg" alt="">
       </div>
     </template>
     <template v-slot:center>
         <div class="detail-title">
           <span
             class="detail-title-item"
             v-for="(item,index) in title"
             @click="titleClick(index)"
             :class="{active: index === currentIndex}">
             {{item}}
           </span>
         </div>
     </template>
   </nav-bar>
 </div>
</template>

<script>
import NavBar from "@/components/common/navbar/NavBar";
export default {
  name: "DetailNavBar",
  data() {
    return {
      title: ['商品', '参数', '评论', '推荐'],
      currentIndex: 0,
    }
  },
  components: {
    NavBar,
  },
  methods: {
    titleClick(index) {
      this.currentIndex = index;
      this.$emit('titleClick',index);
    },
    backClick() {
      this.$router.back();
    }
  }
}
</script>

<style scoped>
@import "~@/assets/css/base.css";
.detail-title {
  display: flex;
}
.detail-title-item {
  flex: 1;
  padding: 0 5px;
  font-size: 14px;
  font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
}
.back {
  padding-left: 10px;
}
.back img{
  width: 34px;
  height: 34px;
  vertical-align: middle;
}
.active {
  /*border-bottom: 1px solid  #FF8E96;*/
  background-color: #FF8E96;
  color: #000;
  /*box-shadow: 1px 1px 1px 1px rgba(0,0,0,0.08);*/

}
</style>
