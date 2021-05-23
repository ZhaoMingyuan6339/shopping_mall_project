import {request} from "@/network/request";

export function getDetailInformation(iid) {
  return request({
    url: '/detail',
    params: {
      iid,
    }
  })
}
export function getRecommendsInfo() {
  return request({
    url: 'recommend',
  })
}

/**展示商品详情信息--封装一个class类，然后通过这个类创建对象，最后面向对面拿取数据*/
export class GoodsDetail {
  constructor(itemInfo, columns, services) {
    this.title = itemInfo.title;
    this.desc = itemInfo.desc;
    this.newPrice = itemInfo.price;
    this.oldPrice = itemInfo.oldPrice;
    this.discount = itemInfo.discountDesc;
    this.columns = columns;
    this.services = services;
    this.realPrice = itemInfo.lowNowPrice;
  }
}

export class ShopDetail {
  constructor(shopInfo) {
    this.name = shopInfo.name;
    this.shopLogo =shopInfo.shopLogo;
    this.cSells = shopInfo.cSells;
    this.cGoods = shopInfo.cGoods;
    this.cFans = shopInfo.cFans;
    this.score = shopInfo.score;
    this.allGoodsUrl = shopInfo.allGoodsUrl;
  }
}

/**导出商品参数信息*/
export class ParamsDetail {
  constructor(info,rule) {
    this.image = info.images? info.images : '';
    this.set = info.set;
    this.disclaimer = rule.disclaimer;
    this.tables = rule.tables;
  }
}

/**导出评论信息*/
/*export class CommentsDetail {
  constructor() {

  }
}*/
