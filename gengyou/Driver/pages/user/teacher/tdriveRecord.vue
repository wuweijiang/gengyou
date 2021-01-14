<template>
	<view class="wrap">
		<navBar
		:title = "title"
		:navBg = "navBg"
		:backColor = "backColor"
		:textStyle = "textStyle"
		></navBar>
		<view class="card">
			<view class="top">
				<view class="title">
					<text>练车预约</text>
					<text class="time">2020.11.23 14:20</text>
				</view>
				<view class="btn">
					已使用
				</view>
			</view>
			<view class="center">
				<view class="info_row">
					<view class="info_col">
						<text>预约人姓名：</text>
						<text class="val">阿伯茨</text>
					</view>
					<view class="info_col">
						<text>预约科目：</text>
						<text class="val">科目二</text>
					</view>
				</view>
				<view class="info_row">
					<view class="info_col">
						<text>预约驾校：</text>
						<text class="val">阿伯茨</text>
					</view>
					<view class="info_col">
						<text>预约教练：</text>
						<text class="val">科目二</text>
					</view>
				</view>
				<view class="info_row">
					<view class="info_col long">
						<text>预约时间：</text>
						<text class="val">2020-11-24 11:22</text>
					</view>
				</view>
			</view>
			<!-- <view class="bottom">
				<text>温馨提示：在预约起始时间的30分钟内将不能取消本次预约</text>
				<text class="cancel">取消预约</text>
			</view> -->
		</view>
	</view>
</template>

<script>
	import navBar from "@/components/nav-bar/nav-bar.vue"
	export default {
		components: {
			navBar
		},
		data() {
			return {
				title: "已完成的课程",
				navBg: { background: 'linear-gradient(-118deg, #384AD2, #5269F7)' },
				backColor: '#fff',
				textStyle: {
					color: '#fff'
				},
			}
		},
		methods: {
			
		}
	}
</script>

<style lang="scss" scoped>
	$fontColor:#999;
	page {
		background: #f7f7f7;
	}
	.wrap {
		padding: 30rpx;
		
		.card {
			background: #fff;
			border-radius: 14rpx;
			box-shadow: 0 0 10rpx #EAEAEA;
			overflow: hidden;
			
			.top {
				padding: 30rpx 26rpx;
				display: flex;
				justify-content: space-between;
				
				.title {
					font-size: 30rpx;
					font-weight: bold;
					color: $fontColor;
					
					text {
						margin-right: 30rpx;
					}
					.time {
						font-size: 26rpx;
						font-weight: 500;
					}
				}
				.btn {
					width: 200rpx;
					// height: 0rpx;
					padding: 10rpx 0;
					background: #ACACAC;
					color: #fff;
					font-size: 26rpx;
					text-align: center;
					transform: rotate(45deg) translate(48rpx,-75rpx);
				}
			}
			.center {
				padding: 30rpx;
				border-top: 1rpx solid #EBEBEB;
				border-bottom: 1rpx solid #EBEBEB;
				
				.info_row {
					display: flex;
					justify-content: space-between;
					margin-bottom: 20rpx;
					font-size: 26rpx;
					color: #999;
					
					.info_col {
						width: 200rpx;
						display: flex;
						flex-direction: column;
						
						&.long {
							width: 100%;
						}
						.val {
							margin-top: 4rpx;
							font-size: 30rpx;
							font-weight: bold;
							color: $fontColor;
						}
					}
				}
			}
			.bottom {
				display: flex;
				justify-content: space-between;
				align-items: center;
				padding: 20rpx 20rpx 30rpx 20rpx;
				color: #F9B30D;
				font-size: 22rpx;
				
				.cancel {
					width: 150rpx;
					margin-left: 80rpx;
					font-size: 26rpx;
					color: #5067F5;
				}
			}
		}
	}
</style>
