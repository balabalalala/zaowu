<template>
  <div class="money-detail">
    <p class="pay">
        <span class="left-pay">运费</span>
        <span class="right right-pay">¥0.00</span>
    </p>
    <p class="discount">
        <span class="left-discount">优惠</span>
        <span class="right right-discount">¥0.00</span>
    </p>
    <p class="real-pay">
        <span class="left-pay">实付款（含运费）</span>
        <span class="right real-money">¥ 438</span>
    </p>
</div>
</template>
<script>
export default {
  
}
</script>
<style scoped lang='styl'>
    .money-detail{
            /* position: absolute;
            left: 19px;
            top: 58%;
            transform:translateY(100%); */
            position: relative;
            width: 356px;
            height: 82px;
            padding-left: 19px;
            margin-top: 208px;
            border-bottom: 1px solid #e5e5e5;
            p{
                font-size: 16px;
                color: #494949;
                line-height:24px;
                .right{
                    float: right;
                    margin-right: 38px;
                }
            }
            .real-pay{
                font-size: 16px;
                .real-money{
                    color: #1C4B47;
                }
            } 
        }
</style>


