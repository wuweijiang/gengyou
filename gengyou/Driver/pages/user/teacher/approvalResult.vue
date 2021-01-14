<template>
	<view class="wrap">
		<navBar
		:title = "title"
		:navBg = "navBg"
		:backColor = "backColor"
		:textStyle = "textStyle"
		></navBar>
		<view class="headline">
			<text>{{this.info.name}}</text>
			<u-image
			class="type"
			width="142rpx"
			height="126rpx"
			:src="type == 0 ? '/static/image/shenpi_icon_tongguo@2x.png' : '/static/image/shenpi_icon_weitongguo@2x.png'"
			></u-image>
		</view>
		<view class="timeLine">
			开始时间
		</view>
		<u-form-item
		prop="startTime"
		:border-bottom="border" 
		>
			<u-input 
			v-model="info.startTime" :disabled="true"
			/>
		</u-form-item>
		<view class="timeLine">
			结束时间
		</view>
		<u-form-item
		prop="endTime"
		:border-bottom="border" 
		>
			<u-input 
			v-model="info.endTime" :disabled="true"
			/>
		</u-form-item>
		<view class="timeLine">
			时长（小时）
		</view>
		<u-form-item
		prop="timer"
		:border-bottom="border" 
		>
			<u-input v-model="info.timer+'小时'" :border="border"  :disabled="true"/>
		</u-form-item>
		<view class="timeLine">
			外出事由
		</view>
		<u-form-item
		prop="reason"
		:border-bottom="border" 
		>
			<u-input 
			v-model="info.reason" 
			type="textarea" 
			height="250"
			:disabled="true"
			/>
		</u-form-item>
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
				title: "审批结果",
				navBg: { background: 'linear-gradient(-118deg, #384AD2, #5269F7)' },
				backColor: '#fff',
				textStyle: {
					color: '#fff'
				},
				info: {
					name: '教练教练',
					startTime: '2020-11-24  12:00 ',
					endTime: '2020-11-24 14:00',
					timer: '2.5',
					reason: '我要出去！'
				},
				type: 0,
				border:false,
			}
		},
		methods: {
			
		}
	}
</script>

<style scoped lang="scss">
	.timeLine {
		padding: 38rpx 0 20rpx 44rpx;
		font-size: 34rpx;
	}
	.headline {
		position: relative;
		padding: 38rpx 0rpx 0rpx 44rpx;
		font-size: 34rpx;
		font-weight: bold;
		color: #4D63EF;
		.type {
			position: absolute;
			right: 50rpx;
			bottom: -80rpx;
		}
	}
	.u-form-item {
		width: 684rpx;
		margin: 0 auto;
		padding: 10rpx 28rpx;
		border-radius: 6px;
		box-shadow: 0 0 8rpx #999;
	}
</style>
