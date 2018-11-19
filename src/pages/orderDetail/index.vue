<template>
  <div class="order-detail">
      <detail-header></detail-header>
      <detail-content></detail-content>
      <goods-detail></goods-detail>
      <money-detail></money-detail>
      <msg-detail></msg-detail>
  </div>
</template>
<script>
import detailHeader from './components/orderDetailHeader'
import detailContent from './components/orderDetailContent'
import goodsDetail from './components/orderGoodsDetail'
import moneyDetail from './components/orderMoneyDetail'
import msgDetail from './components/orderDetailMsg'
export default {
  components:{
    detailHeader,
    detailContent,
    goodsDetail,
    moneyDetail,
    msgDetail

  },
  data(){
      return{

      }
  },
}
</script>
<style scoped lang='styl'>
    .order-detail{
        width: 100%;
        /* height: 100%; */
        position: absolute;
        left: 0;
        top: 0;
        right: 0;
        bottom: -10px;
    }
</style>


