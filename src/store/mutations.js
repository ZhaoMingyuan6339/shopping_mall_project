import {
  ADD_CAR,
  ADD_COUNT,
  UPDATE_CHECK,
} from "@/store/mutation-types";

export default {
  // addToCar(state, payload) {
  /*1.查找数组中是否含有该商品*/
  /**
   * mutations唯一的目的就是更新state中状态
   * mutations中的每个方法尽可能完成的事情比较单一一点*/
  // let oldProduct = state.carList.find(item => item.iid === payload.iid);
  [ADD_COUNT](state,payload) {
    payload.count +=1;
  },
  [ADD_CAR](state,payload) {
    payload.checked = true;
    state.carList.push(payload);
  },
  [UPDATE_CHECK](state,payload) {
    payload.checked = !payload.checked;
  }
  /*if(oldProduct) {
    oldProduct.count+=1;
  }else {
    payload.count+=1;
    state.carList.push(payload);
  }*/
}
