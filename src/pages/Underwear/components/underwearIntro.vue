<template>
  <div class="underwear-intro">
      <div class="intro-content">
          <div class="intro-msg">
            <p class="ename">{{goodsDetail.board}}</p>
            <p class="cname">女士吊带性感睡衣</p>
            <p class="price">¥{{goodsDetail.price}}</p>
          </div>
      </div>
  </div>
</template>
<script>
export default {
  props: {
        goodsDetail: {
            type:Object
        }
    },
    created(){
        // console.log(this.goodsDetail)
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
                /* top: 50%;
                transform: translateY(-130%); */
                width: 250px;
                height: 100px;
                font-size: 20px;
                color: #FFFFFF;
                text-align: center;
                line-height: 28px;
                .price{
                    font-size: 24px;
                }
            }
        }
    }
</style>


