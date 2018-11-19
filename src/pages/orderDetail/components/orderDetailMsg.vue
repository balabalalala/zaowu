<template>
    <div class="order-detail-msg">
        <div class="order-msg">
            <p>订单编号：2217896</p>
            <p>下单时间：2018-09-16 19:00:03</p>
            <p>发货时间：2018-09-16 20:00:02</p>  
        </div>
        <div class="contact-btns">
            <div class="left-btn">
                <img src="@/assets/home/ear.png" alt="" class="ear">
                <span class="contact">联系客服</span>
            </div>
            <div class="right-btn">
                <img src="@/assets/home/consult1.png" alt="" class="ear">
                <span class="contact">联系客服</span>
            </div>
        </div>
    </div>
</template>
<script>
export default {
  
}
</script>
<style lang='styl'>
    .order-detail-msg{
        position: relative;
        width: 100%;
        margin-top: 10px;
        .order-msg{
            position: absolute;
            left: 19px;
            top: 10px;
            width: 356px;
            height: 80px;
            /* padding-left: 19px; */
            p{
                font-size: 16px;
                color: #494949;
                line-height:24px;
            }
        }
        .contact-btns{
            position: absolute;
            left: 0;
            top: 100px;
            width: 100%;
            height: 50px;
            font-size: 16px;
            color: #494949;
            text-align:center;
            line-height:50px;
            border-bottom: 1px solid #e5e5e5;
            border-top: 1px solid #e5e5e5;
            .left-btn{
                display: inline-block;
                float: left;
                width: 49%;
                height: 100%;
                border-right: 1px solid #e5e5e5;
            }
            .right-btn{
                width: 49%;
                 height: 100%;
                float: right;
                
            }        
        }
    }
</style>


