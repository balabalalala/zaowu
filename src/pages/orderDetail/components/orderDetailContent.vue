<template>
  <div class="order-detail-content">
        <div class="order-infor">
            <div class="deliver">
                <img src="@/assets/home/carry.png" alt="sorry" class="state">
                <span class="descri">订单状态：已发货</span>
            </div>
            <div class="deliver-goods">
                <img src="@/assets/home/777.png" alt="sorry" class="smile">
                <div class="deliver-msg">
                    <p class="peple">河南省郑州市北环公司派件员 李明 正在为您派件</p>
                    <p class="time">
                        <span class="month">09-14</span>
                        <span class="hour">9:30</span>
                    </p>
                </div>
            </div>
            <div class="deliver-adress">
                <img src="@/assets/home/dingwei.png" alt="sorry" class="location">
                <div class="peple-msg">
                    <div class="men">
                        <span class="receiver">收货人：小仙女</span>
                        <span class="numer">13245687654</span>
                    </div>
                    <p class="peple-adress">收货地址：河南省 郑州市 金水区 东风路街道 丰庆博颂路文雅小区</p>
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
    .order-detail-content{
        position: relative;
        margin-left: 16px;
        margin-top: 58px;
        width: 356px;
        /* height: 100%; */
        .order-infor{
            /* position: absolute;
            left: 19px;
            top: 58px; */
            width: 356px;
            height: 205px;
            .deliver{
                width: 356px;
                height: 49px;
                font-size: 16px;
                color: #010E0D;
                line-height: 49px;
                /*padding-left: 19px;*/
                border-bottom: 1px solid #e5e5e5;
                .state{
                    margin-right: 8px;
                }
            }
            .deliver-goods{
                width: 356px;
                height: 61px;
                padding-top: 18px;
                /*padding-left: 19px;*/
                box-sizing: border-box;
                border-bottom: 1px solid #e5e5e5;
                .smile{
                    margin-right: 8px;
                }
                .deliver-msg{
                    margin-top: -28px;
                    margin-left: 28px;
                    line-height: 20px;
                    .peple{
                        font-size: 14px;
                        color: #1C4B47;
                    }
                    .time{
                        font-size: 12px;
                        color: #999999;
                        .month{
                            margin-right: 8px;
                        }
                    }
                }
            }
            .deliver-adress{
                width: 356px;
                height: 94px;
                /*padding-left: 19px;*/
                .location{
                    margin-top: 16px;
                }
                .peple-msg{
                    margin-top: -28px;
                    margin-left: 28px;
                    line-height: 20px;
                    font-size: 14px;
                    color: #494949;
                    .numer{
                        float: right;
                        margin-right: 37px;
                    }
                    .peple-adress{
                        width: 313px;
                    }
                }
            }
        }
        /*.order-detail{
            position: absolute;
            left: 19px;
            top: 50%;
            transform:translateY(-50%);
            width: 335px;
            height: 186px;
            padding:0 9px;
            padding-top: 16px;
            margin-top: 16px;
            box-sizing: border-box;
            background-color: #f9f9f9;
            .order-num{
                width: 100%;
                height: 20px;
                font-size: 14px;
                color: #494949;
                line-height:20px;
                /*text-align: center;*/
                /*.num{
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
            }*/
        /*}*/
        /*.money-detail{
            position: absolute;
            left: 19px;
            top: 58%;
            transform:translateY(100%);
            /*padding-left: 19px;*/
            /*width: 100%;
            height: 82px;
            border-bottom: 1px solid #e5e5e5;
            p{
                font-size: 16px;
                color: #494949;
                line-height:24px;
                .right{
                    float: right;
                    margin-right: 38px;
                }
            }
            .real-pay{
                font-size: 16px;
                .real-money{
                    color: #1C4B47;
                }
            } */
        /*}*/
        /*.order-msg{
            position: absolute;
            left: 19px;
            top: 73%;
            transform:translateY(100%);
            width: 375px;
            height: 80px;*/
            /*padding-left: 19px;*/
            /*border-bottom: 1px solid #e5e5e5;
            p{
                font-size: 16px;
                color: #494949;
                line-height:24px;
            }
        }
        .contact-btns{
            width: 100%;
            height: 50px;
            position: absolute;
            left: 0;
            bottom: -30px;
            font-size: 16px;
            color: #494949;
            text-align:center;
            line-height:50px;
            .left-btn{
                display: inline-block;
                float: left;
                width: 49%;
                height: 100%;
                border-right: 1px solid #e5e5e5;
            }
            .right-btn{
                width: 49%;
                 height: 100%;
                float: right;
                
            }        
        }*/
    }
</style>


