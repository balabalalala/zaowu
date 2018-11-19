<template>
    <div class="adress">
         <!--收货地址-->
        <ul class="group">
            <router-link class="adress-list" tag='li' to='/ReceivingAddress'>
                <img class="img" src="@/assets/home/adress.png" alt="sorry">
                <p class="word">收货地址</p>
                <img class="arrow" src="@/assets/home/arrow.png" alt="sorry">
            </router-link>
            <router-link class="adress-list" tag='li' to='/coupon'>
                <img class="img" src="@/assets/home/paper.png" alt="sorry">
                <p class="word">我的优惠券</p>
                <img class="arrow" src="@/assets/home/arrow.png" alt="sorry">
            </router-link>
            <router-link class="adress-list" tag='li' to='/security'>
                <img class="img" src="@/assets/home/safy.png" alt="sorry">
                <p class="word">账户与安全</p>
                <img class="arrow" src="@/assets/home/arrow.png" alt="sorry">
            </router-link>
            <router-link class="adress-list" tag='li' to='/customerContact'>
                <img class="img" src="@/assets/home/query.png" alt="sorry">
                <p class="word">联系客服</p>
                <img class="arrow" src="@/assets/home/arrow.png" alt="sorry">
            </router-link>
            <router-link class="adress-list" tag='li' to='/about'>
                <img class="img" src="@/assets/home/about.png" alt="sorry">
                <p class="word">关于造物</p>
                <img class="arrow" src="@/assets/home/arrow.png" alt="sorry">
            </router-link>
        </ul>
    </div>
</template>
<script>
export default {
  
}
</script>
<style scoped lang='styl'>
    .adress{
        width: 100%;
        height: 280px;
        .group{
            position: absolute;
            left: 0;
            top: 460px;
            width: 100%;
            height: 275px;
            background-color:#ffffff;
            .adress-list{
                position: relative;
                width: 100%;
                height: 54px;
                border-bottom: 1px solid #e5e5e5;
                .img{
                    position: absolute;
                    left: 20px;
                    top: 18px;
                    width: 20px;
                    height: 20px;
                }
                .word{
                    position: absolute;
                    left: 50px;
                    top: 22px;
                    font-size: 16px;
                    color: #494949;
                    text-align: center;
                }
                .arrow{
                    position: absolute;
                    right: 19px;
                    top: 18px;
                    }
            }
        }
    }
</style>


