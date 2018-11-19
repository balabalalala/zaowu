<template>
  <div class="about">
      <about-content></about-content>
  </div>
</template>
<script>
import aboutContent from './components/aboutContent'
export default {
  components:{
    aboutContent,
  },
  data(){
      return{

      }
  },
}
</script>
<style scoped lang='styl'>
    .about{
        position: absolute;
        left: 0;
        top: 0;
        right: 0;
        bottom: 0;
        background-color: #f9f9f9;
    }
</style>


