<template>
  <div class="payment-header">
      <div class="payment-header-content">
        <a href="javascript:;" class="search" @click="$router.go(-1);"><img src="@/assets/home/return.png" alt=""></a>
        <p class="title">支付绑定</p>
      </div>
  </div>
</template>
<script>
export default {
  
}
</script>
<style lang='styl'>
.payment-header {
    width: 100%;
    height: 100%;
    .payment-header-content{
        position: fixed;
        left: 0;
        top: 0;
        width: 100%;
        height: 40px;
        padding-top: 11px;
        line-height: 40px;
        z-index:6;
        background:#fff;
        .search {
            position: absolute;
            left: 16px;
            top: 14px;
            width: 20px;
            height: 20px;
        }
        .title {
            padding-top:5px;
            font-size: 20px;
            color: #000000;
            text-align: center;
        }
    }
}
</style>


