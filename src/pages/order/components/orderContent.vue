<template>
    <div class="order-content">
        <ul class="order-container">
            <li class="order-detail"  v-for="(item,index) of goods" :key='index'>
                <router-link tag='div' to='/orderDetail' class="order-num">
                    <span class="number">{{item.order}}</span>
                    <span class="deliver">{{item.deliver}}</span>
                </router-link>
                <div class="goods-detail">
                    <img :src="item.url" alt="sorry" class="photo">
                    <div class="goods-price">
                        <span class="name">{{item.title}}</span>
                        <span class="money">{{item.money}}</span>
                    </div>
                    <div class="goods-count">
                        <p class="sleep">{{item.sleep}}</p>
                        <p class="sleep amount">{{item.amount}}</p>
                    </div>
                    <div class="total">
                        <span class="c-total">{{item.ctotal}}</span> 
                        <span class="e-total">{{item.etotal}}</span> 
                    </div>
                    <div class="btns">
                        <router-link tag='button' to='/lookLogistic' class="see">{{item.see}}</router-link>
                        <router-link tag='button' to='/evaluate' class="see confirm">{{item.confirm}}</router-link>
                    </div>
                </div>
            </li>
        </ul>
    </div>
</template>
<script>
import goods1 from "@/assets/my/goods1.png"
import goods2 from "@/assets/my/goods2.png"
import goods3 from "@/assets/my/goods3.png"
export default {
    props:{
        goods:{
            type:Array
        }
    },
    data() {
        return {
        }
    },
    created() {
    }
}
</script>
<style scoped lang='styl'>
.order-content{
    width: 100%;
    height: 100%;
    .order-container{
        position: absolute;
        left: 21px;
        top: 104px;
        /* transform:translateY(-15%); */
        width: 335px;
        font-size: 14px;
        color: #494949;
        background-color:#f4f4f4;
        border-radius: 4px;
        .order-detail{
            position: relative;
            width: 100%;
            height: 186px;
            padding:0 9px;
            padding-top: 16px;
            margin-top: 20px;
            box-sizing: border-box;
            background-color: #fff;
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
    }
}
</style>