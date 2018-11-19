<template>
  <div class="evaluate">
      <div class="evaluate-container">
        <div class="evaluate-header">
          <a href="javascript:;" class="search" @click="$router.go(-1);"><img src="@/assets/home/return.png" alt=""></a>
          <p class="title">发表评价</p>
        </div>
        <div class="evaluate-content">
          <img src="@/assets/home/wear1.png" alt="sorry" class="photo">
          <div class="goods-score">
             <span class="word">商品评分</span>
             <div class="img-box" >
               <span class="star"  :class="{ active: item.isA }" @click="changeStar(index)" v-for="(item,index) of starBox" :key="index"></span>
                <!--<img :src="item.starUrl" alt="sorry" @click="changeStar(index)" v-for="(item,index) of starBox" :key="index">-->
             </div>
          </div>
        </div>
        <div class="problem-content">
          <div class="problem-item">
             <p class="descri">请在此分享您的体验心得</p>
             <p class="num">0/500</p>
          </div>
      </div>
      <button class="submit">提交</button>
      </div>
  </div>
</template>
<script>
import star from '@/assets/home/star.png'
import star2 from '@/assets/home/greenStar.png'
export default {
  data(){
    return{
      starBox:[{
      
        isA:false
      },
      {
        
          isA: false
        },
        {
    
        isA: false
      },
      {
       
          isA: false
        },
        {
   
        isA: false
      },
      ]
    }
  },
  methods:{
    changeStar(index){
      console.log(index)
      for(let i = 0;i<this.starBox.length;i++){
        console.log(index);
        if(index>=i){
          this.starBox[i].isA = true
        }else if(i>index){
          this.starBox[i].isA = false
        }
      }
    }
  }
}
</script>
<style scoped lang='styl'>
  .evaluate{
    width: 100%;
    height: 100%;
    .evaluate-header {
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
    .evaluate-content{
      position: relative;
      width: 275px;
      margin-left: 20px;
      padding-top: 70px;
      .goods-score{
        position: absolute;
        left: 80px;
        top: 90px;
        .word{
          position: absolute;
          left: 0;
          top: 0;
          font-size: 16px;
          color: #494949;
        }
        .img-box{
          float: left;
          margin-left: 74px;
        }
      }
    }
    .problem-content{
        width: 375px;
        height: 100%;
        padding-left:20px;
        box-sizing:border-box;
        .problem-title{
            font-size: 16px;
            color: #010E0D;
            letter-spacing: 0.19px;
        }
        .problem-item{
            position: relative;
            width: 335px;
            height: 128px;
            margin-top: 19px;
            background: #F9F9F9;
            border-radius: 4px;
            font-size: 14px;
            color: #999999;
            letter-spacing: 0.17px;
            .descri{
                position: absolute;
                left: 8px;
                top: 7px;
            }
            .num{
                position: absolute;
                right: 4px;
                bottom: 4px;
            }
        }
    }
    .submit{
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        top: 300px;
        width: 185px;
        height: 44px;
        background: #1C4B47;
        border-radius: 8px;
        font-size: 16px;
        color: #FFFFFF;
        line-height: 44px;
        letter-spacing: 0.19px;
        text-align: center;
    }
  }
  .star{
    display: inline-block;
    width: 18px;
    height: 17px;
    background: url('../../assets/home/star.png')
  }
  .star.active{
    background: url('../../assets/home/greenStar.png')
  }
</style>

