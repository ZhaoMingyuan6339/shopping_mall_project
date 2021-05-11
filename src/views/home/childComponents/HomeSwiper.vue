<template>
  <div class="home-swiper">
    <swiper>
      <swiper-item v-for="(item,index) in banner" :key="index">
        <a v-bind:href="item.link">
          <img v-bind:src="item.image" alt="">
        </a>
      </swiper-item>
    </swiper>
  </div>
</template>

<script>
import Swiper from "@/components/common/swiper/Swiper";
import SwiperItem from "@/components/common/swiper/SwiperItem";
export default {
  name: "HomeSwiper",
  props: {
    banner: {
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

</style>
