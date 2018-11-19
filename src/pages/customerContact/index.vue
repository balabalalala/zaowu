<template>
  <div class="customer-contact">
     <contact-header></contact-header>
     <contact-content></contact-content>
  </div>
</template>
<script>
import contactHeader from './components/contactHeader'
import contactContent from './components/contactContent'
export default {
  components:{
    contactHeader,
    contactContent
  },
  data(){
    return{

    }
  },
}
</script>
<style scoped lang='styl'>
    .customer-contact{
        position: absolute;
        left: 0;
        top: 0;
        right: 0;
        bottom: -10px;
        background: #f4f4f4;
    }
</style>


