<template>
  <div class="underwear">
      <underwear-header @openDialog="openDialog"></underwear-header>
      <underwear-banner></underwear-banner>
      <underwear-intro :goodsDetail='goodsDetail'></underwear-intro>
      <underwear-detail></underwear-detail>
      <underwear-evaluate :appraise='appraise'></underwear-evaluate>
      <share-dialog :shareDialog="shareDialog" @closeDialog="closeDialog"></share-dialog>
      <underwear-nav :goodsDetail='goodsDetail'></underwear-nav>
  </div>
</template>
<script>
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
        goodsDetail:{
        },
        shareDialog:false,
    }
  },
  created(){
    axios.get('https://www.easy-mock.com/mock/5b6168530f34b755cbc58b18/mock/api/goods/detail/appraise', {
      params: {
        id: this.$route.params.id
      },
    })
    .then(res => {
      // console.log(res)
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
      // console.log(this.goodsDetail)
      
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
    /*height: 100%;*/
    z-index:1001;
    background-color: #fff;
  }
</style>


