<template>
	<div class="home">
		<xp-header class="home-header"></xp-header>
		<xp-commend></xp-commend>
		<xp-banner/>
		<xp-title :time1='time' :stitle='stitle'></xp-title>
		<xp-content></xp-content>
	</div>
</template>
<script>
	import XpHeader from '@/components/header'
	import XpCommend from './components/commend'
	import XpBanner from './components/banner'
	import XpTitle from './components/title'
	import XpContent from './components/content'
	export default{
		components:{
			XpHeader,
			XpCommend,
			XpBanner,
			XpTitle,
			XpContent
		},
		data(){
			return {
				time :'-TUE 9.18-',
				stitle:'周二品质生活专题',
			}
		}
	}
</script>
<style scoped lang="styl">
	.home{
		float: left;
		padding-bottom: 68px;
		overflow: hidden;
	}
</style>