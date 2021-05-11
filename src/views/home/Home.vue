<template>
  <div>
    <nav-bar class="home-nav">
      <template v-slot:center>
        <h5 class="home-nav-center">购物街，你想要的应有尽有</h5>
      </template>
    </nav-bar>
    <home-swiper :banner="banner"></home-swiper>
    <home-recommend :recommend="recommend"></home-recommend>
  </div>
</template>

<script>
import NavBar from "@/components/common/navbar/NavBar";
/**导入主页请求数据的函数*/
import {getHomeMultiData} from "@/network/home";
import HomeSwiper from "@/views/home/childComponents/HomeSwiper";
import HomeRecommend from "@/views/home/childComponents/HomeRecommend";


export default {
  name: "Home",
  data() {
    return {
      banner: [],
      recommend: [],
    }
  },
  created() {
    /**注意：这里函数在执行完后请求的数据会被垃圾回收机制回收地掉，所以要注意将数据保存在组建数据里*/
    getHomeMultiData().then(res => {
      this.banner = res.data.banner.list;
      this.recommend = res.data.recommend.list;
    })
  },
  components: {
    NavBar,
    HomeSwiper,
    HomeRecommend,
  }
}
</script>

<style scoped>
.home-nav {
  background-color: #FF8E96;
}
.home-nav-center {
  color: #fff;
  font-size: 14px;
}
</style>
