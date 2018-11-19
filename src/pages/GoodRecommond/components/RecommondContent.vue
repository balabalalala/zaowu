<template>
    <div class="recomm-content">
        <div class="content">
            <img src="@/assets/find/item1.png" alt="" class="item1">
            <p class="intro">可居家可外出的cozy look。它适合床，沙发，咖啡
店，美术馆，森林公园…… ​​​​</p>
            <img src="@/assets/find/item2.png" alt="" class="item2">
            <div class="img-detail">
                <span class="com-detail price">¥ 475.80</span>
                <img src="@/assets/home/heart.png" class="com-detail heart" alt="sorry">
                <span class="com-detail like">1180人喜欢</span>
                <span class="com-detail detail">查看详情</span>
            </div>
            <div class="descri">
                <p class="descri-title">Foundation无缝吊带＆In Bed睡裤与睡袍</p>
                <p class="descri-intro">一套舒适的家居服，是我们缓解疲劳与想家情绪的最佳良品。直筒罗纹睡裤，蓬松柔软，搭配同色系的无缝吊带，简约又清爽。早晚有温差时，可以加一件这样的外搭。棉的质感，给人安心和温暖。”</p>
            </div>
        </div>
    </div>
</template>
<script>
export default {
  
}
</script>
<style scoped lang='styl'>
    .content{
        position: absolute;
        top: 50px;
        left: 50%;
        transform: translateX(-50%)
        height: 100%;
        .intro{
            width: 333px;
            height: 60px;
            line-height: 20px;
            font-size: 14px;
            color: #494949;
        }
        .img-detail{
            position: relative;
            left: 0;
            top: 10px;
            font-size: 11px;
            color: #010E0D;
            text-align: center;
            .com-detail{
                position: absolute;
                left: 0;
                top: 0;
            }
            .heart{
                left: 180px;
                width: 15px;
                height: 14px;
            }
            .like{
                left: 210px;
                font-size: 10px;
            }
            .detail{
                left: auto;
                top: -6px;
                right: 40px;
                width: 54px;
                height: 20px;
                line-height: 20px;
                font-size: 11px;
                border: 1px solid #999;
                border-radius: 8px;
            }
        }
        .descri{
            position: relative;
            .descri-title{
                position: absolute;
                left: 0;
                top: 43px;
                font-size: 14px;
                font-weight:bold;
                color: #010E0D;
            }
            .descri-intro{
                position: absolute;
                left: 0;
                top: 50%;
                transform: translateY(65%);
                width: 339px;
                height: 100px;
                font-size: 14px;
                color: #1F1F1F;
                line-height: 20px;
            }
        }
    }
</style>


