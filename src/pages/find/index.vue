<template>
    <div class="find">
        <!--在父类里面监听子类发送的事件-->
        <xp-title @artClick='artClick' @goodClick='goodClick'></xp-title>
        
        <xp-article v-if="isShow" key="article"></xp-article>
        <xp-good v-else key="good"></xp-good>
        <router-view></router-view>
    </div>
</template>
<script>
import XpTitle from './components/title'
import XpArticle from './components/FindArticle'
import XpGood from './components/GoodThing'

export default {
     data(){
        return {
            isShow:true,
        }
     },
    components: {
        XpTitle,
        XpArticle,
        XpGood,
    },
    methods:{
        // 父类对监听事件进行处理
        artClick(){
            this.isShow = true;
        },
        goodClick(){
            this.isShow = false;
        }
    }
}
</script>
<style scoped lang="styl">
    .find{
        width: 100%;
        height: 100%;
        overflow: hidden;
        background-color: #fff;       
        padding-bottom: 68px;
        }
        .wushan{
           
        }
</style>