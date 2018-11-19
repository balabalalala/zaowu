<template>
    <div class="confirm-group">
        <div class="confirm-coupon">
            <router-link tag='div' to='/coupon' class="word">
                <span class="collect">优惠券</span>
                <img src="@/assets/home/arrow.png" alt="sorry" class="arrow">
            </router-link>
        </div>
        <div class="confirm-coupon">
            <div class="remark word">
                <span class="collect">备注</span>
                <span class="select">选填</span>
            </div>
        </div>
        <div class="goods-money">
            <p class="all">
                <span class="goods-word">商品总额</span>
                <span class="money">¥438</span>
            </p>
            <p class="all">
                <span class="goods-word">运费</span>
                <span class="money">¥10.0</span>
            </p>
        </div>
        <p class="actual">
            <span class="sum">实付金额</span>
            <span class="sum-money">¥448</span>
        </p>
    </div>
</template>
<script>
export default {
  
}
</script>
<style scoped lang='styl'>
    .confirm-group{
        width: 100%;
        .confirm-coupon{
            width: 100%;
            height: 100%;
             .word{
                width: 330px;
                height: 22px;
                margin-top:25px;
                margin-left: 18px;
                padding-bottom: 18px;
                border-bottom: 1px solid #e5e5e5;
                .collect{
                    font-size: 16px;
                    color: #494949;
                }
                .arrow{
                    float: right;
                    margin-right:-4px;
                }
                .select{
                    font-size: 14px;
                    color: #494949;
                    margin-left:120px;
                }
            }
            .remark{
                width: 100%;
                margin-left: 0;
                border-bottom: 5px solid #f9f9f9;
                .collect{
                    margin-left: 18px;
                }
            }
        }
        .goods-money{
            width: 330px;
            height: 58px;
            margin: 0 auto;
            margin-top: 18px;
            border-bottom:1px solid #e5e5e5;
            .all{
                font-size: 16px;
                color: #494949;
                line-height: 28px;
                .money{
                    float: right;
                }
            }
        }
        .actual{
            width: 330px;
            height: 22px;
            margin:0 auto;
            margin-top: 14px;
            font-size: 16px;
            color: #000000;
            .sum{
                float: right;
                padding-right:60px;
            }
            .sum-money{
                float: right;
                color: #1C4B47;
                margin-right:-123px;
            }
        }
    }
</style>

