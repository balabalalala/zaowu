<template>
  <div class="customer-service">
    <service-header></service-header>
    <service-type></service-type>
    <problem-descri></problem-descri>
  </div>
</template>
<script>
import serviceHeader from './components/serviceHeader'
import serviceType from './components/serviceType'
import problemDescri from './components/problemDescri'
export default {
  components:{
        serviceHeader,
        serviceType,
        problemDescri
  },
  data(){
        return{

        }
  },
}
</script>
<style scoped lang='styl'>
    .customer-service{
        position: absolute;
        left: 0;
        top: 0;
        bottom: 0;
        right: 0;
        width: 100%;
        /*height: 100%;*/
    }
</style>


