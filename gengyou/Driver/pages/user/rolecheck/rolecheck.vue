<template>
	<view>
		<navBar
		:title = "title"
		:navBg = "navBg"
		:backColor = "backColor"
		:textStyle = "textStyle"
		></navBar>
		<view class="role" v-for="(item,index) in list"  @click="checkRole(index)">
			<u-image
			:src="item.avatar"
			width="300rpx"
			height="300rpx"
			></u-image>
			<view class="checkbox">
				<u-icon size="40" :name="index == type ? '/static/image/xuanze_pre@2x.png' : '/static/image/xuanze_normal@2x.png'"></u-icon>
				<text>{{item.name}}</text>
			</view>
		</view>
		<view class="btn" :navbar-height="statusBarHeight + navbarHeight" @click="nextCheck">
			下一步
		</view>
		<u-top-tips ref="uTips"></u-top-tips>
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
				title: "选择身份",
				navBg: { background: 'linear-gradient(-118deg, #384AD2, #5269F7)' },
				backColor: '#fff',
				textStyle: {
					color: '#fff'
				},
				list: [
					{
						name: "我是学员",
						avatar: "/static/image/icon_xueyuan@2x.png"
					},
					{
						name: "我是教练",
						avatar: "/static/image/icon_jiaolian@2x.png"
					}
				],
				type: -1,
				// 状态栏高度，H5中，此值为0，因为H5不可操作状态栏
				statusBarHeight: uni.getSystemInfoSync().statusBarHeight,
				// 导航栏内容区域高度，不包括状态栏高度在内
				navbarHeight: 44
			}
		},
		methods: {
			checkRole(index) {
				this.type = index;
			},
			nextCheck() {
				if(this.type == -1) {
					this.$refs.uTips.show({
						title: '请选择身份',
						type: 'error',
						duration: '2300'
					})
				} else {
					console.log(this.type)
					// this.$route()
				}
			}
		}
	}
</script>

<style scoped lang="scss">
	.role {
		display: flex;
		flex-direction: column;
		align-items: center;
		width: 400rpx;
		margin: 0 auto;
		margin-top: 80rpx;
		
		.checkbox {
			display: flex;
			justify-content: center;
			align-items: center;
			margin-top: 20rpx;
			font-weight: bold;
			font-size: 32rpx;
			
			text {
				padding-left: 10rpx;
			}
		}
	}
	.btn {
		width: 353rpx;
		height: 88rpx;
		margin: 0 auto;
		margin-top: 80rpx;
		display: flex;
		justify-content: center;
		align-items: center;
		background: linear-gradient(118deg, #384AD2, #5269F7);
		border-radius: 44rpx;
		font-size: 32rpx;
		color: #fff;
	}
</style>
