<template>
  <div id="detail">
    <detail-nav-bar class="detail-nav radius" @titleClick="navClick" ref="detail-nav"/>
    <scroll class="content" ref="detail-scroll" @scrollEvent="listenScroll" :probe-type-item="3">
      <detail-swiper :topImages="topImages" class="detail-swiper"></detail-swiper>
      <detail-goods-info
        :goods="goods">
      </detail-goods-info>
      <detail-shop-info
        :shop="shop">
      </detail-shop-info>
      <detail-goods-messages
        :detail-info="detailInfo"
        @imgLoad="detailLoaded">
      </detail-goods-messages>
      <detail-params-info :params-info="paramsInfo" ref="detail-params"></detail-params-info>
      <detail-comment-info :comment-info="commentInfo" ref="detail-comment"></detail-comment-info>
      <detail-recommend-info :recommend-info="recommendInfo" ref="detail-recommend"></detail-recommend-info>
    </scroll>
    <back-top v-show="isShow" @click.native="backTopNow"></back-top>
    <detail-bottom-bar @addToCar="addToCar"></detail-bottom-bar>
    <toast class="toast" :message="showToastMessage" :show="showToastShow"></toast>
  </div>
</template>

<script>
import DetailNavBar from "@/views/detail/detailChildComponents/DetailNavBar";
/**导入详情页轮播图*/
import DetailSwiper from "@/views/detail/detailChildComponents/DetailSwiper";
import DetailBottomBar from "@/views/detail/detailChildComponents/DetailBottomBar";
/**导入商品详情模块*/
import DetailGoodsInfo from "@/views/detail/detailChildComponents/DetailGoodsInfo";
import DetailGoodsMessages from "@/views/detail/detailChildComponents/DetailGoodsMessages";
/**导入商家详情模块*/
import DetailShopInfo from "@/views/detail/detailChildComponents/DetailShopInfo";
import Scroll from "@/components/common/scroll/Scroll";
/**导入商品参数模块*/
import {debounce} from "@/network/debounce";
import DetailParamsInfo from "@/views/detail/detailChildComponents/DetailParamsInfo";
import DetailCommentInfo from "@/views/detail/detailChildComponents/DetailCommentInfo";
import DetailRecommendInfo from "@/views/detail/detailChildComponents/DetailRecommendInfo";
/**导入返回顶部组件*/
import BackTop from "@/components/common/backtop/BackTop";
/**导入toast弹窗组件*/
import Toast from "@/components/common/toast/Toast";
/**网络请求相关函数*/
import {getDetailInformation, getRecommendsInfo, GoodsDetail, ShopDetail, ParamsDetail} from "@/network/detail";
import {mapActions} from 'vuex';
export default {
  name: "Detail",
  data() {
    return {
      iid: null,
      topImages:[],
      goods: {},
      shop: {},
      detailInfo: {},
      paramsInfo: {},
      commentInfo: {},
      recommendInfo:[],
      navTopsBarY: [],
      getDetailTopY: null,
      currentDetailIndex: 0,
      getNavClick: null,
      isShow:  false,
      showToastShow: false,
      showToastMessage: ''
    }
  },
  created() {
    // console.log(this.$route)
    //1.切换Id
    this.iid = this.$route.params.id;
    //2.保存网络请求下来的数据
    getDetailInformation(this.iid).then(res => {
      console.log(res);
      this.topImages = res.result.itemInfo.topImages;
      this.goods = new GoodsDetail(res.result.itemInfo, res.result.columns, res.result.shopInfo.services);
      this.shop = new ShopDetail(res.result.shopInfo);
      this.detailInfo = res.result.detailInfo;
      this.paramsInfo = new ParamsDetail(res.result.itemParams.info, res.result.itemParams.rule);
      /**获取评论数据*/
      if(res.result.rate.list) {
        this.commentInfo = res.result.rate.list[0];
      }
    })
    /**推荐信息的网络请求*/
    getRecommendsInfo().then(res => {
      // console.log(res);
      this.recommendInfo = res.data.list || [];
    })
  },
  mounted() {
    this.getDetailTopY = debounce(() => {
      this.navTopsBarY.push(this.$refs["detail-nav"].$el.offsetTop)
      this.navTopsBarY.push(this.$refs["detail-params"].$el.offsetTop - 44);
      this.navTopsBarY.push(this.$refs["detail-comment"].$el.offsetTop - 44);
      this.navTopsBarY.push(this.$refs["detail-recommend"].$el.offsetTop - 44);
      // console.log(this.navTopsBarY);
    },500);
  },
  methods: {
    ...mapActions([
      'addToCar',
    ]),
    navClick(index) {
      this.$refs["detail-scroll"].scroll.scrollTo(0, -this.navTopsBarY[index], 300);
    },
    detailLoaded() {
      // console.log('oooo');
      this.getDetailTopY();
    },
    listenScroll(position) {
      let positionY = - position.y;
      // [0, 12258, 12751, 13065, __ob__: Observer]
      /*for(let i = 0; i < this.navTopsBarY.length; i++) {
        if(this.currentDetailIndex !== i && (positionY >= this.navTopsBarY[i] && positionY < this.navTopsBarY[i + 1])) {
          this.currentDetailIndex = i;
          console.log(this.currentDetailIndex)
          this.$refs["detail-nav"].currentIndex = this.currentDetailIndex;
        }
      }*/
      for(let i = 0; i<this.navTopsBarY.length; i++) {
        if(positionY >= this.navTopsBarY[i]) {
          this.$refs["detail-nav"].currentIndex = i;
        }
      }
      if(Math.abs(position.y) > 1000) {
        this.isShow = true;
      }else {
        this.isShow = false;
      }
    },
    backTopNow() {
      this.$refs["detail-scroll"].scroll.scrollTo(0,0,500);
    },
    addToCar() {
      //1.获取购物车里面需要展示的信息
      const product = {};
      product.image = this.topImages[0];
      product.title = this.goods.title;
      product.desc = this.goods.desc;
      product.price = this.goods.realPrice;
      product.iid = this.iid;
      product.count = 0;
      product.check = false;
      // console.log(product)
      //2.将商品添加到购物车里
      /*his.addToCar(product).then(res => {
        console.log(res);
      })t*/
      this.$store.dispatch('addToCar',product).then(res => {
        setTimeout(() => {
          this.showToastShow = true;
          this.showToastMessage = res;
          setTimeout(() => {
            this.showToastShow = false;
          },1500)
        },500);
      })
    }
  },
  components:{
   DetailNavBar,
   DetailSwiper,
   DetailGoodsInfo,
   DetailShopInfo,
   Scroll,
   DetailGoodsMessages,
   DetailParamsInfo,
    DetailCommentInfo,
    DetailRecommendInfo,
    DetailBottomBar,
    BackTop,
    Toast,
  }
}
</script>

<style scoped>
.detail-nav {
/*padding: 5px 0;*/
/*  margin-bottom: 5px;*/
  background-color: #fff;
  position: relative;
  /*top: 0;
  left:0;
  right:0;*/
  z-index: 9999999;
}
.detail-swiper {
  width: 100%;
  margin: 0 auto;
  border: 1px solid transparent;
  border-radius: 10%;
}
.content {
  height: calc(100vh - 93px);
  /*margin-top: 44px;*/
  overflow: hidden;
}
.toast {
  position: absolute;
  top: 50%;
  left: 50%;
  margin-left: -150px;
  margin-top: -80px;
}
</style>
