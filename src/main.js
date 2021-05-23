import Vue from 'vue'
import App from './App.vue'
import router from "@/router";
import store from "@/store";
import VueLazyload from "vue-lazyload";
import rem from "@/common/rem";
Vue.config.productionTip = false
/**使用懒加载插件*/
Vue.use(VueLazyload, {
  loading: require('@/assets/img/common/load.svg')
});
new Vue({
  render: h => h(App),
  router,
  store,
}).$mount('#app')
