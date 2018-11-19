<template>
  <div class="register-header">
      <img src="@/assets/home/return.png" @click="$router.go(-1);" alt="" class="arrow">
      <img src="@/assets/register/header.png" alt="" class="bg">
  </div>
</template>
<script>
export default {
  
}
</script>
<style scoped lang='styl'>
    .register-header{
        width: 100%;
        height: 20px;
        .arrow{
            position: absolute;
            left: 14px;
            top: 14px;
        }
        .bg{
            position: absolute;
            left: 111px;
            top: 71px;
        }
    }
</style>


