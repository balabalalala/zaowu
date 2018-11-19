<template>
    <div class="title" >
        <p class="time">{{time1}}</p>
        <p class="stitle">{{stitle}}</p>

    </div>
</template>
<script>
export default {
    props:{
        time1:{
            default:''
        },
        stitle:{
            default:''
        }
    }
    // data() {
    //     return {
    //         msg:[
    //             {
    //                 time:'-TUE 9.18-',
    //                 stitle:'周二品质生活专题'
    //             },
    //             {
    //                 time:'-MON 9.17-',
    //                 stitle:'周一新品抢鲜放送'
    //             }
    //         ]
    //     }
    // }
}
</script>
<style scoped lang='styl'>
    .title{
        width: 100%;
        text-align: center;
        margin-top: 16px;
        margin-bottom: 9px;
        .time{
            height: 28px;
            line-height:28px;
            font-size: 20px;
            color: #010E0D;
        }
        .stitle{
            font-size: 12px;
            color: #494949;
            margin-top: 1px;
        }
    }
</style>