<template>
  <div id="detail-swiper">
    <swiper>
      <swiper-item
        v-for="(item, index) in topImages"
        :key="index"
        class="detail-swiper-item">
        <img :src="item" alt="">
      </swiper-item>
    </swiper>
  </div>
</template>

<script>
import {Swiper, SwiperItem} from '@/components/common/swiper/index';
export default {
  name: "DetailSwiper",
  props: {
    topImages: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  components: {
    Swiper,
    SwiperItem,
  }
}
</script>

<style scoped>

.detail-swiper-item {
  height: 230px;
  overflow: hidden;
}
.detail-swiper-item img {
  /*width: 100%;
  height: 100%;*/
}
</style>
