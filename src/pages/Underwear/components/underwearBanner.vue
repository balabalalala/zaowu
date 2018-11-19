<template>
    <div class="banner">
        <swiper :options="swiperOption" ref="mySwiper" class='sw'>
            <!-- slides -->
            <swiper-slide><img src="@/assets/kind/wares1.png" alt="sorry"></swiper-slide>
            <swiper-slide><img src="@/assets/kind/wares2.png" alt="sorry"></swiper-slide>
            <swiper-slide><img src="@/assets/kind/wares3.png" alt="sorry"></swiper-slide>
            <!-- Optional controls -->
        </swiper>
            <div class="swiper-pagination" slot="pagination"></div>
    </div>
</template>
<script>
export default {
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
    /* position: absolute; */
    /* left: 0; */
    position: relative;
    margin-top: 56px;
    width: 375px;
    height: 383px;
    .sw{
        height: 100%;
        padding: 0 50px;
    }
    .swiper-pagination{
        margin-left: 141px;
        margin-top: 44px;
    }
}
</style>