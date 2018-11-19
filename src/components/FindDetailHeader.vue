<template>
    <div class="header">
        <a href="javascript:;" class="arrow" @click="$router.go(-1);"><img src="@/assets/home/return.png" alt=""></a>
        
        <p class="title">{{title1}}</p>
        <a href="javascript:;" class="share" @click="openDialog"><img src="@/assets/home/share.png" alt=""></a>
    </div>
</template>
<script>
export default {
    props: {
        title1:{
            
        },
        isWord: {
            default: true
        },
    },
    data() {
        return {
        }
    },
    created(){
        console.log('传进来了==>'+this.title1);
    },
    methods:{
        openDialog(){
            this.$emit('openDialog')
        }
    }
}
</script>
<style scoped lang='styl'>
.header {
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 40px;
    padding-top: 11px;
    padding-bottom: 13px;
    line-height: 40px;
    z-index:5;
    background-color: #fff;
    .arrow {
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
    .news {
        position: absolute;
        right: 58px;
        top: 14px;
        width: 22px;
        height: 22px;
    }
    .share {
        position: absolute;
        right: 16px;
        top: 13px;
        width: 23px;
        height: 22px;
    }
}
</style>