<template>
  <div class="coupon">
    <coupon-Detail></coupon-Detail>
  </div>
</template>
<script>
import couponDetail from './components/couponDetail'
import { mapMutations } from 'vuex'
export default {
  components:{
      couponDetail,
  },
   created() {
      this.setNavShow(false)
  },
  methods: {
      ...mapMutations({
          setNavShow: 'setNavShow'
      })
  }
}
</script>
<style scoped lang='styl'>
    .coupon{
        position: absolute;
        left: 0;
        top: 0;
        right: 0;
        bottom: 0;
        background-color: #f5f5f5;
    }
</style>


