<template>
<div class="box">
  <div class="find-article">
    <div v-for="(product,index) of dataList" class="find-dance" :key='index' :class='product.class'>
      <p class="find-com title">{{product.title}}</p>
      <p class="find-com intro">{{product.intro}}</p>
      <router-link tag='div'  :to="{path:'/find/'+product.id,query:{title:'精品文章'}}">
        <img :src="product.url" alt="sorry" class="find-com find-bg">
      </router-link>
      <!--<h1 v-if='xxx.title'></h1>-->
    </div>
  </div>

</div>

</template>
<script>
import findIcon from "@/assets/find/1.png";
export default {
    components:{

    },
    data(){
      return{
        dataList:[
          {
            id:'001',
            title:"一起来观看 Wes Anderson的色彩回旋舞",
            intro:"对称I色彩I构图",
            url: findIcon,
            class:'art1'
          },
          {
            id:'002',
            title:"你离英剧里的下午茶，还差了这些",
            intro:"对称I色彩I构图",
            url: findIcon,
            class:'art2'
          },
          {
            id:'003',
            title:"北欧人爱 “赶集”：去跳蚤市场",
            intro:"对称I色彩I构图",
            url: findIcon,
            class:'art3'
          },
          {
            id:'004',
            title:"用不同角度诠释丹麦设计的热情和个性",
            intro:"对称I色彩I构图",
            url: findIcon,
            class:'art4'
          },
          {
            id:'005',
            title:"用不同角度诠释丹麦设计的热情和个性",
            intro:"对称I色彩I构图1",
            url: findIcon,
            class:'art5'
          },
        ]
      }
    }
}
</script>
<style scoped lang='styl'>
.box{
      height: 100%;
      position: absolute;
      left: 0;
      top: 45px;
      right: 0;
      bottom: 0;
      padding-bottom: 100px;
      background-color: #1c4b47;
  .find-article{
      perspective: 100px;
      perspective-origin: 50% 50%;
      .find-dance{
        position: absolute;
        left: 8px;
        top: 160px;
        padding-bottom: 100px;
        width: 359px;
        height: 473px;
        border-radius:8px;
        background-color:#fff;
        transform-style: perserve-3d;
        /*opacity: 0.78;*/
        /*background: #E0E0E0;*/
        .find-com{
            position: absolute;
            text-align: center;
        }
        .title{
            left: 71px;
            top: 31px;
            width: 220px;
            height: 50px;
            font-size: 18px;
            line-height: 28px;
            color: #010E0D;
        }
        .intro{
           width: 88px;
           height: 17px;
           left: 140px;
           top: 88px;
        }
        .find-bg{
           left: 50px;
           top: 115px;
           font-size: 12px;
           color:#999999;
        }
      }
         .art1{
             z-index:5;
         }  
         .art2{
             z-index:4;
             transform:translateZ(-10px) translateY(-40px);
         }  
         .art3{
             z-index:3;
             transform:translateZ(-20px) translateY(-80px);
         }  
         .art4{
             z-index:2;
             transform:translateZ(-30px) translateY(-120px);
         }  
         .art5{
             z-index:1;
             transform:translateZ(-40px) translateY(-160px);
         }  
  }
}
</style>


