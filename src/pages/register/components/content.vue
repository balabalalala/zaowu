<template>
   <div class="content">
       <div class="register-text">
            <input type="text" class="num" placeholder="请输入手机号">
            <button class="identify">获取验证码</button>
            <input type="text" class="num input-ident" placeholder="请输入验证码">
            <button class="click-register">注册</button>
       </div>
   </div>
</template>
<script>
export default {
  
}
</script>
<style scoped lang='styl'>
 .register-text{
     position: absolute;
     left: 66px;
     top: 277px;
     width: 241px;
     height: 80px;
     .num{
         position: absolute;
         left: 0;
         top: 0;
         height: 50%;
         line-height:20px;
         font-size: 14px;
         color: #A4A4A4;
         border-bottom:1px solid #bdbdbd;
     }
     .identify{
         position: absolute;
         right: -6px;
         top: 11px;
         width: 84px;
         height: 30px;
         font-size: 14px;
         color: #FFFFFF;
         text-align: center;
         background-color: #1c4b47;
         border-radius: 4px;
     }
     .input-ident{
         width: 241px;
         left: 0;
         top: 48px;
         border-bottom: 1px solid #bdbdbd;
     }
     .click-register{
         position: absolute;
         left: 0;
         top: 120px;
         width: 243px;
         height: 44px;
         font-size: 16px;
         color: #FFFFFF;
         text-align: center;
         background-color: #1C4B47;
         border-radius: 4px;
     }
 }
</style>


