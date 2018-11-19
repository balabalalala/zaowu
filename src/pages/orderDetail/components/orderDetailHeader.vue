<template>
    <div class="order-detail-header">
        <div class="header-container">
            <a href="javascript:;" class="arrow" @click="$router.go(-1);"><img src="@/assets/home/return.png" alt=""></a>
            <p class="title">订单详情</p>
            <a href="javascript:;" class="search"><img src="@/assets/home/search.png" alt="sorry"></a>
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
.order-detail-header {
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 44px;
    line-height: 40px;
    padding-bottom: 13px;
    background-color: #f9f9f9;
    z-index: 5;
    .header-container {
        /*position: fixed;
        left: 0;
        top: 0;*/
        padding-top: 11px;
        width: 100%;
        height: 44px;
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
            width: 23px;
            height: 22px;
        }
    }
}
</style>