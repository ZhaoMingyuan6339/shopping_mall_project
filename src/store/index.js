import Vue from 'vue';
import VueX from 'vuex';
import mutations from "@/store/mutations";
import actions from "@/store/actions";
import getters from "@/store/getters";
Vue.use(VueX);

const store = new VueX.Store({
  state: {
    carList: [],
  },
  mutations,
  actions,
  getters,
})


export default store;
