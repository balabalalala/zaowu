<template>
  <div class="detail-nav">
      <div class="bottom-nav">
        <input class="view" type="text" placeholder="发表你的观点吧">
        <img src="@/assets/home/like.png" alt="sorry" class="nav-img msg">
        <img src="@/assets/home/msg.png" alt="sorry" class="nav-img like">
      </div>
  </div>
</template>
<script>
export default {
  
}
</script>
<style scoped lang='styl'>
    .bottom-nav{
        position: fixed;
        left: 0;
        bottom: 0;
        z-index: 999;
        background-color: #fff;
        width: 100%;
        height: 40px;
        padding-bottom: 10px;
        .view{
            position: absolute;
            left: 20px;
            top: 12px;    
            width: 220px;
            height: 28px;
            border: 1px solid #999;
            border-radius:8px;
        }
        .nav-img{
           position: absolute; 
           top: 12px;
        }
        .msg{
            right: 78px;
            top: 12px;
        }
        .like{
            top: 12px;
            right: 22px;
        }
    }
</style>


