<template>
	<view>
		<navBar
		:navBg = "navBg"
		:title = "title"
		:textStyle = "textStyle"
		:isBack = "isBack"
		>
		</navBar>
		<view class="user_info">
			<u-image
			class="user_avatar"
			width="134rpx"
			height="134rpx"
			shape="circle"
			:src="info.avatar"
			>
			</u-image>
			<view class="user_info_right">
				<text class="user_info_name">{{info.name}}</text>
				<text class="user_info_school">{{info.school}}</text>
			</view>
		</view>
		<view class="user_con">
			<view class="order_cell" v-for="item in cellList" @click="navtar(item.url)">
				<text>{{item.name}}</text>
				<u-icon name="arrow-right"></u-icon>
			</view>
			<view class="order_cell" @click="logout">
				<text>退出登录</text>
			</view>
		</view>
	</view>
</template>

<script>
	import navBar from "@/components/nav-bar/nav-bar.vue";
	
	export default {
		components: {
			navBar
		},
		data() {
			return {
				navBg: { background: 'linear-gradient(100deg, #5269F7 10%, #3A4CD4)' },
				title: "我的",
				textStyle: { color: '#fff' },
				isBack: false,
				navList: [
					{
						name: "全部订单",
						url: "/pages/index/enroll",
						imgUrl: "/static/image/my_icon_dingda.png",
						
					},
					{
						name: "待付款",
						url: "/pages/index/enroll",
						imgUrl: "/static/image/my_icon_daifukuan.png",
						
					},
					{
						name: "待使用",
						url: "/pages/index/enroll",
						imgUrl: "/static/image/my_icon_shiyong.png",
						
					},
					{
						name: "待点评",
						url: "/pages/index/enroll",
						imgUrl: "/static/image/my_icon_dianping.png",
						
					}
				],
				cellList: [
					{
						name: "预约记录",
						url: "/pages/index/enroll"
					},{
						name: "已完成的课程",
						url: "/pages/index/enroll"
					},{
						name: "外出审批",
						url: "/pages/index/enroll"
					},{
						name: "审批记录",
						url: "/pages/index/enroll"
					}
				],
				info: {
					avatar: 'https://cdn.uviewui.com/uview/swiper/1.jpg',
					name: '张建国',
					school: '青海隆鼎驾培城'
				}
			}
		},
		methods: {
			navtar(url) {
				this.$u.route({
					url: url
				})
			},
			logout() {
				console.log("退出登录")
			},
			navRoute(current) {
				this.$u.route("/pages/index/myOrder",{
					current
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	@mixin max-width {
		width: 100%;
		box-sizing: border;
	}
	@mixin item {
		margin-top: 22rpx;
		background: #fff;
		box-shadow: 0 3rpx 9rpx 2rpx rgba(30, 104, 234, 0.09);
		border-radius: 12rpx;
	}
	page {
		background: #f7f7f7;
	}
	.user_info {
		@include max-width;
		height: 280rpx;
		background: url(@/static/image/my_icon_bj@2x.png) top center no-repeat;
		background-size: 100% 100%;
		display: flex;
		align-items: center;
		
		.user_avatar {
			margin: 0 20rpx 0 30rpx;
			border: 6rpx solid rgba(255,255,255,.5);
		}
		&_right {
			display: flex;
			flex-direction: column;
			font-size: 36rpx;
			font-weight: bold;
			color: #fff;
			
			.user_info_school {
				font-size: 26rpx;
				font-weight: 500;
			}
		}
	}
	.user_con {
		@include max-width;
		padding: 0 30rpx 30rpx 30rpx;
		
		.order_cell {
			@include item;
			padding: 30rpx;
			display: flex;
			justify-content: space-between;
		}
	}
</style>
