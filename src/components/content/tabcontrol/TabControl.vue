<template>
  <div class="tab-control radius" >
    <div
      v-for="(item, index) in title"
      class="tab-control-item"
      :class="{active: index===currentIndex}"
      @click="btnClickTab(index)">
      <span>{{item}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "TabControl",
  data() {
    return {
      currentIndex: 0,
    }
  },
  props: {
    title: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  methods: {
    btnClickTab(index) {
      this.currentIndex = index;
      this.$emit('getTabClick',index)
    }
  }
}
</script>

<style scoped>
.tab-control {
  line-height: 44px;
  text-align: center;
  display: flex;
  z-index: 9;
  background-color: #fff;
}
.tab-control .tab-control-item {
  flex: 1;
  padding: 5px 10px;
  font-size: 14px;
}
.active {
  color: #000;
}
.active span {
  padding: 0 5px;
  border-bottom: 3px solid #FD98A5;
}
</style>
