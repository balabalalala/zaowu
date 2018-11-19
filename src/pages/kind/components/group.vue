<template>
<div class="group">
    <ul class="goods">
        <li class='find-item' v-for="item of kindList" :key='item.id'>
            <span @click="handleClick(item.goodsKind.id)">{{item.goodsKind.ctitle}}</span>
            <!-- <img :src='item.url' alt="sorry" @click="handleClick(index)" class="img-item"> -->
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
    import goodsImg1 from "@/assets/kind/goods1.png"
    import goodsImg2 from "@/assets/kind/goods2.png"
    import goodsImg3 from "@/assets/kind/goods3.png"
    import goodsImg4 from "@/assets/kind/goods4.png"
    import goodsImg5 from "@/assets/kind/goods5.png"
    export default {
        props:{
            kindList:{}
        },
        data(){
            return {
                // items:[
                //     {
                //         id:'01',
                //         url:goodsImg1,
                //         text: [{
                //             textName: '全部1',
                //             id: '0101'
                //         }, 
                //         {
                //             textName: '睡衣1',
                //             id: '0102'
                //         },
                //         {
                //             textName: '浴袍1',
                //             id: '0103'
                //         },
                //         {
                //             textName: '内衣1',
                //             id: '0104'
                //         },
                //         {
                //             textName: '袜类1',
                //             id: '0105'
                //         },
                //         {
                //             textName: '其他',
                //             id: '0106'
                //         }
                //         ],
                //         isShow:false
                //     },
                //     {
                //         id:'02',
                //         url:goodsImg2,
                //         text: [{
                //             textName: '全部2',
                //             id: '0201'
                //         },
                //          {
                //             textName: '睡衣2',
                //             id: '0202'
                //         },
                //         {
                //             textName: '浴袍2',
                //             id: '0203'
                //         },
                //         {
                //             textName: '内衣2',
                //             id: '0204'
                //         },
                //         {
                //             textName: '袜类2',
                //             id: '0205'
                //         },
                //         {
                //             textName: '其他',
                //             id: '0206'
                //         }
                //         ],
                //         isShow:false
                //     },
                //     {
                //         id:'03',
                //         url:goodsImg3,
                //        text: [{
                //             textName: '全部3',
                //             id: '0301'
                //         },
                //         {
                //             textName: '睡衣3',
                //             id: '0302'
                //         },
                //         {
                //             textName: '浴袍3',
                //             id: '0303'
                //         },
                //         {
                //             textName: '内衣3',
                //             id: '0304'
                //         },
                //         {
                //             textName: '袜类3',
                //             id: '0305'
                //         },
                //         {
                //             textName: '其他',
                //             id: '0306'
                //         }
                //         ],
                //         isShow:false
                //     },
                //     {
                //         id:'04',
                //         url:goodsImg4,
                //         text: [{
                //             textName: '全部4',
                //             id: '0401'
                //         }, 
                //         {
                //             textName: '睡衣4',
                //             id: '0402'
                //         },
                //         {
                //            textName: '浴袍4',
                //             id: '0403' 
                //         },
                //         {
                //             textName: '内衣4',
                //             id: '0404'
                //         },
                //         {
                //             textName: '袜类4',
                //             id: '0405'
                //         },
                //         {
                //             textName: '其他',
                //             id: '0406'
                //         }
                //         ],
                //         isShow:false
                //     },
                //     {
                //         id:'05',
                //         url:goodsImg5,
                //         text: [{
                //             textName: '全部5',
                //             id: '0501'
                //         }, 
                //         {
                //             textName: '睡衣5',
                //             id: '0502'
                //         },
                //         {
                //             textName: '浴袍5',
                //             id: '0503'
                //         },
                //         {
                //             textName: '内衣5',
                //             id: '0504'
                //         },
                //         {
                //             textName: '袜类5',
                //             id: '0505'
                //         },
                //         {
                //             textName: '其他',
                //             id: '0506'
                //         }
                //         ],
                //         isShow:false
                //     }
                // ],
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
                width: 100%;
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


