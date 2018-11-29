<template>
    <div class="kind-detail">
        <div class="kind-content">
            <detail-header></detail-header>
            <detail-content 
            :list="list" 
            :mykindlist='mykindlist'
            :test="test"></detail-content>
        </div>
        <router-view></router-view>
    </div>
</template>
<script>
    import kindApi from '@/api/mykind'
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
                mykindlist:[],
                list:[],
                test:[{a:'a'}]
            }
        },
        created(){
            kindApi.getGoodsList(this.$route.params.id)
            //.then是发送get请求之后需要做的事,get请求发送成功之后,返回的res结果
            .then(res=>{
                //将父类绑定的list的值传给子类,然后在子类中props中接收
                this.mykindlist = res.data.data.list;
                // for(let i = 0;i<this.mykindlist.length;i++){
                //     this.list.push(this.mykindlist[i].goods)
                // }
                console.log('=======')
                console.log(this.mykindlist)
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
