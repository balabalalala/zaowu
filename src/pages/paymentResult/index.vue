<template>
  <div class="payment-result">
      <pay-header></pay-header>
      <pay-content></pay-content>
  </div>
</template>
<script>
import payHeader from '@/components/ArrowHeader'
import payContent from './components/paymentContent'
export default {
  components:{
      payHeader,
      payContent
  }
}
</script>
<style scoped lang='styl'>

</style>


