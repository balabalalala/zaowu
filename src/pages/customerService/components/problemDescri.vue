<template>
  <div class="problem-descri">
      <div class="problem-content">
          <p class="problem-title">问题描述</p>
          <div class="problem-item">
             <p class="descri">请您在此描述问题</p>
             <p class="num">0/500</p>
          </div>
      </div>
      <div class="picture">
        <div class="photogra">
            <img src="@/assets/my/photo2.png" alt="sorry">
            <img src="@/assets/my/photo1.png" alt="sorry">
        </div>
      </div>
      <button class="submit">提交</button>
  </div>
</template>
<script>
export default {
  
}
</script>
<style scoped lang='styl'>
    .problem-descri{
        position: absolute;
        left: 0;
        top: 50%;
        transform: translateY(10%);
        width: 100%;
        height: 212px;
        .problem-content{
            width: 375px;
            height: 100%;
            padding-left:20px;
            box-sizing:border-box;
            .problem-title{
                font-size: 16px;
                color: #010E0D;
                letter-spacing: 0.19px;
            }
            .problem-item{
                position: relative;
                width: 336px;
                height: 154px;
                margin-top: 19px;
                background: #F9F9F9;
                border-radius: 4px;
                font-size: 14px;
                color: #999999;
                letter-spacing: 0.17px;
                .descri{
                    position: absolute;
                    left: 8px;
                    top: 7px;
                }
                .num{
                    position: absolute;
                    right: 4px;
                    bottom: 4px;
                }
            }
        }
        .picture{
            width: 100%;
            height: 72px;
            padding-left:21px;
            box-sizing:border-box;
            margin-bottom: 32px;
            .photogra{
                width: 100%;
                height: 100%;
                img{
                    margin-right: 18px;
                }
            }
        }
        .submit{
            position: absolute;
            left: 50%;
            transform: translateX(-50%) translateY(70%);
            bottom: -50%;
            width: 185px;
            height: 44px;
            background: #1C4B47;
            border-radius: 8px;
            font-size: 16px;
            color: #FFFFFF;
            line-height: 44px;
            letter-spacing: 0.19px;
            text-align: center;
        }
    }
</style>


