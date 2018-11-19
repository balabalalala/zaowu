<template>
    <div class="about-container">
        <div class="about-header">
            <a href="javascript:;" class="search" @click="$router.go(-1);"><img src="@/assets/home/return.png" alt=""></a>
            <p class="title">关于造物</p>
        </div>
        <div class="about-content">
            <div class="version">
                <img src="@/assets/my/about.png" alt="sorry" class="photo">
                <p class="version-intro">造物1.1.01</p>
            </div>
            <div class="information">
                <ul class="clause">
                    <router-link class="slip" tag='li' v-for="(item,index) of clause" :key='item.id' to='/about'>
                        <p class="title">{{item.title}}</p>
                        <img src="@/assets/home/arrow.png" alt="sorry" class="arrow">
                    </router-link>
                </ul>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            clause: [
                {
                    id: '51',
                    title:'隐私声明'
                },
                {
                    id: '52',
                    title:'官方网站'
                },
                {
                    id: '53',
                    title:'版本更新'
                },
                {
                    id: '54',
                    title:'分享APP'
                },
            ]
        }
    }
}
</script>
<style scoped lang='styl'>
.about-container {
    width: 100%;
    height: 100%;
    background: #F5F5F5;
    .about-header {
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
    .about-content {
        /*width: 100%;
        height: 100%;*/
        .version{
            position: absolute;
            left: 160px;
            top: 25%;
            transform:translateY(-50%);
            width: 68px;
            height: 90px;
            .version-intro{
                text-align: center;
                margin-top: 5px;
                line-height: 20px;
            }

        }
        .information{
            position: absolute;
            left: 0;
            top: 242px;
            width: 100%;
            .clause{
                width: 100%;
                height: 100%;
                background-color: #fff;
                .slip{
                    width: 100%;
                    height: 44px;
                    line-height: 44px;
                    box-sizing: border-box;
                    padding-bottom: 6px;
                    border-bottom: 0.3px solid #e5e5e5;
                    .title{
                        float: left;
                        font-size: 16px;
                        color: #494949;
                        margin-left:16px;
                        text-align: center;
                    }
                    .arrow{
                        font-size: 20px;
                        margin-right: 17px;
                        transform: translateY(50%);
                        float: right;
                    }
                }
            }
        }
    }
}
</style>