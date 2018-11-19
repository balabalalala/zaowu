<template>
    <div class="detail-content">
        <div class="container">
            <ul class="sort">
                <li class="sort-item">
                    <span>无痕</span>
                </li>
                <li class="sort-item">
                    <span>美背</span>
                </li>
                <li class="sort-item">
                    <span>运动</span>
                </li>
                <li class="sort-item">
                    <span>性感</span>
                </li>
            </ul>
            <ul class="content-list">
                <router-link tag='li' class="group" v-for="(item,index) of list" :key='item.id' :to="/kind/+$route.params.id+'/'+item.id">
                    <img :src="item.img" alt="sorry" class="group-img">
                    <p class="etitle">{{item.board}}</p>
                    <p class="ctitle">{{item.desc}}</p>
                    <p class="price">¥{{item.price}}</p>
                </router-link>
            </ul>
        </div>
    </div>
</template>
<script>
import product1 from "@/assets/kind/detail1.png"
import product2 from "@/assets/kind/detail2.png"
import product3 from "@/assets/kind/detail3.png"
import product4 from "@/assets/kind/detail4.png"
import product5 from "@/assets/kind/detail5.png"
import product6 from "@/assets/kind/detail6.png"
export default{
    props:{
        list:{
            type:Array,
        }
    },
    data(){
        return{
            // product:[
            //     {
            //         id:'41',
            //         url:product1,
            //         etitle:'NEIWAI',
            //         ctitle:'Cozy女士家居服莫代尔',
            //         price:'¥399'
            //     },
            //     {
            //         id:'42',
            //         url:product2,
            //         etitle:'TRIUMPU',
            //         ctitle:'文胸内裤套装',
            //         price:'¥299'
            //     },
            //     {
            //         id:'43',
            //         url:product3,
            //         etitle:'ESSENCE',
            //         ctitle:'女士Cozy圆领吊带性感',
            //         price:'¥219'
            //     },
            //     {
            //         id:'44',
            //         url:product4,
            //         etitle:'LAPERLA',
            //         ctitle:'女士Bra-top蕾丝美背无',
            //         price:'¥159'
            //     },
            //     {
            //         id:'45',
            //         url:product5,
            //         etitle:'CRYSTALS',
            //         ctitle:'零敏洛丽无钢圈内衣',
            //         price:'¥299'
            //     },
            //     {
            //         id:'46',
            //         url:product6,
            //         etitle:'JUDYHUA',
            //         ctitle:'女士高端网纱交叠无钢',
            //         price:'¥249'
            //     },
            // ]
        }
    }
}
</script>
<style scoped lang='styl'>
.detail-content{
    width: 100%;
    height: 100%;
.container {
    position: relative;
    width: 100%;
    height: 100%;
    .sort{
        position: absolute;
        left: 0;
        top: 120px;
        width: 100%;
        height: 23px;
        .sort-item{
            float: left;
            width: 15%;
            height: 23px;
            font-size: 12px;
            color: #010E0D;
            line-height: 23px;
            text-align: center;
            margin-left: 30px;
            span{
                display: block;
                width: 53px;
                height: 100%;
                border-radius:1px;
                background-color:#f9f9f9;
            }
        }
    }
    .content-list{
        position: absolute;
        left: 39px;
        top: 152px;
        width: 336px;
        height: 100%;
        background-color: pink;
        .group{
            float: left;
            width: 129px;
            height: 190px;
            margin-right:39px
            font-size:12px;
            color:#494949;
            text-align:center;
            line-height:17px;
            .group-img{
                width: 129px;
                height: 129px;
            }
            p{
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
                .price{
                    font-weight:bold;
                    color: #010E0D;
                }
            }
        }
    }
}
}
</style>