<template>
  <div id="app">
    <router-view></router-view>
    <main-tab-bar></main-tab-bar>
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

</style>
