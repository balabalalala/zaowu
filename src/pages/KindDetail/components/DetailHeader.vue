<template>
    <div class="detail-header">
        <div class="header-content">
            <div class="header-title">
                <router-link to='/kind' href="javascript:;" class="return"><img src="@/assets/home/return.png" alt="sorry"  @click="goback()"></router-link>
                <p class="title">内衣</p>
                <a href="javascript:;" class="search"><img src="@/assets/home/search.png" alt=""></a>
                <router-link to='/shoppingCar' href="javascript:;" class="car"><img src="@/assets/home/car.png" alt="sorry"></router-link to='/shoppingCar'>
            </div>
            <ul class="header-group">
                <li class="header-item">新品</li>
                <li class="header-item">
                    销量
                    <div class="arrows">
                        <img src="@/assets/home/up-arrow.png" alt="" class="up-arrow">
                        <img src="@/assets/home/down-arrow.png" alt="" class="down-arrow">
                    </div>
                </li>
                <li class="header-item">
                    价格
                    <div class="arrows">
                        <img src="@/assets/home/up-arrow.png" alt="" class="up-arrow">
                        <img src="@/assets/home/down-arrow.png" alt="" class="down-arrow">
                    </div>
                </li>
                <li class="header-item">筛选</li>
            </ul>
        </div>
    </div>
</template>
<script>
import { mapState,mapMutations} from 'vuex'
export default {
    data() {
        return {
        }
    },
    methods:{
        goback(){
            this.$router.go(-1);
        },
    }
}
</script>
<style scoped lang='styl'>
.header-content{
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 84px;
    padding-top: 11px;
    padding-bottom: 13px;
    line-height: 40px;
    background-color: #f9f9f9;
    z-index: 5;
    .header-title{
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        .return{
            position: absolute;
            left: 16px;
            top: 14px;
            width: 20px;
            height: 20px;
            /* img{
                width: 20px;
                height: 20px;
            } */
        }
        .title {
            padding-top: 13px;
            font-size: 18px;
            color: #000000;
            text-align: center;
        }
        .news {
            position: absolute;
            right: 58px;
            top: 14px;
            width: 22px;
            height: 22px;
            img{
                width: 20px;
                height: 20px;
            }
        }
        .search{
            position: absolute;
            right: 62px;
            top: 13px;
            img{
                width: 20px;
                height: 20px;
            }
        }
        .car {
            position: absolute;
            right: 16px;
            top: 13px;
            width: 23px;
            height: 22px;
            img{
                width: 20px;
                height: 20px;
            }
        }
    }
    .header-group{
        position: absolute;
        left: 0;
        top: 60px;
        width: 100%;
        height: 44px;
        .header-item{
            position: relative;
            float: left;
            width: 25%;
            height: 100%;
            line-height:44px;
            font-size: 14px;
            color: #010E0D;
            text-align: center;
            .arrows{
                position: absolute;
                right: 25%;
                top: 50%;
                transform: translateY(-50%);
                img{
                    display: block;
                    width: 7px;
                    height: 4px;
                }
                .down-arrow{
                    margin-top: 1px;
                }
            }
        }
    }
}
</style>