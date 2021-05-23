<template>
  <div id="app">
    <keep-alive exclude="Detail">
      <router-view></router-view>
    </keep-alive>
    <main-tab-bar class="tab-bar radius" v-if="this.$route.meta.isFootShow"></main-tab-bar>
  </div>
</template>

<script>

import TabBar from "@/components/common/tabbar/TabBar";
import TabBarItem from "@/components/common/tabbar/TabBarItem";
import MainTabBar from "@/components/common/tabbar/maintabbar/MainTabBar";
export default {
  name: 'App',
  components: {
    TabBar,
    TabBarItem,
    MainTabBar,
  }
}
</script>

<style>
@import "./assets/css/base.css";
.tab-bar {
  background-color: #fff;
  z-index: 10;
}
</style>
