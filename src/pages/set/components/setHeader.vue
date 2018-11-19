<template>
    <div class="set-container">
        <div class="set-header">
            <a href="javascript:;" class="search" @click="$router.go(-1);"><img src="@/assets/home/return.png" alt=""></a>
            <p class="title">通用设置</p>
        </div>
        <div class="set-content">
            <ul class="items">
                <!--v-for循环动态添加下拉列表的数据 :to跳转子页面-->
                <router-link tag='li' to='/set'>
                <p class="title">新消息提醒</p>
                <div class="slip" :class="{ active: isActive }" @click="move">
                    <span class="small-slip" :class="{ active: smallActive}" ></span>
                </div>
                </router-link>
                <router-link tag='li' to='/set'>
                <p class="title">清除图片缓存</p>
                <img src="@/assets/home/arrow.png" alt="sorry" class="arrow">
                </router-link>
                <router-link tag='li' to='/set'>
                <p class="title">反馈与建议</p>
                <img src="@/assets/home/arrow.png" alt="sorry" class="arrow">
                </router-link>
            </ul>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            isActive: true,
            smallActive:true,
        }
    },
    methods:{
        move(){
            this.isActive= !this.isActive;
            this.smallActive = !this.smallActive;
        },
    }
}
</script>
<style scoped lang='styl'>
.set-container{
    width: 100%;
    height: 100%;
    .set-header{
        /*position: absolute;
        left: 0;
        top: 0;*/
        width: 100%;
        height: 40px;
        padding-top: 11px;
        padding-bottom: 13px;
        line-height: 40px;
        border-bottom: 1px solid #f5f5f5;
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
    .set-content{
    .items {
        width: 100%;
        /*padding-bottom: 20px;*/
        li{
            width: 100%;
            height: 57px;
            line-height: 40px;
            padding-top: 11px;
            box-sizing: border-box;
            padding-bottom: 6px;
            border-bottom: 1px solid #d8d6d6;
                .title {
                    float: left;
                    font-size: 16px;
                    color: #494949;
                    margin-left:16px;
                    text-align: center;
                }
                .slip{
                    float:right;
                    margin-right: 17px;
                    width: 40px;
                    height: 20px;
                    background: #999;
                    margin-top: 10px;
                    border-radius: 8px;
                    .small-slip{
                        float: right;
                        width: 20px;
                        height: 20px;
                        border-radius: 50%;
                        background: #FFFFFF;
                        transform: translateX(-19px);
                        transition:all .2s linear;
                        box-shadow: 0 2px 5px 0 rgba(162,162,162,0.50);
                    }
                }
                .slip.active{
                    background-color: #1C4B47;
                }
                .small-slip.active{
                    transform: translateX(0);
                }
                .arrow {
                    font-size: 20px;
                    margin-right: 17px;
                    transform: translateY(50%);
                    float: right;
                }
            }
       }
    }
}
</style>