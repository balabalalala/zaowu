<template>
    <div class="security-container">
        <div class="security-header">
            <a href="javascript:;" class="search" @click="$router.go(-1);"><img src="@/assets/home/return.png" alt=""></a>
            <p class="title">个人资料</p>
        </div>
        <div class="security-content">
            <ul class="items">
                <!--v-for循环动态添加下拉列表的数据 :to跳转子页面-->
                <router-link tag='li' to='/personalData'>
                    <p class="title">姓名</p>
                    <img src="@/assets/home/arrow.png" alt="sorry" class="arrow">
                    <span class="alter"><img src="@/assets/my/personal.png" alt="sorry" class="personal"></span>
                </router-link>
                <router-link tag='li' to='/kind'>
                    <p class="title">昵称</p>
                    <img src="@/assets/home/arrow.png" alt="sorry" class="arrow">
                    <span class="alter">小仙女</span>
                </router-link>
                <router-link tag='li' to='/kind'>
                    <p class="title">生日</p>
                    <img src="@/assets/home/arrow.png" alt="sorry" class="arrow">
                    <span class="alter">1995-12-7</span>
                </router-link>
                <router-link tag='li' to='/kind'>
                    <p class="title">性别</p>
                    <img src="@/assets/home/arrow.png" alt="sorry" class="arrow">
                    <span class="alter">女</span>
                </router-link>
            </ul>
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
.security-container {
    width: 100%;
    height: 100%;
    .security-header {
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
    .security-content {
        position: relative;
        .items {
            width: 100%;
            /*padding-bottom: 20px;*/
            li {
                font-family: '微软雅黑';
                width: 100%;
                height: 47px;
                line-height: 40px;
                padding-top: 5px;
                box-sizing: border-box;
                /*padding-bottom: 6px;*/
                border-bottom: 1px solid #d8d6d6;
                .title {
                    float: left;
                    font-size: 16px;
                    color: #494949;
                    margin-left: 16px;
                    text-align: center;
                }
                .alter {
                    float: right;
                    font-size: 14px;
                    color: #999999;
                    text-align: center;
                    margin-right: 10px;
                    .personal{
                        margin-top: -10px;
                    }
                }
                .arrow {
                    float: right;
                    margin-right: 17px;
                    transform: translateY(50%);
                }
            }
            li:nth-child(1){
                height: 69px;
                padding-top: 13px;
            }
        }
    }
}
</style>