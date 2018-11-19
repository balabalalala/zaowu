<template>
  <div class="set">
      <div class="set-content">
          <set-header></set-header>
      </div>
  </div>
</template>
<script>
    import setHeader from './components/setHeader'
    export default {
        components:{
            setHeader,
        },
        data(){
            return{
                
            }
        },
    }
</script>
<style scoped lang='styl'>
    .set{
        width: 100%;
        height: 100%;
        .set-content{
            position: relative;
            width: 100%;
            height: 100%;
        }
    }
</style>


