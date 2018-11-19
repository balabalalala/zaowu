<template>
    <div class="content">
        <img class="bg1" src="@/assets/home/bg1.png" alt="">
        <ul class="items">
            <li>
                <img src="@/assets/home/candle.png" alt="">
                <p class="title">精油香氛</p>
                <p class="price">¥344</p>
            </li>
            <li>
                <img src="@/assets/home/fish.png" alt="">
                <p class="title">山居猎奇</p>
                <p class="price">¥344</p>
            </li>
            <li>
                <img src="@/assets/home/plant.png" alt="">
                <p class="title">北欧国度</p>
                <p class="price">¥372</p>
            </li>
            <li>
                <img src="@/assets/home/cup.png" alt="">
                <p class="title">卡洛卡陶瓷碗盘</p>
                <p class="price">¥388</p>
            </li>
        </ul>
        <xp-title :time1=time2 :stitle=stitle2></xp-title>
        <ul class="items pictures">
            <li>
                <img src="@/assets/home/picture1.png" alt="">
            </li>
            <li>
                <img src="@/assets/home/picture2.png" alt="">
            </li>
            <li>
                <img src="@/assets/home/picture3.png" alt="">
            </li>
            <li>
                <img src="@/assets/home/picture4.png" alt="">
            </li>
            <li>
                <img src="@/assets/home/picture5.png" alt="">
            </li>
            <li>
                <img src="@/assets/home/picture6.png" alt="">
            </li>
            <li>
                <img src="@/assets/home/picture7.png" alt="">
            </li>
            <li>
                <img src="@/assets/home/picture8.png" alt="">
            </li>
        </ul>
    </div>
</template>
<script>
    import XpTitle from './title'
    export default {
        components:{
            XpTitle
        },
        data(){
            return {
                time2: '-MON 9.17-',
                stitle2: '周一新品抢鲜放送',
            }
        }
    }
</script>
<style scoped lang='styl'>
    .content{
        width: 100%;
        .bg1{
            margin: 0 auto;
        }
        .items{
            width: 100%;
            height: 112px;
            margin-top: 21px;
            li{
                float: left;
                height: 100%;
                padding:0 6px;
                img{
                    width: 79px;
                    height: 79px;
                }
                p{
                    padding-top: 5px;
                    font-size: 10px;
                    color: #494949;
                    text-align: center;
                }
            }
        }
        .pictures{
            height: 79px;
            margin-top: 5px;
            margin-left: 8px;
            li{
                margin-bottom:11px;
            }
        }
    }
</style>