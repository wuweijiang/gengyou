<template>
	<view class="wrap">
		<navBar
		:title = "title"
		:titleColor = "titleColor"
		:borderBottom = "borderBottom"
		></navBar>
		<view class="card">
			<view class="order_title">
				订单编号：3265232656565
			</view>
			<view class="order_info">
				<u-image
				width="200rpx" 
				height="200rpx" 
				borderRadius="10rpx"
				src="https://cdn.uviewui.com/uview/swiper/1.jpg"
				></u-image>
				<view class="text">
					<view class="left">
						<text>科二陪练</text>
						<text class="small">科二</text>
						<text class="red">￥160.00</text>
					</view>
					<view class="right">
						<text>x1</text>
						<view class="btn">退款</view>
					</view>
				</view>
			</view>
			<view class="price">
				<view class="item small">
					<text>商品总价</text>
					<text>￥160.00</text>
				</view>
				<view class="item">
					<text>订单总价</text>
					<text>￥160.00</text>
				</view>
				<view class="item">
					<text>实付款</text>
					<text class="red">￥160.00</text>
				</view>
			</view>
		</view>
		<view class="card flex">
			<text>驾校名称</text>
			<text>青海隆鼎驾培城</text>
		</view>
		<view class="card flex">
			<text>驾校教练</text>
			<text>某某教练</text>
		</view>
		<view class="card last">
			<view class="title">订单信息</view>
			<text>订单编号：562940576855646</text>
			<text>订单编号：562940576855646</text>
			<text>订单编号：562940576855646</text>
			<text>订单编号：562940576855646</text>
			<text>订单编号：562940576855646</text>
		</view>
		<view class="menu">
			<text class="btn clear">
				删除订单
			</text>
			<text class="btn comfire">
				评价
			</text>
			<text class="btn comfire">
				待使用
			</text>
			
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
				title: "订单详情",
				titleColor: "#333",
				borderBottom: true
			}
		},
		methods: {
			
		}
	}
</script>

<style lang="scss" scoped>
	page {
		background: #f5f5f5;
	}
	.wrap {
		padding: 30rpx;
		
		.card {
			padding: 30rpx;
			margin-bottom: 20rpx;
			border-radius: 21rpx;
			border: 1rpx solid #E6E6E6;
			background: #fff;
			
			.order_title {
				font-weight: bold;
			}
			.order_info {
				display: flex;
				margin-top: 20rpx;
				.text {
					flex:1;
					.left {
						display: flex;
						flex-direction: column;
						padding-left: 20rpx;
						font-size: 32rpx;
						.small {
							color: #666;
							font-size: 28rpx;
							margin: 4rpx 0;
						}
						.red {
							font-size: 30rpx;
							color: #FF3437;
						}
					}
					.right {
						width: 100%;
						display: flex;
						flex-direction: column;
						align-items: flex-end;
						text-align: right;
						text {
							padding-right: 6rpx;
							margin-top: -14rpx;
						}
						.btn {
							width: 96rpx;
							margin-top: 10rpx;
							background: #FFFFFF;
							border: 1px solid #B9B9B9;
							border-radius: 20px;
							font-size: 24rpx;
							color: #8f8f8f;
							text-align: center;
						}
					}
				}	
			}
			.price {
				width: 100%;
				.item {
					margin-top: 5rpx;
					display: flex;
					justify-content: space-between;
					font-size: 26rpx;
					.red {
						color: #FF3437;
					}
				}
				.small {
					margin-top: 25rpx;
					color: #8f8f8f;
					font-size: 24rpx;
				}
			}
			&.flex {
				display: flex;
				justify-content: space-between;
				font-size: 30rpx;
				font-weight: bold;
			}
			&.last{
				.title {
					border-left: 4rpx solid #384AD2;
					padding: 0rpx 0 2rpx 10rpx;
					margin-bottom: 25rpx;
					font-size: 28rpx;
					font-weight: bold;
				}
				text {
					display: inline-block;
					margin-bottom: 15rpx;
					font-size: 26rpx;
				}
			}
		}
		.menu {
			position: fixed;
			left: 0;
			bottom: 0;
			z-index: 999;
			display: flex;
			justify-content: flex-end;
			align-items: center;
			width: 100%;
			height: 98rpx;
			padding: 0 30rpx;
			background: #FFFFFF;
			box-shadow: 0px 1rpx 1rpx 0rpx rgba(0, 0, 0, 0.3);
			.btn {
				width: 148rpx;
				padding: 8rpx 0;
				margin-left: 20rpx;
				background: #FFFFFF;
				border-radius: 26px;
				text-align: center;
				font-size: 26rpx;
			}
			.clear {
				border: 1px solid #858585;
				color: #858585;
			}
			.comfire {
				border: 1px solid #384AD2;
				color: #384AD2;
			}
		}
	}
</style>
