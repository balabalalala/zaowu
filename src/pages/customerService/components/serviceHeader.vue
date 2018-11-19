<template>
    <div class="service-container">
        <div class="service-header">
            <a href="javascript:;" class="search" @click="$router.go(-1);"><img src="@/assets/home/return.png" alt=""></a>
            <p class="title">申请售后</p>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
           
        }
    }
}
</script>
<style scoped lang='styl'>
.service-container {
    width: 100%;
    height: 100%;
    .service-header {
        position: fixed;
        left: 0;
        top: 0;
        width: 100%;
        height: 44px;
        padding-top: 9px;
        padding-bottom: 5px;
        line-height: 44px;
        border-bottom: 1px solid #f5f5f5;
        background-color: #f9f9f9;
        z-index: 6;
        .search {
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
    }
}
</style>