<template>
	<div class="nav-box">
		<ul class="nav">
			<router-link tag='li' to='/' exact class="first">
				<div class="bg"></div>
				<p class="word">首页</p>
			</router-link>
			<router-link tag='li' to='/kind'  class="two">
				<div class="bg"></div>
				<p class="word">分类</p>
			</router-link>
			<router-link tag='li' to='/find'  class="three">
				<div class="bg"></div>
				<p class="word">发现</p>
			</router-link>
			<router-link tag='li' to='/my'  class="last">
				<div class="bg"></div>
				<p class="word">我的</p>
			</router-link>
		</ul>
	</div>
</template>
<script>
	export default {
	props: {
	},
	data() {
		return {
		}
	},
	created(){
	}
	
}
</script>
<style scoped lang="styl">
		.nav{
			position: fixed;
			left: 0;
			bottom: 0;
			width: 100%;
			z-index: 9999;
			background-color: #ffffff;
			height: 83px;
			li{
				margin-top: 20px;
				float: left;
				width: 25%;
				height: 100%;
				text-align: center;
				p{
					margin-top: 6px;
					font-size: 12px;
					color: #8E8E93;
					text-align: center;
				}
			}
		}
		/*底部导航栏字体的激活样式*/
		li.router-link-exact-active .word{
			color: #1C4B47;
		}
		/*底部导航栏图片,点击的时候切换背景图片*/
		.bg{
			height: 31px;
			background-size 31px 31px
		}
		li.first .bg{
			background: url('../assets/home/index2.png') no-repeat center
			background-size 31px 31px
		}
		li.router-link-active.first .bg{
			background: url('../assets/home/index.png') no-repeat center
			background-size 31px 31px
		}
		li.two .bg{
			background: url('../assets/home/category.png') no-repeat center
			background-size 31px 31px
		}
		li.router-link-active.two .bg{
			background: url('../assets/home/category2.png') no-repeat center
			background-size 31px 31px
		}
		li.three .bg{
			background: url('../assets/home/find1.png') no-repeat center
			background-size 31px 27px
		}
		li.router-link-active.three .bg{
			background: url('../assets/home/find2.png') no-repeat center
			background-size 31px 27px
		}
		li.last .bg{
			background: url('../assets/home/my.png') no-repeat center
			background-size 31px 31px
		}
		li.router-link-active.last .bg{
			background: url('../assets/home/my2.png') no-repeat center
			background-size 31px 31px
		}
	

</style>