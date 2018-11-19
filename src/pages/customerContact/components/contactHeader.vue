<template>
    <div class="contact-container">
        <div class="contact-header">
            <span class="search" >
                <img src="@/assets/home/return.png" @click="$router.go(-1);"  alt="sorry">
            </span>
            <p class="title">造物客服</p>
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
.contact-container {
    width: 100%;
    background: #F5F5F5;
    .contact-header {
        position: fixed;
        left: 0;
        top: 0;
        width: 100%;
        height: 40px;
        padding-top: 11px;
        padding-bottom: 13px;
        line-height: 40px;
        border-bottom: 1px solid #f5f5f5;
        background-color: #fff;
        .search {
            position: absolute;
            left: 16px;
            top: 14px;
            width: 50px;
            height: 100%;
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