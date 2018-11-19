<template>
    <div class="banner">
        <img src="@/assets/my/bg1.png" alt="sorry">
        <a href="javascript:;" class="photo">
            <img src="@/assets/my/photo.png" alt="sorry">
        </a>
        <router-link class="set" to='/set'>
			<img src="@/assets/home/set.png" alt="">
		</router-link>
        <div class="box">
            <router-link class="regis" to='/register'>
            注册
		    </router-link>
            <span class="line"></span>
            <router-link class="regis" to='/login'>
            登录
		    </router-link>
        </div>
    </div>
</template>
<script>
export default {
  
}
</script>
<style scoped lang='styl'>
    .banner{
        position: relative;
        width: 100%;
        height: 237px;
         img{
                width: 100%;
                height: 100%;
            }
        .photo{
            position: absolute;
            left: 151px;
            top: 55px;
            width: 74px;
            height: 74px;
        }
        .set{
            position: absolute;
            right: 20px;
            top: 55px;
            width: 24px;
            height: 24px;
            img{
                width: 24px;
                height: 24px;
            }
        }
        .box{
            position: absolute;
            right: 142px;
            bottom: 56px;
            width: 94px;
            height: 32px;
            line-height: 32px;
            text-align: center;
            background-color: #ffffff;
            .line{
                position: absolute;
                left: 50%;
                top: 0;
                width: 0.3px;
                height: 32px;
                background-color:#999999;
            }
            .regis{
                display: inline-block;
                width: 40px;
                height: 32px;
                font-size: 14px;
                color: #010E0D;
            }
        }
    }
</style>

