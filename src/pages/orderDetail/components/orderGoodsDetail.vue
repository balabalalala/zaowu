<template>
  <div class="order-detail">
        <router-link tag='div' to='/orderDetail' class="order-num">
            <span class="number">订单编号：2217896</span>
            <span class="deliver">已发货</span>
        </router-link>
        <div class="goods-detail">
            <img src="@/assets/my/goods1.png" alt="sorry" class="photo">
            <div class="goods-price">
                <span class="name">ESSENCE</span>
                <span class="money">¥219</span>
            </div>
            <div class="goods-count">
                <p class="sleep">女士Cozy圆领吊带性感睡衣</p>
                <p class="sleep amount">X 2</p>
            </div>
            <div class="total">
                <span class="c-total">合计：</span> 
                <span class="e-total">¥438</span> 
            </div>
            <div class="btns">
                <button class="see">查看物流</button>
                <button class="see confirm">确认收货</button>
            </div>
        </div>
  </div>
</template>
<script>
export default {
  
}
</script>
<style scoped lang='styl'>
    .order-detail{
            /* position: absolute;
            left: 19px;
            top: 50%;
            transform:translateY(-50%); */
            width: 335px;
            height: 186px;
            padding:0 9px;
            margin-left: 19px;
            padding-top: 16px;
            margin-top: 262px;
            box-sizing: border-box;
            background-color: #f9f9f9;
            .order-num{
                width: 100%;
                height: 20px;
                font-size: 14px;
                color: #494949;
                line-height:20px;
                /*text-align: center;*/
                .num{
                    float: left;
                    width: 126px;
                    height: 100%;
                }
                .deliver{
                    float: right;
                    width: 42px;
                    height: 100%;
                    color: #034C46;
                    font-weight: bold;
                }
            }
            .goods-detail{
                position: relative;
                width: 100%;
                height: 100%;
                margin-top: 11px;
                .photo{
                    float: left;
                    width: 77px;
                    height: 76px;
                }
                .goods-price{
                    width: 100%;
                    height: 20px;
                    .name{
                        float: left;
                        margin-left:10px;
                        width: 65px;
                        height: 20px;
                    }
                    .money{
                        float: right;
                    }
                }
                .goods-count{
                    .sleep{
                        margin-left:10px;
                        float: left;
                    }
                    .amount{
                        float: right;
                        font-size: 12px;
                    }
                }
                .total{
                    float: right;
                    color: #1F1F1F;
                    line-height: 20px;
                    margin-top: 40px;
                    margin-right: 9px;
                    .e-total{
                        color: #034C46;
                        font-weight:bold;
                    }
                }
                .btns{
                    position: absolute;
                    right: 8px;
                    bottom: 45px;
                    font-size: 12px;
                    height: 28px;
                    line-height: 28px;
                    text-align: center;
                    .see{
                        width: 78px;
                        height: 100%;
                        color: #494949;
                        border: 1px solid #999999;
                        border-radius: 100px;
                        background:#fff;
                    }
                    .confirm{
                        color: #034C46;
                    }
                }
            }
        }
</style>


