<template>
    <div class="detail-header">
        <div class="header-content">
            <div class="header-title">
                <div class="return" @click="goback()" ><img src="@/assets/home/return.png" alt=""></div>
                <p class="title">商品详情</p>
                <a href="javascript:;" class="share" @click="openDialog"><img src="@/assets/home/share.png" alt="sorry"></a>
                <router-link to='/shoppingCar' href="javascript:;" class="car"><img src="@/assets/home/car.png" alt="sorry"></router-link>
            </div>
        </div>
    </div>
</template>
<script>
import { mapMutations } from 'vuex'
export default {
    data() {
        return {
        }
    },
    components:{

    },
    methods:{
        goback(){
            this.$router.go(-1);
            this.setNavShow(true);
        },
         ...mapMutations({
            setNavShow: 'setNavShow'
        }),
        openDialog(){
            this.$emit('openDialog')
        },
    }
}
</script>
<style scoped lang='styl'>
.header-content {
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 56px;
    /*padding-top: 11px;*/
    padding-bottom: 13px;
    line-height: 40px;
    background-color: #fff;
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
            /* img{
                width: 20px;
                height: 20px;
            } */
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
}
</style>