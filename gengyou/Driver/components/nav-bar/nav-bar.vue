<template>
	<view>
		<u-navbar
		:title="title"
		:isBack="isBack"
		:background="navBg"
		:title-color="titleColor"
		:title-bold="titleBold"
		:border-bottom="borderBottom"
		:is-back="isBack"
		:back-icon-color="backColor"
		:back-text-style="textStyle"
		:back-text="backText"
		></u-navbar>
	</view>
</template>

<script>
	export default {
		name:'navBar',
		props:{
			navBg: {
				type: Object,
				default: ()=> { background: 'linear-gradient(-100deg, #3945D9, #4E61F7)' }
			},
			title: {
				type: String,
				default: "青海隆鼎驾培城"
			},
			titleColor: {
				type: String,
				default: "#fff"
			},
			isBack: {
				type: Boolean,
				default: true
			},
			backColor: {
				type: String,
				default: "#606266"
			},
			textStyle: {
				type: Object,
				default: ()=> { color: '#606266' }
			},
			borderBottom: {
				type: Boolean,
				default: false
			},
			titleBold: {
				type: Boolean,
				default: true
			}
		},
		data() {
			return {
				backText: '返回'
			};
		}
	}
</script>

<style lang="scss">

</style>
