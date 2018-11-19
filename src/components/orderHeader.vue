<template>
    <div class="order-header">
        <div class="header-container">
            <a href="javascript:;" class="arrow" @click="$router.go(-1);"><img src="@/assets/home/return.png" alt=""></a>
            <p class="title">我的订单</p>
            <router-link class="search" to='/loading'><img src="@/assets/home/search.png" alt="sorry"></router-link>
        </div>
        <div class="order-list">
            <ul class="group">
                <router-link class="item" tag='li' to='/order'>全部</router-link>
                <router-link class="item" tag='li' to='/loading'>待付款</router-link>
                <router-link class="item" tag='li' to='/loading'>待收货</router-link>
                <router-link class="item" tag='li' to='/loading'>已完成</router-link>
            </ul>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
        }
    },
    created() {
    }
}
</script>
<style scoped lang='styl'>
.order-header {
    position: fixed;
    left: 0;
    top: 0;
    z-index: 6;
    width: 100%;
    height: 113px;
    background-color: #f9f9f9;
    .header-container {
        position: fixed;
        left: 0;
        top: 0;
        width: 100%;
        height: 40px;
        padding-top: 11px;
        padding-bottom: 13px;
        line-height: 40px;
        z-index: 5;
        .arrow {
            position: absolute;
            left: 16px;
            top: 14px;
            width: 20px;
            height: 20px;
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
        }
        .search {
            position: absolute;
            right: 16px;
            top: 13px;
            img{
                width: 20px;
                height: 22px;
            }
        }
    }
    .order-list {
        position: absolute;
        left: 0;
        top: 64px;
        width: 100%;
        height: 40px;
        margin-top: 5px;
        .item {
            float: left;
            width: 25%;
            height: 100%;
            font-size: 16px;
            /*color: #1C4B47;*/
            text-align: center;
            line-height: 40px;
        }
        li:nth-child(1) {
            color: #1C4B47;
        }
    }
}
</style>