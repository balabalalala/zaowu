<template>
    <div class="confirm-pay">
        <div class="confirm-pay-content">
            <div class="container">
                <div class="wx-pay">
                    <div class="wx-give">
                        <img src="@/assets/home/wx.png" alt="sorry" class="wx">
                        <div class="wx-word">
                            <p class="b-wx">微信支付</p>
                            <p class="w-wx">微信安全支付</p>
                        </div>
                    </div>
                    <input type="checkbox" class="btn">
                </div>
                <div class="zfb wx-pay">
                    <div class="wx-give">
                        <img src="@/assets/home/zfb.png" alt="sorry" class="wx">
                        <div class="wx-word">
                            <p class="b-wx">支付宝支付</p>
                            <p class="w-wx">支付宝安全支付</p>
                        </div>
                    </div>
                    <input type="checkbox" class="btn">
                </div>
                <router-link tag='p' to='/paymentResult' class="pay-money">
                    <span class="pay-word">立即支付  ¥</span>
                    <span class="num">448</span>
                </router-link>
            </div>
        </div>
    </div>
</template>
<script>
export default {
  
}
</script>
<style scoped lang='styl'>
    .confirm-pay{
        width: 100%;
        .confirm-pay-content{
            width: 335px;
            height: 130px;
            /*background:pink;*/
            margin:0 auto;
            .container{
                width: 100%;
                height: 100%;
                position: relative;
                margin-top: 50px;
                border: 1px solid #e5e5e5;
                border-radius:4px;
                .wx-pay{
                    width: 100%;
                    height: 50%;
                    border-bottom:1px solid #e5e5e5;
                    .wx-give{
                        position: absolute;
                        left: 6px;
                        top: 13px;
                        .wx{
                            margin-top: 8px;
                        }
                        .wx-word{
                            position: absolute;
                            left: 36px;
                            top: 0px;
                            width: 100px;
                            font-size: 14px;
                            color: #010E0D;
                            line-height: 20px;
                            .w-wx{
                                font-size: 12px;
                                color: #999999;
                            }
                        }
                    }
                    .btn{
                        position: absolute;
                        right: 9px;
                        top: 26px;
                        width: 18px;
                        height: 18px;
                        /*border-radius: 50%;
                        background: #1C4B47;*/
                    }
                }
                .zfb{
                    position: absolute;
                    left: 0;
                    top: 50%;
                }
                .pay-money{
                    position: absolute;
                    left: 50%;
                    top: 100%;
                    transform: translateX(-50%);
                    width: 185px;
                    height: 44px;
                    background: #1C4B47;
                    border: 1px solid #979797;
                    border-radius: 4px;
                    font-size: 14px;
                    color: #FFFFFF;
                    line-height: 44px;
                    text-align: center;
                    margin-top: 60px;
                    .num{
                        font-size: 24px;
                    }
                }
            }
        }
    }
</style>


