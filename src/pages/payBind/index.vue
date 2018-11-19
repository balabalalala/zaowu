<template>
  <div class="pay-bind">
    <pay-header></pay-header>
    <pay-content></pay-content>
  </div>
</template>
<script>
import payHeader from './components/payHeader'
import payContent from './components/payContent'
export default {
  components:{
      payHeader,
      payContent,
  },
}
</script>
<style scoped lang='styl'>
 .pay-bind{
   position: absolute;
   left: 0;
   top: 0;
   right:0 ;
   bottom: 0;
   width: 100%;
   height: 100%;
 }
</style>


