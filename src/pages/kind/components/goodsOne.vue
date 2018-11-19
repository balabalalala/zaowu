<template>
    <div class="goods-one-main">
        <div class="goods-block" @click="show=!show">
            <img :src="typeObj.img" alt="">
            <p class="goods-name">
                {{typeObj.pName}}
            </p>
        
        </div>
        <ul class="goods-type-list" v-show="show">
            
                    
            <!--:pType/:type  ===>
              /chuangyi/all
                /fushi/all-->

            <!--to ="{name:'TypeDetail',params:{pType:'chuangyi',type:'all'}"-->
            <!--<li v-for="type in typeObj.typeList" :key="type.name"><router-link to="/kind/chuangyi/all">{{type.name}}</router-link></li>-->
            
    <li v-for="type in typeObj.typeList" :key="type.name">
            <router-link :to="type.link">
                {{type.name}}
            </router-link>
        <!--<router-link :to="{name:type.link.name,params:{pType:typeObj.pRouteName,type:type.link.params.type}}">{{type.name}}</router-link>-->
    </li>
        </ul> 
        <router-view></router-view> 
    </div>

</template>

<script>
// /chuangyi/all
// /chuangyi/sleep


// /fushi/all
// /fushi/sleep


// var typeObj = {
//     pName: '创意',
//     pRouteName: 'chuangyi',
//     img: 'xx'
//     typeList:[
//             {
//         name:'全部',
//         link: {
//             name:'typeDetail',
//             params:{
//                 type:'all'
//             }
//         }
//         // link: 'chuangyi/detail/:type'
//     },
//     {
//         name:'睡衣',
//         link: {
//             name: 'typeDetail',
//             params: {
//                 type: 'sleep'
//             }
//         }
//     }
//     ]
// }

export default {
    props:['typeObj'],
    name: 'GoodsOne',
    data(){
        return {
            show:false
        }
    }

}
</script>
<style scoped>
    .goods-block{
        width: 100%;
        height: 30px;
        background: red;
    }
    
 .goods-block> li{
     height: 50px;

 }


</style>

