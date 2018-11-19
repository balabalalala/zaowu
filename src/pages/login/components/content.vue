<template>
    <div class="content">
        <div class="register-content">
            <div class="register-text">
                <input type="text" class="num" placeholder="请输入手机号">
                <input type="text" class="num input-ident" placeholder="请输入验证码">
                <button class="click-register">登录</button>
            </div>
            <div class="content-all">
                <a href="javascript:;" class="com-style account">注册账户</a>
                <a href="javascript:;" class="com-style pwd">忘记密码</a>
            </div>
            <div class="three-login">
                <span class="line"></span>
                <span class="three-word">第三方登录</span>
                <span class="line right-line"></span>
            </div>
            <ul class="img-box">
                <router-link tag='li' to='/' class="item">
                    <img src="@/assets/login/qq.png" alt="sorry" >
                </router-link>
                <router-link tag='li' to='/' class="item">
                    <img src="@/assets/login/wx.png" alt="sorry" >
                </router-link>
                <router-link tag='li' to='/' class="item">
                    <img src="@/assets/login/wb.png" alt="sorry" >
                </router-link>
            </ul>
        </div>
        </div>
</template>
<script>
export default {

}
</script>
<style scoped lang='styl'>
.content{
    width: 100%;
    height: 100%;
    .register-text {
        position: absolute;
        left: 66px;
        top: 277px;
        width: 241px;
        height: 80px;
        .num {
            position: absolute;
            left: 0;
            top: 0;
            width: 100%;
            height: 50%;
            line-height: 20px;
            font-size: 14px;
            color: #A4A4A4;
            border-bottom: 1px solid #bdbdbd;
        }
        .input-ident {
            width: 241px;
            left: 0;
            top: 48px;
        }
        .click-register {
            position: absolute;
            left: 0;
            top: 116px;
            width: 243px;
            height: 44px;
            font-size: 16px;
            color: #FFFFFF;
            text-align: center;
            background-color: #1C4B47;
            border-radius: 4px;
        }
    }
    .content-all{
        position: absolute;
        left: 66px;
        top: 456px;
        width: 243px;
        height: 24px;
        line-height: 24px;
        .com-style{
            width: 53px;
            height: 20px;
            text-align:center;
            font-size: 13px;
            color: #494949;
        }
        .account{
            float: left;
        }
        .pwd{
            float: right;
        }
    }
    .three-login{
        position: absolute;
        left: 66px;
        top: 580px;
        width: 243px;
        height: 18px;
        line-height: 18px;
        text-align: center;
        margin-bottom: 200px;
        .line{
            position: absolute;
            left: 0;
            top: 50%;
            width: 77px;
            height: 1px;
            background-color:#BDBDBD;
        }
        .right-line{
            left: auto;
            right: 0;
        }
    }
    .img-box{
        position: absolute;
        left: 50px;
        bottom: -20px;
        width: 300px;
        .item{
            float: left;
            width: 33%;
            height: 100%;
        }
    }
}
</style>


