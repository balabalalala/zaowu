<template>
    <div class="list">
        <div class="items">
            <router-link class="name" tag='li' to='/order'>
			我的订单
            <img class="arrow" src="@/assets/home/arrow.png" alt="sorry">
			</router-link>
            <div class="detail">
                <ul class="group">
                    <router-link class="category" tag='li' to='/loading'>
                        <img src="@/assets/home/money.png" alt="sorry">
                        <p class="word">待付款</p>
			        </router-link>
                    <router-link class="category" tag='li' to='/loading'>
                        <img src="@/assets/home/car2.png" alt="sorry">
                        <p class="word">待收货</p>
			        </router-link>
                    <router-link class="category" tag='li' to='/loading'>
                        <img src="@/assets/home/done.png" alt="sorry">
                        <p class="word">已完成</p>
			        </router-link>
                    <router-link class="category" tag='li' to='/customerService'>
                        <img src="@/assets/home/after.png" alt="sorry">
                        <p class="word">售后</p>
			        </router-link>
                </ul>
			</div>
        </div>
        <!--下面的我的收藏-->
         <div class="items collect">
            <router-link class="name" tag='li' to='/collection'>
			我的收藏
            <img class="arrow" src="@/assets/home/arrow.png" alt="sorry">
			</router-link>
            <div class="detail">
                <ul class="group">
                    <router-link class="category col-item" tag='li' to='/collection'>
                        <img src="@/assets/home/stone.png" alt="sorry">
                        <p class="word">物品</p>
			        </router-link>
                    <router-link class="category col-item" tag='li' to='/my'>
                        <img src="@/assets/home/pinpai.png" alt="sorry">
                        <p class="word">品牌</p>
			        </router-link>
                    <router-link class="category col-item" tag='li' to='/my'>
                        <img src="@/assets/home/art.png" alt="sorry">
                        <p class="word">文章</p>
			        </router-link>
                </ul>
			</div>
        </div>
    </div>
    
</template>
<script>
    export default {
    
    }
</script>
<style scoped lang='styl'>
    .list{
        width: 336px;
        height: 119px;
        .items{
            position: absolute;
            left: 19px;
            top: 198px;
            width: 336px;
            height: 79px;
            background:#fff;
            border-radius: 5px;
            .name{
                width: 319px;
                height: 37px;
                line-height: 37px;
                padding-left: 15px;
                list-style: none;
                font-size: 16px;
                color: #010E0D;
                border-bottom: 1px solid #e5e5e5;
            }
            .arrow{
                position: absolute;
                right: 19px;
                top: 10px;
            }
            .detail{
                width: 336px;
                height: 79px;
                background: #fff;
                border-radius: 5px;
                .group{
                    width: 100%;
                    height: 100%;
                    .category{
                        float: left;
                        width: 25%;
                        height: 100%;
                        line-height: 45px;
                        text-align: center;
                        img{
                            width: 28px;
                            height: 28px;
                        }
                    }
                    .col-item{
                        width: 33%;
                        img{
                            width: 28px;
                            height: 28px;
                        }
                    }
                    .word{
                        font-size: 14px;
                        color: #494949;
                        text-align: center;
                        line-height: 20px;
                    }
                }
            }
        }
        .collect{
           top:329px; 
        }
        .adress{
            position: absolute;
            left: 0;
            top: 300px;
        }
    }
</style>


