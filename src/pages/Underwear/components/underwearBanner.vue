<template>
    <div class="banner">
        <swiper :options="swiperOption" ref="mySwiper" class='sw'>
            <!-- slides -->
            <swiper-slide class="bannerImg"  v-for="(item,index) of imglist"  :key='index'>
                <img :src="'http://192.168.0.171/'+item" alt="sorry">
            </swiper-slide>
        </swiper>
            <div class="swiper-pagination" slot="pagination"></div>
    </div>
</template>
<script>
export default {
    props:['imglist'],
    data() {
        return {
            swiperOption: {//swiper3
                autoplay: 3000,
                speed: 1000,
                height: 500,
                //   slidesPerView: 1.2, 
                //   centeredSlides: true,              //居中展示                        
                spaceBetween: 20,           //间距20px
                //   slidesPerView: 'auto',
                 pagination: {
                    el: '.swiper-pagination',
                }
            }
        }
    }
}
</script>
<style scoped lang='styl'>
.banner >>>.swiper-pagination-bullet{
  width:22px;
  height:2px;
  margin:0 5px;
  background:#1c4b47;
}
.banner {
    position: relative;
    margin-top: 56px;
    width: 375px;
    height: 383px;
    .sw{
        height: 100%;
        padding: 0 50px;
        .bannerImg{
            width: 275px;
            margin-right: 43px;
            img{
                width: 275px;
                height: 383px;
            }
        }
    }
    .swiper-pagination{
        margin-left: 141px;
        margin-top: 44px;
    }
}
</style>