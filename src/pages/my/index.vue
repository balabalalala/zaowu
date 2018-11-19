<template>
	<div class="my">
		<xp-banner></xp-banner>
		<xp-list></xp-list>
		<xp-adress></xp-adress>
		<router-view></router-view>
	</div>
</template>
<script>
	import XpBanner from './components/banner'
	import XpList from './components/list'
	import XpAdress from './components/adress'
	export default{
		components:{
			XpBanner,
			XpList,
			XpAdress
		},
	}
</script>
<style scoped lang="styl">
	.my{
		padding-bottom: 185px;
		overflow: hidden;
		background: #f5f5f5;
	}
</style>