<template>
  <div class="cart-bottom-bar radius">
    <div class="cart-bottom-check">
      <span>全选</span>
      <check-box  class="checked-all" @click.native = "isAllChecked" :is-checked="allChecked">

      </check-box>
    </div>
    <div class="cart-bottom-price">
      合计:
      <span>￥{{calculate}}</span>
      元
    </div>
    <div class="cart-bottom-btn">
      <button @click="clickPrime">提交订单({{submitPrice}})</button>
    </div>
  </div>
</template>

<script>
import CheckBox from "@/components/common/checkBox/CheckBox";
import Toast from "@/components/common/toast/Toast";
import {mapGetters} from 'vuex';
export default {
  name: "ShoppingCarBottomBar",
  data() {
    return {
      isAllCheck: false,
    }
  },
  components: {
    CheckBox,
    Toast,
  },
  computed: {
    ...mapGetters(['carLength','carList']),
    calculate() {
      return this.carList.filter(item => {
        return item.checked;
      }).reduce((preValue, item) => {
        return preValue + item.price * item.count;
      },0).toFixed(2);
    },
    submitPrice() {
      return this.carLength;
    },
    allChecked() {
      let item = this.carList;
      let length = this.carLength;
      if(length ===0) return false;
      for(let i = 0; i < length; i++) {
        if(!item[i].checked) {
          this.isAllCheck = false;
          return false;
        }
      }
      this.isAllCheck = true;
      return true;
    }
  },
  methods: {
    isAllChecked() {
      if(this.allChecked) {
        this.carList.forEach(item => {
          item.checked = false;
        })
      }else {
        this.carList.forEach(item => {
          item.checked = true;
        })
      }
    },
    clickPrime() {
      this.$emit('clickSubmit');
    }
  },

}
</script>

<style scoped>
.cart-list {
  width: 100%;
  height: 100%;
}

.scroll-height {
  position: absolute;
  top: 44px;
  right: 0;
  bottom: 99px;
  left: 0;
  overflow: hidden;
  width: 100%;
  background-color: #ffffff;
}

.shop-item {
  font-size: 0;
  display: flex;
  width: 100%;
  padding: 5px;
  border-bottom: 1px solid #cccccc;
}

.shop-item:last-child {
  border-bottom: 0;
}

.item-selector {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 12%;
}

.item-title,
.item-desc {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}

.item-img {
  padding: 5px;
}

.item-img img {
  display: block;
  width: 80px;
  height: 100px;
  border-radius: 5px;
  object-fit: cover;
}

.item-info {
  font-size: 17px;
  position: relative;
  overflow: hidden;
  width: 88%;
  padding: 5px 10px;
  color: #333333;
}

.item-info .item-desc {
  font-size: 14px;
  margin-top: 15px;
  color: #666666;
}

.info-bottom {
  position: absolute;
  right: 10px;
  bottom: 10px;
  left: 10px;
  margin-top: 10px;
}

.info-bottom .item-price {
  color: #ff4500;
}

.cart-bottom-bar {
  font-size: 15px;
  position: fixed;
  right: 0;
  bottom: 50px;
  left: 0;
  display: flex;
  align-items: center;
  width: 100%;
  height: 50px;
  padding: 0 10px;
  border-top: 1px solid #cccccc;
  border-bottom: 1px solid #ccc;
  margin-bottom: 10px;
  background-color: #fff;
}

.cart-bottom-price {
  margin-left: 50px;
}

.cart-bottom-price span {
  color: red;
}

.cart-bottom-btn button {
  line-height: 50px;
  position: absolute;
  right: 0;
  bottom: 0;
  display: block;
  height: 50px;
  padding: 0 15px;
  color: white;
  border: 0;
  outline: none;
  background: linear-gradient(to right, #FF789A, #ee0a24);
}

.cart-bottom-btn button:active {
  opacity: 0.8;
}
</style>
