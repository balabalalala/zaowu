<template>
<div class="group">
    <ul class="goods">
        <li class='find-item' v-for="item of kindList" :key='item.id'>
            <img :src="'http://192.168.0.171/'+item.goodsKind.img" alt="sorry" @click="handleClick(item.goodsKind.id)" class="img-item">
            <ul class="items" v-show='id===item.goodsKind.id'>
                <!--v-for循环动态添加下拉列表的数据 :to跳转子页面-->
                <router-link tag='li' 
                v-for="liItem of item.list" 
                :key='liItem.id' 
                :to="'/kind/'+liItem.id">
                <p class="title">{{liItem.ctitle}}</p>
                <img src="@/assets/home/arrow.png" alt="" class="arrow">
                </router-link>
            </ul>
        </li>
    </ul>
</div>
</template>
<script>
    export default {
        props:{
            kindList:{}
        },
        data(){
            return {
                id:''
            }
        },
        methods:{
            handleClick(id){
                if(id===this.id){
                   return this.id = ''
                }
                this.id = id
            }
        }
    }
</script>
<style scoped lang="styl">
    .goods{
        width: 340px;
        margin: 0 auto;
        margin-top: 64px;
        padding-bottom: 20px;
        .find-item{
            width: 340px;
            padding:5px 0;
            .img-item{
                width: 340px;
                height: 120px;
            }
            .items{
                width: 100%;
                /*padding-bottom: 20px;*/
                li{
                    width: 100%;
                    height: 22px;
                    padding-top:11px;
                    padding-bottom:6px;
                    border-bottom:1px solid #d8d6d6;
                    .title{
                        float: left;
                        font-size: 16px;
                        color: #494949;
                        text-align: center;
                    }
                    .arrow{
                        font-size: 20px;
                        color: #A1A1A1;
                        float: right;
                    }
                }
            }
        }
    }
</style>


