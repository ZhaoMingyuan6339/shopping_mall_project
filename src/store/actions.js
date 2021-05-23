import {ADD_CAR, ADD_COUNT, UPDATE_CHECK} from "@/store/mutation-types";

export default {
  addToCar(context,payload) {
    return new Promise((resolve,reject) => {
      let oldProduct = context.state.carList.find(item => item.iid === payload.iid);
      if(oldProduct) {
        context.commit(ADD_COUNT,oldProduct);
        resolve('当前商品的数量加1')
      }else {
        payload.count = 1;
        context.commit(ADD_CAR,payload);
        resolve('商品添加到购物车成功！');
      }
    })
  },
  clickCheck(context,payload) {
    context.commit(UPDATE_CHECK,payload);
  }
}
