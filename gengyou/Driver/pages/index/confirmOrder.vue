<template>
	<view class="main">
		
	
	<view class="wrap">
		<navBar
		:title = "title"
		:textStyle = "textStyle"
		:backColor = "backColor"
		:titleColor = "titleColor"
		:borderBottom = "borderBottom"
		></navBar>
		<view class="category">
			<u-image
				width="200rpx" 
				height="200rpx" 
				border-radius="8rpx"
				src="https://timgsa.baidu.com/timg?image">
			</u-image>
			<view class="category_del">
				<text>科二陪练</text>
				<text class="price">￥160/小时</text>
			</view>
		</view>
		<view class="category_item">
			<text>驾校名称</text>
			<text>青海隆鼎驾培城</text>
		</view>
		<view class="category_item">
			<text>驾校名称</text>
			<text>青海隆鼎驾培城</text>
		</view>
		<view class="category_item">
			<text>驾校名称</text>
			<view class="category_item_btn">
				<text @click="reduce">-</text>
				<u-input v-model="num" type="number" input-align="center" :disabled="disabled" :custom-style="customStyle"/>
				<text @click="add">+</text>
			</view>
		</view>
		<view class="category_item">
			<text>商品价格</text>
			<text>￥{{unitPrice}}/小时</text>
		</view>
		<u-toast ref="uToast" />
	</view>
	<view class="settlement">
		<view class="payBtn" @click="pay">
			立即支付
		</view>
		<view class="price_con">
			<text>合计：</text>
			<text class="price">￥{{price}}</text>
		</view>
	</view>
	</view>
</template>

<script>
	import navBar from "../../components/nav-bar/nav-bar.vue"
	
	export default {
		components: {
			navBar
		},
		data() {
			return {
				title: "确认订单",
				textStyle: { color: '#606266' },
				backColor: "#000",
				titleColor: "#333",
				borderBottom: true,
				disabled:true,
				num: 1,
				unitPrice: 160,
				customStyle: {
					width: '60rpx',
					minHeight: '50rpx',
					borderLeft: '1rpx solid #fff',
					borderRight: '1rpx solid #fff',
					background: '#e9e9e9'
				},
				ad: 1
			}
		},
		// watch: {
		// 	num(val) {
		// 		this.price = this.unitPrice * this.num
		// 	}
		// },
		computed: {
			price() {
				return this.unitPrice * this.num
			}
		},
		methods: {
			add() {
				if(this.num < 99) {
					this.num++
				} else {
					this.$refs.uToast.show({
						title: '最大为99'
					})
				}
			},
			reduce() {
				if(this.num > 1) {
					this.num--
				} else {
					this.$refs.uToast.show({
						title: '最小为1'
					})
				}
			},
			pay() {
				console.log(this.price)
			}
		}
	}
</script>

<style lang="scss" scoped>
	.wrap {
		padding: 0 30rpx;
	}
	.category {
		width: 100%;
		display: flex;
		padding: 25rpx 30rpx;
		margin: 30rpx 0;
		border: 1rpx solid #e6e6e6;
		border-radius: 20rpx;
		
		.category_del {
			flex: 1;
			display: flex;
			flex-direction: column;
			margin-left: 20rpx;
			
			text {
				font-size: 32rpx;
				font-weight: bold;
				margin-bottom: 15rpx;
				
				&.price {
					color: #F63235;
				}
			}
		}
	}
	.category_item {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 30rpx;
		border: 1rpx solid #e6e6e6;
		border-radius: 20rpx;
		margin-bottom: 30rpx;
		font-size: 30rpx;
		
		.category_item_btn {
			display: flex;
			align-items: center;
			width: 180rpx;
			height: 50rpx;
			border-radius: 40rpx;
			background: #F4F4F4;
			box-sizing: border-box;
			
			text {
				padding: 0 20rpx;
				margin-top: -4rpx;
			}
		}
	}
	.settlement {
		width: 100%;
		border-top: 1rpx solid #e6e6e6;
		position: fixed;
		bottom: 0;
		display: flex;
		flex-direction: row-reverse;
		font-size: 30rpx;
		
		.price_con {
			display: flex;
			align-items: center;
			margin-right: 30rpx;
			
			.price {
				color: #F63235;
			}
		}
		.payBtn {
			padding: 35rpx 45rpx;
			background: linear-gradient(118deg, #384AD2, #5269F7);
			color: #fff;
		}
	}
</style>
