<template>
  <div class="add-adress">
        <div class="goods-adress">
            <div class="word">
                <span class="collect">添加收货地址</span>
                <img src="@/assets/home/arrow.png" alt="sorry" class="arrow">
            </div>
            <div class="item">
                <div class="picture">
                <img src="@/assets/home/1.png" alt="sorry" class="photo">
                </div>
                <div class="item-word">
                    <p class="brand">CRYSTALS</p>
                    <p class="cname">零敏洛丽无钢圈内衣</p>
                    <div class="money">
                        <span class="price">¥349</span>
                        <span class="num">x2</span>
                    </div>
                </div>
            </div>
        </div>
  </div>
</template>
<script>
export default {
  
}
</script>
<style scoped lang='styl'>
    .add-adress{
        width: 100%;
        .goods-adress{
            width: 100%;
            height: 100%;
            .word{
                width: 330px;
                height: 22px;
                margin-top:10px;
                margin-left: 18px;
                margin-bottom: 25px;
                .collect{
                    font-size: 16px;
                    color: #010E0D;
                }
                .arrow{
                    float: right;
                    margin-right:-4px;
                }
            }
            .item{
                position: relative;
                width: 334px;
                height: 114px;
                margin-top:20px;
                background: #f9f9f9;
                margin: 0 auto;
                border-radius: 4px;
                .picture{
                    position: absolute;
                    left: 6px;
                    top: 20px;
                    .photo{
                        margin-left:24px;
                    }
                }
                .item-word{
                    position: absolute;
                    left: 122px;
                    top:20px;
                    p{
                        margin-bottom:7px;
                        font-size: 14px;
                        color: #494949;
                        line-height: 20px;
                    }
                    .price{
                        font-size: 14px;
                        color: #1C4B47;
                    }
                    .num{
                        position: absolute;
                        right: -50px;
                        bottom: 0;
                        font-size: 14px;
                        color: #010E0D;
                    }
                }
            }
        }
    }
</style>


