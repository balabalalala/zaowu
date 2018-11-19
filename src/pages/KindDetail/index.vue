<template>
    <div class="kind-detail">
        <div class="kind-content">
            <detail-header></detail-header>
            <detail-content :list="list"></detail-content>
        </div>
        <router-view></router-view>
    </div>
</template>
<script>
    import DetailHeader from './components/DetailHeader'
    import DetailContent from './components/DetailContent'
    import XpNav from '@/components/nav'
    import axios from 'axios'
    export default {
        components:{
            DetailHeader,
            DetailContent,
            XpNav
        },
        data(){
            return {
                list:[],
            }
        },
        created(){
            axios.get('https://www.easy-mock.com/mock/5b6168530f34b755cbc58b18/mock/api/goods/list',{
                params:{
                    id:this.$route.params.id
                }
            })
            //.then是发送get请求之后需要做的事,get请求发送成功之后,返回的res结果
            .then(res=>{
                console.log(res)
                //将mock模拟的数据赋给res,然后将res中的goodsList赋给list,
                //将父类绑定的list的值传给子类,然后在子类中props中接收
                this.list = res.data.data.goodsList
                console.log(this.list)
            })
        }
    }
</script>
<style scoped lang='styl'>
.kind-detail{
    position: absolute;
    top: 0;
    left: 0;
    bottom: -550px;
    right: 0;
    width: 100%;
    z-index: 1000;
    background-color: #fff;
}
</style>
