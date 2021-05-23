<template>
  <div id="detail-params-info" v-if="Object.keys(paramsInfo).length!==0">
    <table
      v-for="(table,tableIndex) in paramsInfo.tables"
      class="detail-size">
      <tbody>
      <tr v-for="(itemTr,indexTr) in table">
        <td v-for="(itemTh,idnexTh) in itemTr">{{itemTh}}</td>
      </tr>
      </tbody>
    </table>
    <table class="detail-product">
      <thead>
      <tr v-for="(itemSet,indexSet) in paramsInfo.set">
        <td class="detail-product-title">{{itemSet.key}}</td>
        <td>{{itemSet.value}}</td>
      </tr>
      </thead>
    </table>
    <div class="disclaimer">
      <p>{{paramsInfo.disclaimer}}</p>
    </div>
    <div class="detail-img">
      <img v-if="paramsInfo.image.length!==0" v-for="(itemImg,indexImg) in paramsInfo.image" :src="itemImg" alt="">
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailParamsInfo",
  props: {
    paramsInfo: {
      type:Object,
      default() {
        return {};
      }
    }
  }
}
</script>

<style scoped>
#detail-params-info {
  margin-top: 10px;
  text-align: center;
}
.detail-size, .detail-product {
  width: 100%;
  border-collapse: collapse;
}
.detail-product {
  margin-top: 8px;
}
th,td {
  border: 1px solid #000;
  background-color: #eee;
  color: #FF8E96;
  font-size: 14px;
  height: 25px;
}
.disclaimer {
  text-align: center;
  font-size: 14px;
  color: #000;
  width: 100%;
  border: 3px dotted #ccc;

}
.detail-product-title {
  width: 50px;
  padding: 0 5px;
}
</style>
