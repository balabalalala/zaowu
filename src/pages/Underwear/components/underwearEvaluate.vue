<template>
    <div class="underwear-evaluate">
        <div class="evaluate-detail">
        <ul class="group">
            <li class="item" v-for="(item,index) of appraise" :key='item.id'>
                <img :src="item.Avatar" alt="sorry" class="header">
                <div class="item-intro">
                    <p class="name">{{item.name}}</p>
                    <p class="time">{{item.date}}</p>
                    <p class="lang">{{item.ping}}</p>
                </div>
            </li>
        </ul>
    </div>
    </div>
</template>
<script>
import header1 from "@/assets/kind/header1.png"
import header2 from "@/assets/kind/header2.png"
import header3 from "@/assets/kind/header3.png"
import header4 from "@/assets/kind/header4.png"
export default {
    props:{
        appraise:{
            type:Array
        }
    },
  data(){
      return{
      }
  },
}
</script>
<style scoped lang='styl'>
    .underwear-evaluate{
        position: relative;
        width: 100%;
        margin-top:-540px;
        background:#fff;
        .evaluate-detail{
            width: 100%;
            .item{
                position: relative;
                width: 343px;
                height: 129px;
                margin: 0 auto;
                border-bottom: 0.1px solid #999;
                margin-bottom: 10px;
            }
            .header{
                position: absolute;
                left: 0;
                top:auto;
                width: 41px;
                height: 41px;
            }
            .item-intro{
                position: absolute;
                left: 54px;
                width: 278px;
                /*height: 100%;*/
                line-height: 20px;
                .name{
                    font-size: 18px;
                    color: #000000;
                }
                .time{
                    font-size: 14px;
                    color: #767676;
                    margin-bottom: 13px;
                }
                .lang{
                    font-size: 12px;
                    color: #494949;
                }
            }
        }
    }
</style>


