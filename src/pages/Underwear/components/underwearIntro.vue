<template>
  <div class="underwear-intro">
      <div class="intro-content">
          <div class="intro-msg" >
            <p class="ename" >{{goods.brandId}}</p>
            <p class="ename" >{{goods.name}}</p>
            <p class="ename" >￥{{goods.priceOut}}</p>
          </div>
      </div>
  </div>
</template>
<script>
import kindApi from '@/api/mykind'
export default {
    props:['goods'],
    data(){
        return{
        }
    },
    created(){
    }
}
</script>
<style scoped lang='styl'>
    .underwear-intro{
        position: relative;
        width: 100%;
        height: 400px;
        margin-top:-155px;
        background: #A6B4A3;
        .intro-content{
            /* position: absolute;
            left: 0;
            top: 285px; */
            width: 100%;
            height: 400px;
            .intro-msg{
                position: absolute;
                left: 64px;
                top:250px;
                width: 250px;
                height: 100px;
                font-size: 20px;
                color: #FFFFFF;
                text-align: center;
                line-height: 28px;
            }
        }
    }
</style>


