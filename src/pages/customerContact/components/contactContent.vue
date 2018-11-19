<template>
  <div class="contact-content">
      <div class="container">
        <div class="say">
            <img src="@/assets/my/say1.png" class="photo" alt="sorry">
            <p class="sentence">亲爱的造物用户，您已经进入人工服务</p>
        </div>
        <div class="reply">
            <img src="@/assets/my/say2.png" class="photo" alt="sorry">
            <div class="detail">
                 <img src="@/assets/my/say3.png" class="header" alt="sorry">
                 <div class="reply-word">
                    <p class="sentence">儿童房装饰品小摆件 仿真动物支架鲸鱼摆件</p>
                    <p class="money">¥344</p>
                 </div>
            </div>
        </div>
        <div class="say say2">
            <img src="@/assets/my/say1.png" class="photo" alt="sorry">
            <p class="sentence">小独角兽觅觅很高兴为您服务，请问有什么可以帮您？</p>
        </div>
        <div class="input-word">
            <input type="text" placeholder="我想问..." class="ans">
            <img src="@/assets/home/smile.png" alt="sorry" class="smile">
            <img src="@/assets/home/input.png" alt="sorry" class="add">
        </div>
      </div>
  </div>
</template>
<script>
export default {
  
}
</script>
<style scoped lang='styl'>
    .contact-content{
        width: 100%;
        padding-top:79px;
        .container{
            position: relative;
            width: 100%;
            /*height: 100%;*/
            .say{
                position: relative;
                width: 250px;
                height: 53px;
                padding-left: 15px;
                .photo{
                    width: 53px;
                    height: 53px;
                }
                .sentence{
                    position: absolute;
                    left: 77px;
                    top: 0;
                    padding:7px 5px;
                    box-sizing:border-box; 
                    width: 175px;
                    height: 51px;
                    background: #fff;
                    line-height:20px;
                    font-size: 13px;
                    color: #494949;
                }
            }
            .reply{
                position: absolute;
                left: 50%;
                top: 100px;
                transform: translateX(-25%);
                width: 250px;
                height: 67px;
                .photo{
                    position: absolute;
                    left: 50%;
                    top: 50%;
                    width: 51px;
                    height: 51px;
                    transform: translateX(120%) translateY(-50%);
                }
                .detail{
                    position: absolute;
                    left: -50%;
                    top: 0;
                    transform: translateX(50%);
                    width: 200px;
                    height: 67px;
                    background: #fff;
                    .header{
                        position: absolute;
                        left: 18px;
                        top: 6px;
                        width: 39px;
                        height: 55px;
                    }
                    .reply-word{
                        position: absolute;
                        left: 66px;
                        top: 6px;
                        width: 100%;
                        height: 100%;
                        .sentence{
                            font-size: 10px;
                            color: #494949;
                            line-height:20px;
                            width: 120px;
                            height: 28px;
                        }
                        .money{
                            position: absolute;
                            left: 0;
                            bottom:6px;
                            width: 29px;
                            height: 17px;
                            font-size: 12px;
                            color: #000000;
                        }
                    }
                }
            }
            .say2{
                top: 160px;
            }
            .input-word{
                position: fixed;
                left: 0;
                bottom: 0;
                width: 100%;
                height: 48px;
                background: #fff;
                .ans{
                    position: absolute;
                    left: 9px;
                    top: 6px;
                    width: 283px;
                    height: 35px;
                    font-size: 15px;
                    color: #999999;
                }
                .smile{
                    position: absolute;
                    right: 40px;
                    top: 10px;
                }
                .add{
                    position: absolute;
                    right: 8px;
                    top: 10px;
                }
            }
        }
    }
</style>


