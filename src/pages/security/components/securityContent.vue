<template>
    <div class="security-container">
        <div class="security-header">
            <a href="javascript:;" class="search" @click="$router.go(-1);"><img src="@/assets/home/return.png" alt=""></a>
            <p class="title">账户与安全</p>
        </div>
        <div class="security-content">
            <ul class="items">
                <!--v-for循环动态添加下拉列表的数据 :to跳转子页面-->
                <router-link tag='li' to='/personalData'>
                    <p class="title">个人资料</p>
                    <img src="@/assets/home/arrow.png" alt="sorry" class="arrow">
                </router-link>
                <router-link tag='li' to='/kind'>
                    <p class="title">修改绑定手机</p>
                    <img src="@/assets/home/arrow.png" alt="sorry" class="arrow">
                    <span class="alter">123****8901</span>
                </router-link>
                <router-link tag='li' to='/kind'>
                    <p class="title">设置登录密码</p>
                    <img src="@/assets/home/arrow.png" alt="sorry" class="arrow">
                </router-link>
                <router-link tag='li' to='/kind'>
                    <p class="title">微信账号</p>
                    <img src="@/assets/home/arrow.png" alt="sorry" class="arrow">
                    <span class="alter">未绑定</span>
                </router-link>
                <router-link tag='li' to='/kind'>
                    <p class="title">QQ账号</p>
                    <img src="@/assets/home/arrow.png" alt="sorry" class="arrow">
                    <span class="alter">未绑定</span>
                </router-link>
                <router-link tag='li' to='/payBind'>
                    <p class="title">支付绑定</p>
                    <img src="@/assets/home/arrow.png" alt="sorry" class="arrow">
                </router-link>
            </ul>
            <button class="exit-login">退出登录</button>
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
            padding-top:5px;
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
                    margin-left: 16px;
                    text-align: center;
                }
                .alter{
                    float: right;
                    font-size: 14px;
                    color: #999999;
                    text-align: center;
                    margin-right: 10px;
                }
                .arrow {
                    float: right;
                    margin-right: 17px;
                    transform: translateY(50%);
                }
            }
        }
        .exit-login{
            width: 188px;
            height: 44px;
            margin-left: 96px;
            margin-top: 34px;
            font-size: 16px;
            color: #FFFFFF;
            text-align: center;
            background-color: #1C4B47;
            border-radius: 4px;
        }
    }
}
</style>