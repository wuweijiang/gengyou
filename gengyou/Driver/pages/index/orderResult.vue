<template>
	<view class="main">
		<navBar
		:navBg = "navBg"
		:title = "title"
		:backColor = "backColor"
		:textStyle = "textStyle"
		></navBar>
		<view class="w_title">
			<u-image width="86rpx" height="86rpx" :src="status ? image[0]:image[1]" class="titleImg"></u-image>
			<text>{{status ? '预约成功':'预约失败'}}</text>
		</view>
		<view class="w_con" v-if="status">
			<view class="w_time">
				<text class="data">{{data}}</text>
				<text>{{time}}</text>
			</view>
			<view class="w_order_info">
				<text class="w_order_name">学员姓名：</text>
				<text>{{studName}}</text>
			</view>
			<view class="w_order_info">
				<text class="w_order_name">驾校名称：</text>
				<text>{{schoolName}}</text>
			</view>
			<view class="w_order_info">
				<text class="w_order_name">科目类型：</text>
				<text>{{type}}</text>
			</view>
			<view class="w_order_info">
				<text class="w_order_name">预约教练：</text>
				<text>{{teach}}</text>
			</view>
		</view>
		<view class="w_con" v-else>
			<view class="w_time">
				<text class="data">{{data}}</text>
				<text>{{time}}</text>
			</view>
			<view class="w_order_info">
				<text class="w_order_name">失败原因：</text>
				<text>{{error}}</text>
			</view>
		</view>
		<view class="back" url="/pages/index/index" @click="backUrl">返回首页</view>
	</view>
</template>

<script>
	import navBar from "../../components/nav-bar/nav-bar.vue"
	
	export default {
		components:{
			navBar
		},
		data() {
			return {
				navBg: { background: 'linear-gradient(100deg, #4F67F3, #3D50D9)' },
				title: "预约结果",
				backColor: "#fff",
				textStyle: { color: '#fff' },
				status:1,
				image:['/static/image/jg_icon_chenggong@2x.png',
				'/static/image/jg_icon_shibai@2x.png'],
				data: '2020-11-14',
				time: '11:00-12:00',
				studName: '张三',
				schoolName: '隆鼎驾培',
				type: '科目二',
				teach: '李四',
				error: '网络错误'
			};
		},
		methods: {
			backUrl() {
				uni.switchTab({
					url: '/pages/index/index'
				});
			}
		}
	}
</script>

<style lang="scss" scoped>
	.w_title {
		width: 100%;
		height: 300rpx;
		background: linear-gradient(118deg, #4F67F3, #394BD4);
		display: flex;
		flex-direction: column;
		align-items: center;
		
		.titleImg {
			margin: 50rpx 0 20rpx 0;
		}
		text {
			font-size: 32rpx;
			color: #FFFFFF;
			font-weight: bold;
		}
	}
	.w_con {
		width: 698rpx;
		height: 646rpx;
		margin: 0 auto;
		margin-top: -80rpx;
		background-image: url(../../static/image/jg_icon_xinxi_bj@2x.png);
		background-repeat: no-repeat;
		background-size: contain;
		
		.w_time{
			width: 650rpx;
			padding: 60rpx 0 34rpx 0;
			display: flex;
			justify-content: center;
			margin: 0 auto;
			border-bottom: 1rpx solid #DADADA;
			font-size: 34rpx;
			color: #384AD2;
			
			.data {
				margin-right: 30rpx;
			}
		}
		
		.w_order_info {
			width: 650rpx;
			margin: 0 auto;
			margin-top: 40rpx;
			padding: 0 60rpx;
			font-size: 30rpx;
			font-weight: bold;
			
			.w_order_name {
				color: #A6A6A6;
				font-weight: 500;
			}
		}
	}
	.back {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 679rpx;
		height: 88rpx;
		margin: 0 auto;
		margin-top: 80rpx;
		background: linear-gradient(118deg, #384AD2, #5269F7);
		border-radius: 44px;
		color: #fff;
		font-size: 32rpx;
	}
</style>
