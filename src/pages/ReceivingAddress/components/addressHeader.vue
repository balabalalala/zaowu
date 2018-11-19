<template>
    <div class="address-header">
        <div class="header-container">
            <a href="javascript:;" class="arrow" @click="$router.go(-1);"><img src="@/assets/home/return.png" alt=""></a>
            <p class="title">我的收货地址</p>
            <a href="javascript:;" class="search"><img src="@/assets/home/add.png" alt="sorry"></a>
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
.address-header {
    position: fixed;
    left: 0;
    top: 0;
    z-index: 6;
    width: 100%;
    height: 43px;
    padding-top: 11px;
    padding-bottom: 10px;
    line-height: 40px;
    background-color: #fff;
    border-bottom: 1px solid #E5E5E5;
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
            width: 23px;
            height: 22px;
        }
    }
}
</style>