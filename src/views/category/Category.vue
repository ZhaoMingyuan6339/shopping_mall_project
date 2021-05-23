<template>
  <div class="category">
    <nav-bar class=category-nav>
      <template v-slot:center>
        <h5 class="category-nav-bar">商品分类</h5>
      </template>
    </nav-bar>
    <slide-bar :slide-bar-list="categoryList" @slideBarItemClick="slideBarItemClick"></slide-bar>
    <scroll class="scroll-height"
            @scrollEvent="listenCategory"
            :probe-type-item="3"
            :pull-upload-item="true"
            ref="scroll">
      <sub-category :category-list="subcategoryList"></sub-category>
      <tab-control :title="titleList" @getTabClick="tabClick" ref="tabControl"></tab-control>
      <goods-list :goods="categoryDetailList"/>
    </scroll>
    <back-top v-show="isShow" @click.native="backTop"></back-top>
  </div>
</template>

<script>
import NavBar from "@/components/common/navbar/NavBar";
import {getCategory, getCategoryDetail, getSubcategory} from "@/network/category";
import SubCategory from "@/views/category/childComponents/SubCategory";
import SlideBar from "@/views/category/childComponents/SlideBar";
import Scroll from "@/components/common/scroll/Scroll";
import GoodsList from "@/components/content/goods/GoodsList";
import TabControl from "@/components/content/tabcontrol/TabControl";
import BackTop from "@/components/common/backtop/BackTop";
export default {
  name: "Category",
  data() {
    return {
      // 分类内容数据
      subcategoryList: [],
      categoryDetailList: [],
      // 分类侧边栏数据
      categoryList: [],
      titleList: ["流行", "新款", "精选"],
      currentIndex: 0,
      isShow: false,
    }
  },
  methods: {
    slideBarItemClick({ maitKey, index }) {
      // 防止反复请求
      if (this.currentIndex === index) return;
      this.currentIndex = index;
      // 每次切换分类初始化tabControl的下标
      this.$refs.tabControl.curIndex = 0;
      // 请求对应的推荐列表
      this.getCategoryDetail(this.categoryList[this.currentIndex].miniWallkey, "pop");
      this.getSubcategory(maitKey);
    },
    getCategory() {
      getCategory().then(res => {
       /* console.log(res.data.category.list);
        console.log(res)*/
        this.categoryList = res.data.category.list;
        this.$nextTick(() => {
          this.getSubcategory(this.categoryList[0].maitKey);
          this.getCategoryDetail(this.categoryList[0].miniWallkey, "pop");
        });
      });
    },
    getSubcategory(key) {
      getSubcategory(key).then(res => {
        // console.log(res)
        this.subcategoryList = [...res.data.list];
      });
    },
    getCategoryDetail(key, type) {
      getCategoryDetail(key, type).then(res => {
        console.log(res);
        this.categoryDetailList=[...res];
      });
    },
    tabClick(index) {
      const typeList = ["pop", "new", "sell"];
      // 切换类型数据
      // console.log(index)
      this.getCategoryDetail(this.categoryList[this.currentIndex].miniWallkey, typeList[index]);
    },
    listenCategory(position) {
      // console.log(position)
      if(Math.abs(position.y) >1000) {
        this.isShow = true;
      }else {
        this.isShow = false;
      }
    },
    backTop() {
      // console.log(11)
      this.$refs.scroll.scrollType(0,0,500);
    }
  },
  created() {
    this.getCategory();
  },
  components: {
    NavBar,
    SubCategory,
    SlideBar,
    Scroll,
    TabControl,
    GoodsList,
    BackTop,
  },
}

</script>

<style scoped>
.category-nav {
  background-color: #FF789A;
}
.category-nav-bar {
  color: #fff;
  background-color: #FF789A;
}
.scroll-height {
  position: fixed;
  top: 44px;
  right: 0;
  bottom: 50px;
  left: 100px;
  overflow: hidden;
}
</style>
