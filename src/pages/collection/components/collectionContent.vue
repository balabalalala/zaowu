<template>
    <div class="collection-container">
        <div class="collection-header">
            <a href="javascript:;" class="search" @click="$router.go(-1);"><img src="@/assets/home/return.png" alt=""></a>
            <p class="title">物品收藏</p>
        </div>
        <div class="collection-content">
            <ul class="items">
                <!--v-for循环动态添加下拉列表的数据 :to跳转子页面-->
                <router-link tag='li' to='/collection' v-for="(item,index) of collections" :key='index'>
                    <img :src="item.url" alt="sorry" class="photo">
                    <div class="msg">
                        <p class="item-title">{{item.itemTitle}}</p>
                        <div class="item-price">
                            <span class="com-pos peple">{{item.peple}}</span>
                            <span class="com-pos money">{{item.money}}</span>
                        </div>
                    </div>
                </router-link>
            </ul>
        </div>
    </div>
</template>
<script>

export default {
    props:{
        collections:{
            type:Array
        }
    },
    data() {
        return {
        }
    }
}
</script>
<style scoped lang='styl'>
.collection-container {
    width: 100%;
    height: 100%;
    .collection-header {
        position: fixed;
        left: 0;
        top: 0;
        width: 100%;
        height: 40px;
        padding-top: 11px;
        padding-bottom: 13px;
        line-height: 40px;
        background-color:#fff;
        z-index: 9;
        .search {
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
    }
    .collection-content {
        position: relative;
        height: 100%;
        .items {
            position: absolute;
            left: 0;
            top: 60px;
            width: 335px;
            height: 100%;
            margin-left:20px;
            li {
                position: relative;
                font-family: '微软雅黑';
                width: 100%;
                height: 84px;
                line-height: 20px;
                margin-bottom: 20px;
                .photo{
                    position: absolute;
                    left: 0;
                    top: 5px;
                    width: 80px;
                    height: 80px;
                }
                .msg{
                    width: 242px;
                    height: 100%;
                    position: absolute;
                    left: 93px;
                    top: 5px;
                    .item-title{
                        font-size: 12px;
                        color: #494949;
                    }
                    .item-price{
                        position: absolute;
                        left: 0;
                        bottom: 6px;
                        width: 100%;
                        height: 100%;
                        .com-pos{
                            position: absolute;
                            bottom: 6px;
                        }
                        .peple{
                            left: 0;
                            color: #999999;
                        }
                        .money{
                            right: 0;
                            font-size: 16px;
                            color: #1C4B47;
                        }
                    }
                }
            }
        }
    }
}
</style>