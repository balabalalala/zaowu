<template>
  <div class="logisticHeader">
      <div class="logistic-header">
          <a href="javascript:;" class="search" @click="$router.go(-1);"><img src="@/assets/home/return.png" alt=""></a>
          <p class="title">物流详情</p>
        </div>
  </div>
</template>
<script>
export default {
  
}
</script>
<style scoped lang='styl'>
    .logisticHeader{
        width: 100%;
        /*height: 100%;*/
        .logistic-header {
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
                font-size: 18px;
                color: #010E0D;
                text-align: center;
            }
        }
    }
</style>


