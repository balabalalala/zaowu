<template>
  <div class="confirm-order">
    <confirm-header></confirm-header>
    <confirm-adress></confirm-adress>
    <confirm-group></confirm-group>
    <confirm-pay></confirm-pay>
  </div>
</template>
<script>
import confirmHeader from './components/confirmOrderHeader'
import confirmAdress from './components/addAdress'
import confirmGroup from './components/confirmGroup'
import confirmPay from './components/confirmPay'
export default {
    components:{
        confirmHeader,
        confirmAdress,
        confirmGroup,
        confirmPay,
    },
}
</script>
<style scoped lang='styl'>
    .confirm-order{
        position: absolute;
        left: 0;
        top: 0;
        right: 0;
        bottom: -140px;
    }
</style>


