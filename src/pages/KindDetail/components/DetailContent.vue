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
                <router-link tag='li' class="group" v-for="item of mykindlist" :key='item.goods.id' :to="/kind/+$route.params.id+'/'+item.goods.id">
                    <img :src="'http://192.168.0.171/'+item.goods.img1" alt="sorry" class="group-img">
                    <p class="etitle">{{item.goods.brandId}}</p>
                    <p class="ctitle">{{item.goods.name}}</p>
                    <p class="price">¥{{item.goods.priceOut}}</p>
                </router-link>
            </ul>
        </div>
    </div>
</template>
<script>
export default{
    props:["list","mykindlist",'test'],
    data(){
        return{
           
        }
    },
    created(){
       
    },
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
            }
            .etitle{
                margin-top: 5px;
            }
            .price{
                font-weight:bold;
                color: #010E0D;
            }
        }
    }
}
}
</style>