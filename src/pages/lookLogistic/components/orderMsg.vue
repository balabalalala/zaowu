<template>
    <div class="order-msg">
        <div class="order-container">
            <div class="goods-order">
                <img src="@/assets/my/goods3.png" alt="sorry" class="photo">
            </div>
            <div class="express">
                <p class="order-word">订单正在为您派送中</p>
                <div class="express-all">
                    <div class="lines">
                        <span class="green-line"></span>
                    </div>
                    <p class="expre-num">圆通速递：12336799788938937</p>
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
    .order-container{
        position: relative;
        width: 100%;
        /*height: 100%;*/
        margin-top: 75px;
        .goods-order{
            position: absolute;
            left: 19px;
            top: 0;
            width: 335px;
            height: 65px;
            z-index:2;
            .photo{
                margin-left: 19px;
            }
        }
        .express{
            position: absolute;
            left: 19px;
            top: 50%;
            transform: translateY(20%);
            width: 335px;
            height: 140px;
            background: #fbfbfb;
            box-shadow: 0 1px 8px 0 rgba(232,232,232,0.50);
            border-radius: 4px;
            .order-word{
                position: absolute;
                left: 107px;
                top: 6px;
                font-size: 16px;
                color: #494949;
            }
            .express-all{
                position: absolute;
                left: 0;
                bottom: 0;
                width: 100%;
                height: 105px;
                background: #FFFFFF;
                box-shadow: 0 -1px 8px 0 rgba(232,232,232,0.50);
                border-radius: 4px;
                .lines{
                    position: absolute;
                    left: 19px;
                    top: 26px;
                    width: 302px;
                    height: 6px;
                    background: #F2F2F2;
                    border-radius: 4px;
                    .green-line{
                        position: absolute;
                        left: 0;
                        top: 0;
                        width: 250px;
                        height: 100%;
                        z-index: 2;
                        border-radius: 4px;
                        background-image: linear-gradient(-90deg, #43B4AA 0%, #2F928A 60%, #1C4B47 100%);
                    }
                }
                .expre-num{
                    position: absolute;
                    left: 21px;
                    bottom: 27px;
                    font-size: 14px;
                    color: #494949;
                }
            }
        }
    }
</style>


