<template>
    <div class="tab-bar-item" @click="itemClick">
      <div v-if="!isActive">
        <slot name="tab-icon"></slot>
      </div>
      <div v-else>
        <slot name="tab-icon-active"></slot>
      </div>
      <div :style="isActiveColor">
        <slot name="tab-text"></slot>
      </div>
    </div>

</template>

<script>
export default {
  name: "TabBarItem",
  data() {
    return {
      // isActive: false,
      activeColor: '#FF5777',
    }
  },
  props: {
    path: {
      type: String,
    }
  },
  methods:{
    itemClick() {
      // console.log(this.$router)
      return this.$router.replace(this.path).catch(err => err);
    }
  },
  computed: {
    isActive() {
      return this.$route.path === this.path? true:false;
    },
    isActiveColor() {
      return this.$route.path === this.path? {color: this.activeColor}: {};
    }
  }
}
</script>

<style scoped>
.tab-bar-item {
  padding: 0 3px;
  flex: 1;
  align-items: center;
  justify-content: center;
  text-align: center;
  font-size: 16px;
  font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
}
.tab-bar-item img {
  width: 24px;
  height: 24px;
  vertical-align: middle;
  margin-bottom: 3px;
}
</style>
