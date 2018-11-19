<template>
  <div class="shopping-content">
      <div class="container">
          <div class="header-content">
            <div class="header-title">
                <div class="return" @click="$router.go(-1);"><img src="@/assets/home/return.png" alt=""></div>
                <p class="title">购物车</p>
                <router-link to='/' tag='span' href="javascript:;" class="car">编辑</router-link>
            </div>
          </div>
          <div class="group">
              <!--<test @change="change" v-for="o in obj" :key="o.code" :obj="o"></test>
              <input type="checkbox" v-model="selectAll" @change="changeAll">全选-->
              <div class="item" v-for="item of list" :key="item.id">
                  <div class="picture">
                    <span class="circle">
                        <input class="circle" type="checkbox" v-model="checkboxList" :value="item" >
                    </span>
                    <img src="@/assets/home/1.png" alt="sorry" class="photo">
                  </div>
                  <div class="word" >
                      <p class="brand">{{item.board}}</p>
                      <p class="cname">女士吊带性感睡衣</p>
                      <div class="money">
                          <span class="price">¥{{item.price}}</span>
                          <div class="balls">
                            <span class="com-ball" @click="lessCount(item)">-</span>
                            <span class="com-ball m-ball">{{item.count}}</span>
                            <span class="com-ball" @click="addCount(item)">+</span>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
          <div class="like-content">
            <div class="love">
                <span class="line"></span>
                <span class="love-word">你可能还会喜欢</span>
                <span class="line right-line"></span>
            </div>
            <div class="love-goods">
                <ul class="love-group">
                    <li class="love-item">
                        <img src="@/assets/kind/detail2.png" alt="sorry" class="picture">
                        <p class="brand">TRIUMPU</p>
                        <p class="title">文胸内裤套装</p>
                    </li>
                    <li class="love-item">
                        <img src="@/assets/kind/detail2.png" alt="sorry" class="picture">
                        <p class="brand">TRIUMPU</p>
                        <p class="title">文胸内裤套装</p>
                    </li>
                </ul>
            </div>
          </div>
          <div class="bottom-nav">
                <div class="select">
                    <input type="checkbox" class="circle" v-model="selectAll" @change='toggleCheck'>
                    <span class="all">全选</span>
                </div>
                <div class="total">
                    <span class="word">总计</span>
                    <span class="money">¥{{total}}</span>
                </div>
                <router-link tag='button' class="btn" to='/confirmOrder'>立即购买</router-link>
          </div>
      </div>
  </div>
</template>
<script>
// import test from './components/test'
import { mapState, mapGetters, mapMutations } from 'vuex'
export default {
   name:'ShoppingCar',
    components:{
        // test
    },
    data(){
        return{
            checkboxList: [],
            obj:[
                {
                    name:'篮球',
                    value:false,
                    code:'1'
                },
                {
                    name: '足球',
                    code: '2',
                    value: false,
                },
                {
                    name: '乒乓球',
                    code: '3',
                    value: false,
                },
            ],
            selectAll:false,
        }
    },
    computed:{
        ...mapState(['list']),
        //在计算属性中计算总价
        total(){
            var addPrice = 0 
            for(let i = 0 ; i < this.checkboxList.length ; i++){
                if(this.checkboxList[i].count>0){
                    addPrice +=  this.checkboxList[i].count * this.checkboxList[i].price
                }
            }
            return addPrice 
        }
    },
    methods:{
        // changeAll(){
        //     this.obj.map(o=>{
        //         o.value = this.selectAll;
        //         console.log(o.value)
        //     })
        // },
        // change(v){
        //     console.log('get==>'+v);
        //     this.obj.map(i=>{
        //         if(i.value != true){
        //             this.selectAll=false;
        //         }else if(i.value == true){
        //             this.selectAll = true;
        //                 console.log(i.value)
        //         }
                
        //     })
        // },
        toggleCheck(){
            console.log(this.checkboxList)
            console.log(this.list)
            if(this.checkboxList.length>=0&&this.checkboxList.length!=this.list.length){
                //这个时候要全选
                this.checkboxList = this.list
            }else{
                this.checkboxList = []
            }
        },
         addCount(item){
            var item2 = Object.assign({},item,{count:1})//只深拷贝第一层。第二层的东西是浅拷贝
            this.addList(item2)
        },
        lessCount(item){
            // var newlist = Object.assign({},ele);
            var item2 = Object.assign({}, item, { count: 1 })
            this.lessCount(item2)
        },
        ...mapMutations({
            addList: 'addList',
            //key value 作为记忆格式,后边的变量为store中mapmutations中的方法
            lessCount: 'lessCount'
        })
    },
    //监听上面checkbox与下面checkbox的状态,当它俩的状态一样时,让下面全选的复选框变成true,否则为false
    watch:{
        checkboxList(){
            if (this.checkboxList.length === this.list.length) {
                this.selectAll = true
            } else {
                this.selectAll = false
            }
        }        
    }
 }
</script>
<style scoped lang='styl'>
    .shopping-content{
        position: absolute;
        left: 0;
        top: 0;
        bottom: -200px;
        right: 0;
        background-color: #f4f4f4;
        /*width: 100%;*/
        /*height: 100%;*/
        .container{
            /*padding-left:22px;*/
            width: 100%;
            /*height: 100%;*/
            .header-content {
                position: fixed;
                left: 0;
                top: 0;
                width: 100%;
                height: 56px;
                line-height: 40px;
                background-color: #f9f9f9;
                z-index: 5;
                .header-title {
                    position: absolute;
                    left: 0;
                    top: 0;
                    width: 100%;
                    height: 100%;
                    .return {
                        position: absolute;
                        left: 16px;
                        top: 14px;
                        width: 20px;
                        height: 20px;
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
                    }
                    .share {
                        position: absolute;
                        right: 62px;
                        top: 13px;
                    }
                    .car {
                        position: absolute;
                        right: 16px;
                        top: 13px;
                        font-size: 16px;
                        color: #010E0D;
                        letter-spacing: 0;
                        /*width: 23px;
                        height: 22px;*/
                    }
                }
            }
            .group{
                padding-top: 53px;
                 padding-left:22px;
                 width: 333px;
                .item{
                    position: relative;
                    width: 333px;
                    height: 114px;
                    margin-top:20px;
                    background:#fff;
                    .picture{
                        position: absolute;
                        left: 6px;
                        top: 20px;
                        .circle{
                            display: inline-block;
                            width: 17px;
                            height: 17px;
                            border-radius:50%;
                        }
                    }
                        .word{
                            position: absolute;
                            left: 122px;
                            top:27px;
                            p{
                                margin-bottom:7px;
                                font-size: 12px;
                                color: #494949;
                                line-height: 20px;
                            }
                            .price{
                                font-size: 14px;
                                color: #1C4B47;
                            }
                            .balls{
                                position: absolute;
                                right: -100px;
                                bottom: -8px;
                                width: 60px;
                                height: 20px;
                                line-height: 20px;
                                font-size: 14px;
                                color: #E5E5E5;
                                .com-ball{
                                display: inline-block;
                                width: 9px;
                                height: 20px;
                                padding:0 2px;
                                }
                                .m-ball{
                                    font-size: 14.52px;
                                    color: #000000;
                                }
                        }
                    }
                }
            }
            .like-content{
                position: relative;
                width: 100%;
                /*height: 100%;*/
                padding-top:24px;
                /*background:pink;*/
                .love{
                    position: absolute;
                    left: 66px;
                    top: 24px;
                    width: 243px;
                    height: 18px;
                    line-height: 18px;
                    text-align: center;
                    .line{
                        position: absolute;
                        left: -50%;
                        transform:translateX(46%);
                        top: 50%;
                        width: 128px;
                        height: 1px;
                        background-color:#BDBDBD;
                    }
                    .love-word{
                        font-size: 14px;
                        color: #010E0D;
                    }
                    .right-line{
                        left: auto;
                        right: 0;
                    }
                }
                .love-goods{
                    width: 100%;
                    height: 100%;
                    padding-top:40px;
                    .love-group{
                        width: 100%;
                        height: 100%;
                        margin-left:25px;
                        .love-item{
                            float: left;
                            padding-right:46px;
                            width: 129px;
                            height: 162px;
                            text-align: center;
                            font-size: 12px;
                            color: #494949;
                            line-height: 18px;
                        }
                    }
                }
            }
            .bottom-nav{
                position: fixed;
                left:auto;
                top:auto;
                width: 363px;
                height: 49px;
                background:#fff;
                padding-bottom:20px;
                .select{
                    position: absolute;
                    left: 22px;
                    top: 16px;
                    font-size: 18px;
                    color: #010E0D;
                    .circle{
                        width: 19px;
                        height: 19px;
                        border-radius:100%;
                        margin-right:10px;
                    }
                    .all{
                    line-height: 20px;
                    }
                }
                .total{
                    position: absolute;
                    left: 150px;
                    top: 16px;
                    font-size: 14px;
                    color: #010E0D;
                    .money{
                        font-size: 16px;
                        color: #1C4B47;
                    }
                }
                .btn{
                    position: absolute;
                    right: 0;
                    top: 4px;
                    width: 113px;
                    height: 40px;
                    background: #1C4B47;
                    border-radius: 4px;
                    font-size: 15px;
                    color: #FFFFFF;
                    line-height: 40px;
                    text-align: center;
                }
                /*.checkboxFour {
                    width: 40px;
                    height: 40px;
                    background: #ddd;
                    margin: 20px 90px;
                
                    border-radius: 100%;
                    position: relative;
                    -webkit-box-shadow: 0px 1px 3px rgba(0,0,0,0.5);
                    -moz-box-shadow: 0px 1px 3px rgba(0,0,0,0.5);
                    box-shadow: 0px 1px 3px rgba(0,0,0,0.5);
                }*/
            }
        }
    }
</style>


