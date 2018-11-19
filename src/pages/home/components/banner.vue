<template>
	<div class="banner">
		 <swiper :options="swiperOption" ref="mySwiper" class='sw'>
		    <!-- slides -->
		    <swiper-slide><img src="@/assets/home/list2.png" alt="sorry"></swiper-slide>
		    <swiper-slide><img src="@/assets/home/list1.png" alt="sorry"></swiper-slide>
		    <swiper-slide><img src="@/assets/home/list3.png" alt="sorry"></swiper-slide>
		    <!-- Optional controls -->
		 </swiper>
		 <span class="line"></span>
	</div>
</template>
<script>
	export default {
		data(){
			return {
				swiperOption: {//swiper3
			      autoplay: 3000,
			      speed: 1000,
			      height:500,
				//   slidesPerView: 1.2, 
				//   centeredSlides: true,              //居中展示                        
				  spaceBetween: 20,           //间距20px
				//   slidesPerView: 'auto',   
			    }
			}
		}
	}
</script>
<style scoped lang='styl'>
	.banner{
		margin-top: 106px;
		width: 375px;
		height: 394px;
		.sw{
				height: 100%;
				padding:0 50px;
			}
			.line{
				display: block;
				width: 100%;
				height: 5px;
				background: #f9f9f9;
			}
		
	}
</style>