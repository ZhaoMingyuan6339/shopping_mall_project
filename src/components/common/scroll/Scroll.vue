<template>
<div ref="wrapper" class="radius">
   <div class="content">
     <slot></slot>
   </div>
</div>
</template>

<script>
import BScroll from 'better-scroll';
import ObserveDOM from '@better-scroll/observe-dom';
import PullUp from '@better-scroll/pull-up';
export default {
  name: "Scroll",
  props:{
    probeTypeItem: {
      type: Number,
      default: 0,
    },
    pullUploadItem: {
      type: Boolean,
      default: false,
    }
  },
  data() {
    return {
      scroll: null,
      message: '哈哈哈'
    }
  },
  mounted() {
    BScroll.use(ObserveDOM);
    // BScroll.use(PullUp);
    /**1.创建scroll对象*/
    this.scroll = new BScroll(this.$refs.wrapper, {
        pullUpLoad: this.pullUploadItem,
        probeType: this.probeTypeItem,
        // scrollY: true,
        click: true,
        swipeTime: 1000,
        observeDOM: true,
        observeImage: true,
        disableMouse: false,//启用鼠标拖动
        disableTouch: false//启用手指触摸
      })
    // this.scroll.refresh();
    /**2.监听滚动事件*/
    if(this.probeTypeItem == 2 || this.probeTypeItem ==3) {
      this.scroll.on('scroll', (position) => {
        this.$emit('scrollEvent', position);
      })
    }
    /**3.监听上拉事件*/
    if(this.pullUploadItem) {
      this.scroll.on('pullingUp',() => {
        this.$emit('pullingUp');
      })
    }
  },
  methods:{
    scrollType(x, y ,time) {
      return this.scroll.scrollTo(x, y ,time);
    },
    finishPullingUp() {
       this.scroll.finishPullUp();
    }
  }
}
</script>

<style scoped>

</style>
