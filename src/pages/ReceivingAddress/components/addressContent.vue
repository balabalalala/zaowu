<template>
  <div class="address-content">
      <div class="address-detail">
          <ul class="group">
              <li class="customer" v-for="(item,index) of msg" :key='item.id'>
                  <div class="msg">
                          <span class="name">{{item.name}}</span>
                          <span class="num">{{item.num}}</span>
                      <p class="home">{{item.home}}</p>
                  </div>
                  <div class="msg-edit">
                    <span class="line"></span>
                    <div class="edit">
                        <img src="@/assets/home/edit.png" alt="sorry" class="edit-img">
                        <p class="edit-w">编辑</p>
                    </div>
                  </div>
              </li>
          </ul>
      </div>
  </div>
</template>
<script>
export default {
  data(){
      return{
        msg:[
            {
            id:61,
            name:'正牌小怪兽',
            num:'1234567892',
            home:'河南省郑州市金水区东风路街道丰庆路博颂路文雅小区',
            },
            {
            id:62,
            name:'正牌小怪兽',
            num:'1234567892',
            home:'河南省郑州市金水区东风路街道丰庆路博颂路文雅小区',
            },
            {
            id:63,
            name:'正牌小怪兽',
            num:'1234567892',
            home:'河南省郑州市金水区东风路街道丰庆路博颂路文雅小区',
            },
        ]
      }
  }
}
</script>
<style scoped lang='styl'>
.address-content{
    width: 100%;
    height: 100%;
    .address-detail{
        width: 100%;
        height: 100%;
        .group{
            position: absolute;
            left: 0;
            top: 66px;
            width: 100%;
            /*height: 100%;*/
            .customer{
                width: 100%;
                height: 77px;
                padding-left: 20px;
                padding-top: 18px;
                box-sizing: border-box;
                border-bottom:1px solid #e5e5e5;
                .msg{
                    line-height: 20px;
                        .name{
                            font-size: 14px;
                            color: #494949;
                            padding-right:10px;
                        }
                        .num{
                            font-size: 12px;
                            color: #999999;
                        }
                    .home{
                        font-size: 10px;
                        color: #999999; 
                    }
                }
                .msg-edit{
                    margin-top: -35px;
                    .line{
                        position: absolute;
                        right: 50px;
                        top: auto;
                        width: 0.4px;
                        height: 26px;
                        background-color: #d8d6d6;
                    }
                    .edit{
                        position: absolute;
                        right: 20px;
                        top: auto;
                        width: 24px;
                        height: 32px;
                        .edit-img{
                            margin-left: 4px;
                        }
                        .edit-w{
                            font-size: 10px;
                            color: #999999;
                            line-height:24px;
                        }
                    }
                }
            }
        }
    }
}
</style>


