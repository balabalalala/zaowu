<template>
  <div class="pay-content">
      <ul class="pay-bank" >
          <li class="bank" v-for="(item,index) of banks" :key='item.index'>
            <img :src="item.url" alt="sorry">
          </li>
      </ul>
      <div class="add-card">
          <!--<span class="ten">+</span>-->
          <img src="@/assets/home/add.png" alt="sorry" class="ten">
          <span class="add">添加银行卡</span>
          <img src="@/assets/home/arrow.png" alt="sorry" class="arrow">
      </div>
  </div>
</template>
<script>
import bank1 from '@/assets/my/bank1.png'
import bank2 from '@/assets/my/bank2.png'
export default {
  data(){
      return{
          banks:[
              {
              url:bank1
              },
              {
              url:bank2
              },
          ]
      }

  }
}
</script>
<style scoped lang='styl'>
    .pay-content{
        width: 100%;
        height: 100%;
        .pay-bank{
            position: absolute;
            left: 7px;
            top: 51px;
            width: 360px;
            /*height: 100%;*/
            /*height: 169px;*/
        }
        .add-card{
            position: absolute;
            left: 18px;
            top: 54%;
            transform: translateY(100%);
            width: 335px;
            height: 41px;
            line-height: 41px;
            background: #F9F9F9;
            border-radius: 4px;
            .ten{
                margin-top:-6px;
                margin-right:13px;
            }
            .add{
                font-size: 16px;
                color: #494949;
                letter-spacing: 0;
                text-align: center;
            }
            .arrow{
                position: absolute;
                right: 10px;
                bottom: 13px;
            }
        }
    }
</style>


