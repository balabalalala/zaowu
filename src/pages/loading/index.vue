<template>
  <div class="loading">
      <div class="loading-container">
        <arrow-header class="loading-arrow"></arrow-header>
        <div class="loading-content">
            <img src="@/assets/home/loading1.png" alt="sorry" class="loading-photo">
            <p class="loading-word">网络出错,请点击页面重试</p>
        </div>
      </div>
  </div>
</template>
<script>
import ArrowHeader from '@/components/ArrowHeader'
export default {
  components:{
      ArrowHeader
  }
}
</script>
<style scoped lang='styl'>
    .loading{
        position: absolute;
        left: 0;
        top: 0;
        right: 0;
        bottom: 0;
        width: 100%;
        .loading-container{
            width: 100%;
            height: 100%;
            .loading-arrow{
                width: 26px;
                height: 26px;
            }
            .loading-content{
                position: absolute;
                left: 68px;
                top:191px;
                /*transform: translateY(-50%);*/
                width: 241px;
                height: 201px;
                font-size: 14px;
                color: #494949;
                text-align: center; 
            }
        }
    }
</style>


