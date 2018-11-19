<template>
    <div class="header">
        <router-link to='/loading' v-if='isSearch' href="javascript:;" class="search"><img src="@/assets/home/search.png" alt="sorry"></router-link>
        <router-link to='/kind' v-else href="javascript:;" class="search"><img src="@/assets/home/return.png" alt=""></router-link>
        <p class="title">ZAOWU 造物</p>
        <router-link to='/loading' href="javascript:;" class="news"><img src="@/assets/home/news.png" alt=""></router-link>
        <router-link to='/shoppingCar' href="javascript:;" class="car"><img src="@/assets/home/car.png" alt=""></router-link>
    </div>
</template>
<script>
export default {
    props:{
        isSearch:{
            default:true
        },
    },
    data() {
        return {
        }
    }
}
</script>
<style scoped lang='styl'>
.header {
    position: fixed;
    left: 0;
    top: 0;
    z-index: 5;
    width: 100%;
    height: 40px;
    padding-top: 11px;
    padding-bottom: 13px;
    line-height: 40px;
    background: #fff;
    .search {
        position: absolute;
        left: 16px;
        top: 14px;
        width: 20px;
        height: 20px;
         img{
            width: 18px;
            height: 18px;
        }
    }
    .title {
        padding-top: 5px;
        font-size: 20px;
        color: #000000;
        text-align: center;
    }
    .news {
        position: absolute;
        right: 58px;
        top: 14px;
        width: 22px;
        height: 22px;
         img{
            width: 22px;
            height: 22px;
        }
    }
    .car {
        position: absolute;
        right: 16px;
        top: 13px;
        width: 23px;
        height: 22px;
        img{
            width: 23px;
            height: 22px;
        }
    }
}
</style>