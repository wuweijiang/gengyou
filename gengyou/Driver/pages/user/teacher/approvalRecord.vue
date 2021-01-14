<template>
	<view class="wrap">
		<navBar
		:title = "title"
		:navBg = "navBg"
		:backColor = "backColor"
		:textStyle = "textStyle"
		></navBar>
		<view class="item_box">
			<view class="item_title">
				<text>好好教练</text>
				<text class="time">2020-11-24</text>
			</view>
			<view class="item_con">
				<view class="info">
					<text class="label">开始时间：</text>
					<text>2020-11-24</text>
				</view>
				<view class="info">
					<text class="label">结束时间：</text>
					<text>2020-11-25</text>
				</view>
				<view class="info">
					<text class="label">时&emsp;&emsp;长：</text>
					<text>2小时</text>
				</view>
				<view class="info">
					<text class="label">外出事由：</text>
					<text>肚子疼！！！</text>
				</view>
				<u-image
				class="type"
				width="142rpx"
				height="126rpx"
				:src="type == 0 ? '/static/image/shenpi_icon_tongguo@2x.png' : '/static/image/shenpi_icon_weitongguo@2x.png'"
				></u-image>
			</view>
		</view>
	</view>
</template>

<script>
	import navBar from "../../../components/nav-bar/nav-bar.vue"
	export default {
		components:{
			navBar
		},
		data() {
			return {
				title: "审批记录",
				navBg: { background: 'linear-gradient(-118deg, #384AD2, #5269F7)' },
				backColor: '#fff',
				textStyle: {
					color: '#fff'
				},
				type: 0
			}
		},
		methods: {
			
		}
	}
</script>

<style lang="scss" scoped>
	.wrap {
		padding: 0 30rpx;
	}
	.item_box {
		margin-top: 40rpx;
		
		.item_title {
			display: flex;
			justify-content: space-between;
			align-items: center;
			padding: 0 10rpx;
			margin-bottom: 28rpx;
			font-size: 34rpx;
			font-weight: bold;
			color: #4D63EF;
			
			.time {
				font-size: 30rpx;
				font-weight: 500;
				color: #212121;
			}
		}
		.item_con {
			position: relative;
			padding: 28rpx 24rpx 0 24rpx;
			border-radius: 8rpx;
			box-shadow: 0 0 20rpx #E3EAFF;
			
			.info {
				padding-bottom: 28rpx;
				font-size: 30rpx;
				color: #212121;
				
				.label {
					color: #666
				}
			}
			.type {
				position: absolute;
				right: 10rpx;
				bottom: 10rpx;
			}
		}
	}
</style>
