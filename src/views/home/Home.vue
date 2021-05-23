<template>
  <div id="home">
    <nav-bar class="home-nav .radius">
      <template v-slot:center>
        <h5 class="home-nav-center">购物街，你想要的应有尽有</h5>
      </template>
    </nav-bar>
    <tab-control
      :title="title"
      @getTabClick="getTabClick"
      class="tab_Control .radius"
      ref="tabControl1"
      v-show="isSticky"
      :class="{isActiveSticky: isSticky}">
    </tab-control>
    <scroll class="content"
            ref="scroll"
            :probe-type-item="3"
            :pull-upload-item="true"
            @scrollEvent="getScrollEvent"
            @pullingUp="loadMore">
      <home-swiper
        :banner="banner"
        @homeSwiperImgLoaded="isHomeSwiperImgLoaded"></home-swiper>
      <home-recommend :recommend="recommend"></home-recommend>
      <feature-view></feature-view>
      <tab-control
        :title="title"
        @getTabClick="getTabClick"
        ref="tabControl">
      </tab-control>
      <goods-list :goods="goods[this.goodsNumber].list"></goods-list>
    </scroll>
    <back-top @click.native="btnBackTop" v-show="isShow"></back-top>
  </div>
</template>

<script>
import NavBar from "@/components/common/navbar/NavBar";
/**导入主页请求数据的函数*/
import {getHomeMultiData, getMultiGoods} from "@/network/home";
import HomeSwiper from "@/views/home/childComponents/HomeSwiper";
import HomeRecommend from "@/views/home/childComponents/HomeRecommend";
/**导入本周流行*/
import FeatureView from "@/views/home/childComponents/FeatureView";
/**导入TabControl*/
import TabControl from "@/components/content/tabcontrol/TabControl";
/**导入商品详情组件*/
import GoodsList from "@/components/content/goods/GoodsList";
/**导入Scroll组件*/
import Scroll from "@/components/common/scroll/Scroll";
import BackTop from "@/components/common/backtop/BackTop";

/**导入防抖函数*/
import {debounce} from "@/network/debounce";

export default {
  name: "Home",
  data() {
    return {
      banner: [],
      recommend: [],
      title: ['流行', '新款', '精选'],
      goods: {
        'pop': {
          page: 0,
          list: [],
        },
        'new': {
          page: 0,
          list: [],
        },
        'sell': {
          page: 0,
          list:[],
        }
      },
      goodsNumber: 'pop',
      isShow : false,
      tabOffset: 0,
      isSticky: false,
    }
  },
  created() {
    /**注意：这里函数在执行完后请求的数据会被垃圾回收机制回收地掉，所以要注意将数据保存在组建数据里*/
    this.getMultidata();
    this.getMultiGoods('pop');
    this.getMultiGoods('new');
    this.getMultiGoods('sell');
  },
  mounted() {

  },
  updated() {
    // this.getTabOffset();
  },
  destroyed() {
  },
  /**状态活跃钩子函数*/
  activated() {
    this.$refs.scroll.scroll.refresh();
    this.$refs.scroll.scrollType(0, this.saveY);
  },
  deactivated() {
    this.saveY = this.$refs.scroll.scroll.y;
    // console.log(this.saveY);
  },
  components: {
    NavBar,
    HomeSwiper,
    HomeRecommend,
    FeatureView,
    TabControl,
    GoodsList,
    Scroll,
    BackTop,
  },
  methods:{
    /**
     * 网络请求相关的方法*/
    getMultidata() {
      return getHomeMultiData().then(res => {
        console.log(res)
        this.banner = res.data.banner.list;
        this.recommend = res.data.recommend.list;
      })
    },
    getMultiGoods(type) {
      const page = this.goods[type].page + 1;
      getMultiGoods(type,page).then(res => {
        console.log(res);
        this.goods[type].list.push(...res.data.list);
        this.goods[type].page++;
        this.$refs.scroll.finishPullingUp();
        // this.$refs.scroll.scroll.refresh();
      })
    },
    /**
     * 事件监听相关的方法*/
    getTabClick(index) {
      switch(index) {
        case 0:
          this.goodsNumber = 'pop';
          break;
        case 1:
          this.goodsNumber = 'new';
          break;
        default:
          this.goodsNumber = 'sell';
      }
      this.$refs.tabControl1.currentIndex = index;
      this.$refs.tabControl.currentIndex = index;
    },
    btnBackTop() {
      /*console.log(this.$refs.scroll.message);
      console.log(this.$refs.scroll.scrollTo);*/
      this.$refs.scroll.scrollType(0 ,0 ,500);
      // this.getScrollEvent(position)
    },
    getScrollEvent(position) {
      // console.log(position);
      this.isShow = Math.abs(position.y) > 1000 ? true : false;
      this.isSticky = Math.abs(position.y)  > this.tabOffset - 44 ? true : false;
    },
    loadMore() {
      this.getMultiGoods(this.goodsNumber);
    },
    isHomeSwiperImgLoaded() {
      this.tabOffset = this.$refs.tabControl.$el.offsetTop;
    },
  }
}
</script>

<style scoped>
#home {
  position: relative;
  /*padding-top: 44px;*/
  /*overflow: hidden;
  width: 100%;
  !*background-color: #fff; *!
  !*padding-top: 100px;*!
  position: fixed;
  left: 0;
  top: 0;
  right:0;
  bottom: 0;*/
}
.home-nav {
  /*position: fixed;
  top: 0;
  left: 0;
  right: 0;*/
  z-index: 1;
  display: flex;
  height: 44px;
  line-height: 44px;
  box-shadow: 1px 1px 5px 1px rgba(0,0,0,0.09);
/*overflow: hidden;*/
/*  padding-bottom: 44px;*/
  background-color: #FF8E96;
}
.home-nav-center {
  color: #fff;
  font-size: 14px;
}
.content {
  height: calc(100vh - 44px);
  overflow: hidden;
  /*z-index:999;*/
  /*overflow: hidden;
  position: absolute;
  top: 44px;
  bottom: 49px;
  left: 0;
  right: 0;
  background-color: red;*/
}
.isActiveSticky {
  position: fixed;
  top: 44px;
  left: 0;
  right: 0;
}
.tab_Control {
  /*position: relative;*/
  z-index:1;
}
</style>
