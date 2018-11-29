<template>
  <div class="underwear-nav">
    <div class="bottom-nav">
      <div class="photo heart" :class="{ active: heartActive }" @click="changeHeart">
      </div>
      <router-link tag='div' to='/customerContact' class="photo eye">
        <img src="@/assets/home/eye.png" alt="sorry">
      </router-link>
      <div class="btns">
        <button class="btn shopping" @click="open(true)">加入购物车</button>
        <button class="btn buy" @click="open(false)">立即购买</button>
      </div>
    </div>
    <div class="mask" v-show='isShow'>
      <div class="click-buy">
        <div class="clothes">
          <div>
            <img :src="'http://192.168.0.171/'+goods.img1" class="buy-cloth" alt="sorry">
          </div>
          <div class="cloth-intro">
            <img src="@/assets/home/close.png" @click="addShopping()" class="close" alt="sorry">
            <p class="ename">{{goods.brandId}}</p>
            <p class="cname">{{goods.name}}</p>
            <p class="price">¥{{goods.priceOut}}</p>
            <p class="surplus">仅剩{{goods.count}}件</p>
          </div>
        </div>
        <div class="clothes-detail">
          <div class="color-detail">
            <div class="color">
              <span class="word">颜色</span>
              <img src="@/assets/home/arrow.png" alt="sorry" class="arrow">
            </div>
            <div class="balls">
              <span class="com-ball white-ball" :style="{background:goods.color1}"></span>
              <span class="com-ball black-ball" :style="{background:goods.color2}"></span>
            </div>
          </div>
          <div class="standard-detail">
            <div class="standard">
              <span class="word">规格</span>
              <img src="@/assets/home/arrow.png" alt="sorry" class="arrow">
            </div>
            <div class="balls">
              <span class="com-ball s-ball">S</span>
              <span class="com-ball m-ball">M</span>
              <span class="com-ball l-ball">L</span>
            </div>
          </div>
          <div class="number-detail">
              <div class="standard">
                <span class="word">数量</span>
                <img src="@/assets/home/arrow.png" alt="sorry" class="arrow">
            </div>
             <div class="balls">
              <span class="com-ball s-ball" @click="reduce()">-</span>
              <span class="com-ball m-ball">{{count}}</span>
              <span class="com-ball l-ball" @click="increase()">+</span>
            </div>
          </div>
          <button class="confirm" @click="addShopping" v-if="confirm">确定</button>
          <router-link tag='button' to='/confirmOrder' class="confirm" v-else>确定</router-link>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapMutations } from 'vuex'
export default {
  props:['goods'],
  data(){
    return{
      isShow:false,
      confirm:false,
      count:1,
      heartActive:false,
    }
  },
  methods:{
      open(flag){
        this.confirm = flag;
        this.isShow = true;
      },
      close(){
        this.isShow = false;
      },
      reduce(){
        this.count--;
        if(this.count<0){
          this.count=0;
        }
      },
      increase(){
        this.count++;
      },
      changeHeart(){
        this.heartActive = !this.heartActive;
      },
      addShopping(){
        this.isShow = false;
        // 将需要传递的数据深拷贝，
        var goodsDetail2 = Object.assign({}, this.goods, { count: 1 },{value:false})
        this.addList(goodsDetail2)
      },
      // 将深拷贝的数据传到vuex，然后在页面中直接用vuex定义的数组
      ...mapMutations({
        addList: 'addList'
      })
  }
}
</script>
<style scoped lang='styl'>
.underwear-nav{
  .bottom-nav{
			position: fixed;
			left: 0;
			bottom: 0;
			width: 100%;
			z-index: 999;
			background-color: #ffffff;
			height: 48px;
      .photo{
        position: absolute;
        top: 13px;
      }
      .heart{
        width: 30px;
        height: 28px;
        left: 16px;
        background: url('../../../assets/home/heart.png') no-repeat center;
      }
      .heart.active{
        width: 27px;
        height: 27px;
        background: url('../../../assets/home/msg.png') no-repeat center;
      }
      .eye{
        left: 64px;
        top: 15px;
      }
      .btns{
        position: absolute;
        right: 10px;
        top: 6px;
        width: 234px;
        height: 40px;
        .btn{
          width: 113px;
          height: 40px;
          font-size: 15px;
          color: #1C4B47;
          border: 1px solid #1C4B47;
          border-radius: 4px;
          background-color:#fff;
        }
        .shopping{
          margin-right: 4px;
        }
        .buy{
          background: #1C4B47;
          color:#fff;
        }
      }
	}
  .mask{
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,.5);
    z-index:1002;
    .click-buy{
      position: absolute;
      left: 21px;
      bottom: 0;
      width: 333px;
      height: 491px;
      border-radius: 8px;
      background-color:#fff;
      .clothes{
        position: absolute;
        left: 16px;
        top: 14px;
        width: 306px;
        height: 114px;
        margin-bottom: 27px;
        .buy-cloth{
          position: absolute;
          left: 0;
          top: 0;
          width: 114px;
          height: 114px;
        }
        .cloth-intro{
          position: absolute;
          left: 136px;
          top: 14px;
          width: 180px;
          height: 100%;
          .close{
            position: absolute;
            right:10PX;
            top: -15PX;
          }
          p{
            padding-bottom: 18px;
            font-size: 12px;
            color: #494949;
          }
          .price{
            font-size: 16px;
            color: #010E0D;
            padding-bottom: 10px;
          }
          .surplus{
            font-size: 14px;
            /*line-height: 20px;*/
          }
        }
      }
      .clothes-detail{
        position: absolute;
        left: 16px;
        top: 50%;
        transform: translateY(-28%);
        width: 306px;
        height: 336px;
        .color-detail{
          position: absolute;
          left: 0;
          top: 0;
          .color{
            width: 52px;
            height: 20px;
            line-height:20px;
            font-size: 14px;
            color: #000000;
            .word{
              padding-right:8px;
              box-sizing:border-box;
            }
            .arrow{
              transform: rotate(91deg);
            }
          }
          .balls{
            position: absolute;
            left: 20px;
            top: 35px;
            width: 104px;
            height: 35px;
            .com-ball{
              float: left;
              width: 35px;
              height: 35px;
              border-radius:50%;
              background: #EBE7DC;
              box-shadow: 0 2px 5px 0 #E9E9E9;
            }
            .black-ball{
              float: right;
              background: #101010;
              box-shadow: 0 2px 5px 0 #BFBFBF;
            }
          }
        }
        .standard-detail{
          position: absolute;
          left: 0;
          top: 90px;
          width: 214px;
          height: 72px;
          .standard{
            width: 52px;
            height: 20px;
            line-height:20px;
            font-size: 14px;
            color: #000000;
            .word{
              padding-right:8px;
              box-sizing:border-box;
            }
            .arrow{
              transform: rotate(91deg);
            }
          }
           .balls{
            position: absolute;
            left: 20px;
            top: 35px;
            width: 214px;
            height: 35px;
            .com-ball{
              float: left;
              width: 44px;
              height: 39px;
              font-size: 16px;
              color: #000000;
              line-height:39px;
              text-align:center;
              border-radius:4px;
              background: #EBE7DC;
              margin-right:25px;
              box-shadow: 0 2px 5px 0 #E9E9E9;
            }
          }
        }
        .number-detail{
          position: absolute;
          left: 0;
          top: 190px;
          width: 100px;
          height: 24px;
          .standard{
            width: 52px;
            height: 20px;
            line-height:20px;
            font-size: 14px;
            color: #000000;
            .word{
              padding-right:8px;
              box-sizing:border-box;
            }
            .arrow{
              transform: rotate(91deg);
            }
          }
          .balls{
            position: absolute;
            left: 0;
            top: 35px;
            width: 214px;
            height: 35px;
            .com-ball{
              float: left;
              width: 22px;
              height: 24px;
              font-size: 14px;
              color: #000000;
              line-height:24px;
              text-align:center;
              border-radius:1px;
              background: #EBE7DC;
              margin-right:3px;
              box-shadow: 0 2px 5px 0 #E9E9E9;
            }
            .m-ball{
              width: 33px;
            }
          }
        }
        .confirm{
          position: absolute;
          left: 78px;
          bottom: 2px;
          width: 177px;
          height: 40px;
          font-size: 15px;
          color: #FFFFFF;
          text-align: center;
          line-height: 40px;
          background: #1C4B47;
          border-radius: 4px;
        }
      }
    }
  }
}
</style>


