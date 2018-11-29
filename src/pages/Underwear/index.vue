<template>
  <div class="underwear">
      <underwear-header @openDialog="openDialog"></underwear-header>
      <underwear-banner :imglist="imglist"></underwear-banner>
      <underwear-intro :goods="goods"></underwear-intro>
      <underwear-detail :goods="goods"></underwear-detail>
      <underwear-evaluate :appraise='appraise'></underwear-evaluate>
      <share-dialog :shareDialog="shareDialog" @closeDialog="closeDialog"></share-dialog>
      <underwear-nav :goodsDetail='goodsDetail' :goods="goods"></underwear-nav>
  </div>
</template>
<script>
import kindApi from '@/api/mykind'
import underwearHeader from './components/underwearHeader'
import underwearIntro from './components/underwearIntro'
import underwearBanner from './components/underwearBanner'
import underwearDetail from './components/underwearDetail'
import underwearEvaluate from './components/underwearEvaluate'
import shareDialog from '@/components/shareDialog'
import underwearNav from './components/underwearNav'
import axios from 'axios'
import { mapMutations } from 'vuex'
export default {
  components:{
    name:'Underwear',
    underwearHeader,
    underwearIntro,
    underwearBanner,
    underwearNav,
    underwearDetail,
    underwearEvaluate,
    shareDialog
  },
  data(){
    return{
        appraise:[],
        mykindlist:[],
        imglist:[],
        goods:{},
        goodsDetail:{
        },
        shareDialog:false,
    }
  },
  created(){
    kindApi.getGoodsList(this.$route.params.id)
            //.then是发送get请求之后需要做的事,get请求发送成功之后,返回的res结果
            .then(res=>{
                //将父类绑定的list的值传给子类,然后在子类中props中接收
                this.mykindlist = res.data.data.list;
                for(let i = 0;i<this.mykindlist.length;i++){
                  if(this.$route.params.underwarId == this.mykindlist[i].goods.id){
                    var img1 = this.mykindlist[i].goods.img1;
                    var img2 = this.mykindlist[i].goods.img2;
                    var img3 = this.mykindlist[i].goods.img3;
                    this.imglist.push(img1,img2,img3)
                    this.goods = this.mykindlist[i].goods
                  }
                }
            })
    axios.get('https://www.easy-mock.com/mock/5b6168530f34b755cbc58b18/mock/api/goods/detail/appraise', {
      params: {
        id: this.$route.params.id
      },
    })
    .then(res => {
      this.appraise = res.data.data.goodsAppraise
    });
    axios.get('https://www.easy-mock.com/mock/5b6168530f34b755cbc58b18/mock/api/goods/detail', {
      params: {
        id: this.$route.params.id
      },
    })
    .then(res => {
      console.log(res)
      this.goodsDetail = res.data.data.goodsDetail
      
    })
  },
  methods:{
    openDialog(){
      this.shareDialog = true
    },
    closeDialog(){
      this.shareDialog = false
    }
  }
}
</script>
<style scoped lang='styl'>
  .underwear{
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    z-index:1001;
    background-color: #fff;
  }
</style>


