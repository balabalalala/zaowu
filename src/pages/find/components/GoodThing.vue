<template>
    <div class="good-thing">
        <div class="good-recom">
            <ul class="good-group">
                <li v-for="(item,index) of goodItems" :key='index' class="good-item">
                    <router-link tag='div' :to="{path:'/find/'+item.id,query:{title:'好物推荐'}}" >
                        <img :src='item.url' alt="sorry" class="good-img">
                    </router-link>
                    <div class="big-title">
                        <p class="big-left-title">{{item.leftTitle}}</p>
                        <p class="big-right-title">{{item.rightTitle}}</p>
                    </div>
                    <p class="small-title">{{item.smallTitle}}</p>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
    import good1 from "@/assets/find/good1.png"
    import good2 from "@/assets/find/good2.png"
    import good3 from "@/assets/find/good3.png"
    export default {
        components: {

        },
    data() {
        return {
            goodItems:[
                {
                id:'11',
                url:good1,
                leftTitle:'NEIWAI2019秋冬',
                rightTitle:'针织新品优惠',
                smallTitle:'和Jennifer领略NEIWAI，感受自潮不熄'
                },
                {
                id:'12',
                url:good2,
                leftTitle:'Paola Paronetto',
                rightTitle:'手作摆件艺术',
                smallTitle:'这个开启丹麦设计新时代的品牌值得Pick'
                },
                {
                id:'13',
                url:good3,
                leftTitle:'NEIWAI2019秋冬',
                rightTitle:'针织新品优惠',
                smallTitle:'和Jennifer领略NEIWAI，感受自潮不熄'
                },
            ]
        }
    }
}
</script>
<style scoped lang='styl'>
    .good-recom{
        width: 100%;
        height: 100%;
        padding-top: 56px;
        background-color: #fff;
        .good-group{
            width: 100%;
            height: 100%;
            .good-item{
                width: 100%;
                height: 237px;
                .good-img{
                    width: 100%;
                    height: 160px;
                }
                .big-title{
                    /*float: left;*/
                    width: 244px;
                    height: 22px;
                    margin-left: 64px;
                    margin-top: 10px;
                    font-size: 16px;
                    color: #010E0D;
                    text-align: center;
                    line-height: 22px;
                    .big-left-title{
                        float: left;
                        width: 132px;
                        height: 100%;
                        border-right:1px solid #000;
                        .bog-right-title{
                            float: left;
                            width: 101px;
                            height: 100%;
                        }
                    }
                }
                .small-title{
                    font-size: 12px;
                    color: #494949;
                    text-align: center;
                    margin-top: 2px;
                }
            }
        }
    }
</style>


