<template>
    <div class="express-detail">
        <div class="express-container">
            <div class="box1">
                <div class="time">
                    <p class="date">09-16</p>
                    <p class="hour">18:30</p>
                </div>
                <img src="@/assets/home/ex1.png" alt="sorry" class="icon1">
                <div class="line"></div>
                <div class="carry">
                    <p class="carry-title">派送中</p>
                    <p class="carry-address">河南省郑州市北环派件员 李明 正在为您派件</p>
                </div>
            </div>
            <div class="box1 box2">
                <div class="time">
                    <p class="date">09-16</p>
                    <p class="hour">14:30</p>
                </div>
                <img src="@/assets/home/ex2.png" alt="sorry" class="icon1">
                <div class="line"></div>
                <div class="carry">
                    <p class="carry-title">运输中</p>
                    <p class="carry-address">河南省郑州市北环公司 已收入</p>
                </div>
            </div>
            <div class="box1 box3">
                <div class="time">
                    <p class="date">09-16</p>
                    <p class="hour">11:30</p>
                </div>
                <span class="circle"></span>
                <div class="line"></div>
                <div class="carry">
                    <p class="carry-title">郑州转运中心公司 已发出，下一站 河南省郑州市北环</p>
                    <!--<p class="carry-address">河南省郑州市北环公司 已收入</p>-->
                </div>
            </div>
            <div class="box1 box4">
                <div class="time">
                    <p class="date">09-16</p>
                    <p class="hour">19:30</p>
                </div>
                <span class="circle"></span>
                <div class="line"></div>
                <div class="carry">
                    <p class="carry-title">郑州转运中心公司 已收入</p>
                    <!--<p class="carry-address">河南省郑州市北环公司 已收入</p>-->
                </div>
            </div>
            <div class="box1 box5">
                <div class="time">
                    <p class="date">09-15</p>
                    <p class="hour">19:30</p>
                </div>
                <span class="circle"></span>
                <div class="line"></div>
                <div class="carry">
                    <p class="carry-title">杭州转运中心公司 已发出，下一站 郑州转运中心</p>
                    <!--<p class="carry-address">河南省郑州市北环公司 已收入</p>-->
                </div>
            </div>
            <div class="box1 box6">
                <div class="time">
                    <p class="date">09-15</p>
                    <p class="hour">10:30</p>
                </div>
                <span class="circle"></span>
                <div class="line"></div>
                <div class="carry">
                    <p class="carry-title">杭州转运中心公司 已收入</p>
                    <!--<p class="carry-address">河南省郑州市北环公司 已收入</p>-->
                </div>
            </div>
            <div class="box1 box7">
                <div class="time">
                    <p class="date">09-15</p>
                    <p class="hour">4:30</p>
                </div>
                <span class="circle"></span>
                <div class="line"></div>
                <div class="carry">
                    <p class="carry-title">浙江省杭州市秋涛路公司 已发出，下一站 杭州转运中心</p>
                    <!--<p class="carry-address">河南省郑州市北环公司 已收入</p>-->
                </div>
            </div>
            <div class="box1 box8">
                <div class="time">
                    <p class="date">09-14</p>
                    <p class="hour">18:30</p>
                </div>
                <img src="@/assets/home/ex3.png" alt="sorry" class="icon1">
                <div class="line"></div>
                <div class="carry">
                    <p class="carry-title">已揽件</p>
                    <p class="carry-address">浙江省杭州市秋涛路公司 已收件</p>
                </div>
            </div>
            <div class="box1 box9">
                <div class="time">
                    <p class="date">09-14</p>
                    <p class="hour">18:30</p>
                </div>
                <img src="@/assets/home/ex4.png" alt="sorry" class="icon1">
                <div class="carry">
                    <p class="carry-title">已发货</p>
                    <p class="carry-address">卖家发货</p>
                </div>
            </div>
            <div class="express-line">
            </div>
        </div>
    </div>
</template>
<script>
export default {
  
}
</script>
<style scoped lang='styl'>
    .express-detail{
        width: 100%;
        .express-container{
            position: absolute;
            left: 18px;
            top: 375px;
            /* transform:translateY(-50%); */
            width: 336px;
            /*height: 200px;*/
            .box1{
                position: absolute;
                left: 42px;
                top: -100px;
                width: 300px;
                line-height: 20px;
                .time{
                    position: absolute;
                    left: -48px;
                    top: 0;
                    width: 40px;
                    height: 36px;
                    font-size: 14px;
                    color: #1C4B47;
                    text-align:right;
                    .hour{
                        font-size: 11px;
                    }
                }
                .line{
                    position: absolute;
                    left: 12px;
                    top:24px;
                    width: 1px;
                    height: 30px;
                    background:#999;
                }
                .carry{
                    position: absolute;
                    left: 34px;
                    top: 0;
                    font-size: 16px;
                    color: #034C46;
                    .carry-address{
                        font-size: 13px;
                    }
                }
            }
            .box2{
               top: -46px;
               .line{
                   height: 46px;
               }
            }
            .box3{
                top:7px;
                .circle{
                    position: absolute;
                    left: 9.6px;
                    top: 17px;
                    display: inline-block;
                    width: 6px;
                    height: 6px;
                    border-radius:50%;
                    background:#999;
                }
                .line{
                    top:23px;
                    height: 48px;
                }
                .carry-title{
                    font-size: 13px;
                    color: #999999;
                }
            }
            .box4{
                top:61px;
                .circle{
                    position: absolute;
                    left: 9.6px;
                    top: 17px;
                    display: inline-block;
                    width: 6px;
                    height: 6px;
                    border-radius:50%;
                    background:#999;
                }
                .line{
                    top:23px;
                    height: 48px;
                }
                .carry-title{
                    font-size: 13px;
                    color: #999999;
                }
            }
            .box5{
                top:113px;
                .circle{
                    position: absolute;
                    left: 9.6px;
                    top: 17px;
                    display: inline-block;
                    width: 6px;
                    height: 6px;
                    border-radius:50%;
                    background:#999;
                }
                .line{
                    top:23px;
                    height: 48px;
                }
                .carry-title{
                    font-size: 13px;
                    color: #999999;
                }
            }
            .box6{
                top:167px;
                .circle{
                    position: absolute;
                    left: 9.6px;
                    top: 17px;
                    display: inline-block;
                    width: 6px;
                    height: 6px;
                    border-radius:50%;
                    background:#999;
                }
                .line{
                    top:23px;
                    height: 48px;
                }
                .carry-title{
                    font-size: 13px;
                    color: #999999;
                }
            }
            .box7{
                top:220px;
                .circle{
                    position: absolute;
                    left: 9.6px;
                    top: 17px;
                    display: inline-block;
                    width: 6px;
                    height: 6px;
                    border-radius:50%;
                    background:#999;
                }
                .line{
                    top:23px;
                    height: 36px;
                }
                .carry-title{
                    font-size: 13px;
                    color: #999999;
                }
            }
            .box8{
                top: 278px;
                .carry{
                   color: #999999;
                }
            }
            .box9{
                top: 331px;
                .carry{
                   color: #999999;
                }
            }
        }
    }
</style>


