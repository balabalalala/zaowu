<template>
    <div class="commend">
        <ul class="group">
            <li><a href="javascript">推荐</a><span></span></li>
            <li><a href="javascript">活动</a><span></span></li>
            <li><a href="javascript">品牌</a><span></span></li>
            <li><a href="javascript">定制</a><span class="clear"></span></li>
        </ul>
    </div>
</template>
<script>
export default {
    data() {
        return {

        }
    }
}
</script>
<style scoped lang='styl'>
    .commend{
        position: fixed;
        left: 0;
        top: 64px;
        background: #fff;
        z-index: 5;
        width: 100%;
        height: 42px;
        .group{
            display: inline-block;
            width: 270px;
            height: 21px;
            margin-left:79px;
            li{
                float: left;
                a{
                    width: 30px;
                    height: 100%;
                    font-size: 15px;
                    color: #010E0D;
                    /*border-right: 1px solid #E5E5E5;*/
                    padding: 0 13px;
                }
                span{
                    display: inline-block;
                    height: 12px;
                    border-right:1px solid #e5e5e5;
                }
                .clear{
                    border:0;
                }
            }
        }
    }
</style>