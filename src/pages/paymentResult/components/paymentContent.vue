<template>
  <div class="payment-content">
      <div class="container" v-show="false">
          <div class="pay-success">
              <img src="@/assets/home/correct.png" alt="sorry" class="correct">
              <p class="succ-word">恭喜您支付成功</p>
          </div>
          <div class="btns">
              <div class="com-button see-order">查看我的订单</div>
              <router-link tag='div' to='/' class="com-button return">返回首页</router-link>
          </div>
      </div>
      <div class="container">
          <div class="pay-success">
              <img src="@/assets/home/error.png" alt="sorry" class="correct">
              <p class="succ-word">抱歉您支付失败了</p>
          </div>
          <div class="btns">
              <div class="com-button see-order">重新支付</div>
              <router-link tag='div' to='/' class="com-button return">返回首页</router-link>
          </div>
      </div>
  </div>
</template>
<script>
export default {
  
}
</script>
<style scoprd lang='styl'>
    .payment-content{
        width: 100%;
        height: 100%;
        .container{
            position: absolute;
            left: 50%;
            top: 15%;
            transform:translateX(-50%) translateY(45%);
            width: 100%;
            .pay-success{
                width: 100px;
                height: 147px;
                font-size: 20px;
                color: #494949;
                text-align: right;
                margin:0 auto;
                .correct{
                    box-sizing: border-box;
                    padding-bottom:32px;
                }
                .succ-word{
                    width: 160px;
                    height: 28px;
                    margin-left: -15px;

                }
            }
            .btns{
                position: absolute;
                left: 50%;
                top: 50%;
                transform:translateX(-50%) translateY(50%);
                width: 229px;
                height: 135px;
                box-sizing: border-box;
                padding-top: 57px;
                .com-button{
                    width: 100%;
                    height: 57px;
                    font-size: 20px;
                    color: #FFFFFF;
                    line-height:57px;
                    text-align:center;
                    background: #1C4B47;
                    border-radius: 4px;
                }
                .return{
                    background: #fff;
                    color: #818181;
                    border: 1px solid #E5E5E5;
                    margin-top: 21px;
                }
            }
        }
    }
</style>


