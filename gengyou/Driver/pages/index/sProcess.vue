<template>
	<view class="background">
		<navBar
		:navBg = "navBg"
		:title = "title"
		:textStyle = "textStyle"
		:backColor = "backColor"
		></navBar>
		<view class="title">
			<text>学车流程介绍</text>
		</view>
		<view class="content">
			<u-parse :html="content" :selectable="true" :tag-style="style"></u-parse>
		</view>
	</view>
</template>

<script>
	import navBar from "@/components/nav-bar/nav-bar.vue"
	
	export default {
		components:{
			navBar
		},
		data() {
			return {
				navBg: { background: '#62D5E5' },
				title: "学车流程",
				textStyle: { color: '#fff' },
				backColor: "#fff",
				backColor: "#fff",
				content:'',
				style: {
					p: 'font-size:32rpx'
				}
			};
		},
		onLoad() {
			this.$u.api.getExam().then( res => {
				this.content = res.exam
				console.log(res)
			})
		}
	}
</script>

<style lang="scss" scoped>
	uni-page-body {
		height: 100%;
	}
	.background {
		padding: 0 24rpx;
		height: 100%;
		background: linear-gradient(0deg, #3B9DF6, #64D9E3);
	}
	.title {
		width: 100%;
		height: 240rpx;
		padding-top: 60rpx;
		background: url(../../static/image/@2x.png) bottom center no-repeat;
		background-size: 99% auto;
		text-align: center;
		font-size: 36rpx;
		color: #fff;
	}
	.content{
		width: 100%;
		padding: 60rpx 50rpx;
		border-radius: 20rpx;
		background-color: #fff;
		text-align: justify;
		white-space: wrap;
		word-wrap: break-word;
		font-size: 28rpx;
	}
</style>
