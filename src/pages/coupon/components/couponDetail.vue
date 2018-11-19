<template>
    <div class="coupon-container">
        <div class="coupon-header">
            <a href="javascript:;" class="search" @click="$router.go(-1);"><img src="@/assets/home/return.png" alt=""></a>
            <p class="title">我的优惠券</p>
        </div>
        <div class="coupon-content">
            <ul class="items">
                <!--v-for循环动态添加下拉列表的数据 :to跳转子页面-->
                <router-link class="paper" tag='li' v-for="item of dataList" :key='item.id' to='/kind'>
                    <img :src="item.url" alt="sorry">
                </router-link>
            </ul>
        </div>
    </div>
</template>
<script>
import coupon1 from "@/assets/my/coupon1.png"
import coupon2 from "@/assets/my/coupon2.png"
import coupon3 from "@/assets/my/coupon3.png"
export default {
    data() {
        return {
            dataList: [
                {
                    id: '0011',
                    url: coupon1
                },
                {
                    id: '0012',
                    url: coupon2
                },
                {
                    id: '0013',
                    url: coupon3
                },
            ]
        }
    }
}
</script>
<style scoped lang='styl'>
.coupon-container {
    width: 100%;
    height: 100%;
    background: #F5F5F5;
    .coupon-header {
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
    .coupon-content {
        width: 100%;
        height: 100%;
        .items {
            position: absolute;
            left: 10px;
            top: 66px;
            .paper {
                margin-top: 13px;
            }
        }
    }
}
</style>