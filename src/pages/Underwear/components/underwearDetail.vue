<template>
    <div class="product-detail">
        <div class="product-title" v-show="showTitle">
            <span class="detail">详情</span>
            <span class="evaluate">评价</span>
        </div>
        <div class="product-msg">
            <p class="cname">{{goods.brandId}}</p>
            <p class="ename">舒适居家 安心睡眠 </p>
            <p class="line"></p>
            <p class="intro" v-html="goods.content">{{goods.content}}</p>
        </div>
        <img src="@/assets/kind/big.png" alt="sorry" class="big">
    </div>
</template>
<script>
export default {
    props:['goods'],
    data(){
        return{
            showTitle:false,
            opacityStyle: {
                opacity: 0
            }
        }
    },
    methods: {
        handleScroll() {
            const top = document.documentElement.scrollTop;
            var detail = document.getElementsByClassName('detail')[0];
            var evaluate = document.getElementsByClassName('evaluate')[0];
            // console.log(top)
            if (top > 570) {
                let opacity = top /570 ;
                this.opacityStyle = { opacity };
                this.showTitle = true;
            } else {
                this.showTitle = false
            };
            // console.log(ass)
            if (top > 570 && top < 1265) {
                detail.style.color = '#1C4B47'
                evaluate.style.color = '#999999';
            } else {
                detail.style.color = '#999999'
            }
            if (top > 1265) {
                evaluate.style.color = '#1C4B47';
            }
        }
    },
    mounted() {
        window.addEventListener('scroll', this.handleScroll)
    },
    //移除监听事件
    destroyed() {
        window.removeEventListener('scroll', this.handleScroll);
    }
}
</script>
<style scoped lang='styl'>
    .product-detail{
        position: relative;
        width: 100%;
        height: 100%;
        /* margin-top:-355px; */
        background-color: #fff;
        .product-title{
            position: fixed;
            left: 50%;
            top: 50px;
            transform:translateX(-50%);
            width: 120px;
            height: 24px;
            font-size: 17px;
            color: #1C4B47;
            line-height:24px;
            overflow: hidden;
            z-index:1001;
            .detail{
                float: left;
            }
            .evaluate{
                float: right;
                color: #999999;
            }
        }
        .product-msg{
            position: absolute;
            left: 50%;
            top: 25px;
            transform:translateX(-50%);
            /* margin-left:108px;
            margin-top: -80px; */
            width: 158px;
            height: 194px;
            text-align: center;
            line-height:28px;
            .etitle{
                font-size: 20px;
                color: #010E0D;
            }
            .cname{
                font-size: 16px;
                color: #010E0D;
            }
            .ename{
                font-size: 10px;
                color: #494949;
                letter-spacing: 6.8px;
            }
            .line{
                width: 109px;
                height: 2px;
                margin-left: 24px;
                background-color: #999;
            }
            .intro{
                font-size: 10px;
                color: #494949;
            }
        }
        .big{
            position: absolute;
            left: 18px;
            top: 235px;
        }
    }
</style>


