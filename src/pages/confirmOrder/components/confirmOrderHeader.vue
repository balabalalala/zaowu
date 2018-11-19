<template>
    <div class="detail-header">
        <div class="header-content">
            <div class="header-title">
                <div class="return" @click="goback()"><img src="@/assets/home/return.png" alt=""></div>
                <p class="title">确认订单</p>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
        }
    },
    components: {

    },
    methods: {
        goback() {
            this.$router.go(-1);
        },
    }
}
</script>
<style scoped lang='styl'>
.detail-header {
    width: 100%;
    height: 56px;
    .header-content {
        position: fixed;
        left: 0;
        top: 0;
        width: 100%;
        height: 56px;
        line-height: 40px;
        background-color: #f9f9f9;
        z-index: 5;
        .header-title {
            position: absolute;
            left: 0;
            top: 0;
            width: 100%;
            height: 100%;
            .return {
                position: absolute;
                left: 16px;
                top: 14px;
                width: 20px;
                height: 20px;
            }
            .title {
                padding-top: 13px;
                font-size: 18px;
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
            .share {
                position: absolute;
                right: 62px;
                top: 13px;
            }
        }
    }
}
</style>