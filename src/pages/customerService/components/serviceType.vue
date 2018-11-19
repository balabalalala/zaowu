<template>
    <div class="service-content">
    <div class="service-type">
            <div class="exchange">
                <p class="type-title">服务类型</p>
                <div class="exchange-item">
                    <span>换货</span>
                    <span>退货</span>
                    <span>仅退款</span>
                </div>
            </div>
            <div class="goods-detail">
                <img src="@/assets/my/goods1.png" alt="sorry" class="goods">
                <div class="goods-intro">
                    <p class="etitle">ESSENCE</p>
                    <p class="ctitle">女士Cozy吊带性感睡衣</p>
                    <p class="price">
                        <span class="money">价格：¥219 </span>
                        <span class="num">数量：x1</span>
                    </p>
                </div>
            </div>
    </div>
    </div>
</template>
<script>
export default {
  
}
</script>
<style scoped lang='styl'>
.service-content{
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    .service-type{
        position: absolute;
        left: 0;
        top: 60px;
        width: 100%;
        height: 100%;
        .exchange{
            width: 375px;
            height: 116px;
            padding-left:20px;
            padding-top:19px;
            box-sizing:border-box;
            border-bottom:1px solid #e5e5e5;
            .type-title{
                font-size: 16px;
                color: #010E0D;
                letter-spacing: 0.19px;
            }
            .exchange-item{
                width: 320px;
                height: 28px;
                font-size: 14px;
                color: #494949;
                letter-spacing: 0.17px;
                margin-top:21px;
                span{
                    display: inline-block;
                    width: 78px;
                    height: 100%;
                    border:1px solid #bbbbbb;
                    border-radius: 4px;
                    text-align: center;
                    line-height:28px;
                    margin-right:25px;
                    padding-bottom:26px;
                    box-sizing:border-box;
                }
            }
        }
        .goods-detail{
            position: relative;
            width: 355px;
            height: 76px;
            padding-left:20px;
            margin-top: 42px;
            padding-bottom: 35px;
            border-bottom:1px solid #e5e5e5;
            .goods-intro{
                position: absolute;
                left: 116px;
                top: 0;
                p{
                    font-size: 14px;
                    color: #494949;
                    letter-spacing: 0.17px;
                    line-height: 26px;
                    .money{
                        margin-right: 12px;
                    }
                }
            }
        }
    }
}
</style>


