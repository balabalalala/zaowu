<template>
  <div class="look-logistic">
      <logistic-header></logistic-header>
      <order-msg></order-msg>
      <express-detail></express-detail>
  </div>
</template>
<script>
import logisticHeader from './components/logisticHeader'
import orderMsg from './components/orderMsg'
import expressDetail from './components/expressDetail'
export default {
  components:{
      logisticHeader,
      orderMsg,
      expressDetail
  }
}
</script>
<style scoped lang='styl'>
    .look-logistic{
        position: absolute;
        left: 0;
        top: 0;
        bottom: -150px;
        right: 0;
    }
</style>


