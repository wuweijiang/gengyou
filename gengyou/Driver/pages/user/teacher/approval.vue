<template>
	<view class="wrap">
		<navBar
		:title = "title"
		:navBg = "navBg"
		:backColor = "backColor"
		:textStyle = "textStyle"
		></navBar>
		<u-form :model="info" ref="uForm" :border-bottom="border" :error-type="errorType">
			<view class="timeLine">
				开始时间
			</view>
			<u-form-item
			prop="startTime"
			:border-bottom="border" 
			>
				<u-input 
				v-model="info.startTime" 
				type="select" 
				:select-open="stimeShow" 
				placeholder="请选择时间" 
				@click="stimeShow = true" 
				input-align="left"
				/>
				<u-picker
				v-model="stimeShow" 
				:params="params"
				:mode="mode" 
				@confirm="stimeCallback" 
				:safe-area-inset-bottom="safe"
				></u-picker>
			</u-form-item>
			<view class="timeLine">
				结束时间
			</view>
			<u-form-item
			prop="endTime"
			:border-bottom="border" 
			>
				<u-input 
				v-model="info.endTime" 
				type="select" 
				:select-open="etimeShow" 
				placeholder="请选择时间" 
				@click="etimeShow = true" 
				input-align="left"
				/>
				<u-picker
				v-model="etimeShow" 
				:params="params"
				:mode="mode" 
				@confirm="etimeCallback" 
				max-date="2021-06-01" 
				:safe-area-inset-bottom="safe"
				></u-picker>
			</u-form-item>
			<view class="timeLine">
				时长（小时）
			</view>
			<u-form-item
			prop="timer"
			:border-bottom="border" 
			>
				<u-input v-model="info.timer" :border="border"  :disabled="true" placeholder="外出时长"/>
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
				placeholder="请填写外出事由" 
				height="250"
				/>
			</u-form-item>
			<u-toast ref="uToast" />
			<u-button
			@click="submit"
			shape="circle"
			:ripple="true"
			ripple-bg-color="rgba(75, 97, 237, 0.5)"
			:custom-style="customStyle"
			class="order-submit"
			>立即预约</u-button>
		</u-form>
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
				title: "外出审批",
				navBg: { background: 'linear-gradient(-118deg, #384AD2, #5269F7)' },
				backColor: '#fff',
				textStyle: {
					color: '#fff'
				},
				info: {
					startTime: '',
					endTime: '',
					timer: '',
					reason: ''
				},
				customStyle: {
					background: 'linear-gradient(118deg, #5269F7, #384AD2)',
					marginTop: '80rpx',
					color: '#fff',
					border: 'none',
					fontSize: '26rpx',
					width: '678rpx',
					height: '88rpx'
				},
				rules: {
					startTime: [
						{
							required: true,
							message: '请选择开始时间',
							trigger: 'change' ,
						}
					],
					endTime: [
						{
							required: true,
							message: '请选择结束时间',
							trigger: 'change' ,
						}
					],
					reason: [
						{
							required: true,
							message: '请填写外出事由',
							trigger: 'change' ,
						}
					]
				},
				params: {
					year: false,
					month: true,
					day: true,
					hour: true,
					minute: true,
					second: false,
					timestamp: true,
				},
				stimestamp: 0,
				etimestamp: 0,
				stimeShow: false,
				etimeShow: false,
				mode: 'time',
				safe: true,
				border:false,
				errorType: ['toast']
			}
		},
		methods: {
			submit(index) {
				this.$refs.uForm.validate(valid => {
					if (valid) {
						// this.info.orderTime = this.timeList[index].time;
						// console.log(this.info.orderTime)
						console.log('验证通过');
					} else {
						console.log('验证失败');
					}
				});
			},
			stimeCallback(Object) {
				this.info.startTime = Object.month + '-' + Object.day + ' ' + Object.hour + ':' + Object.minute;
				this.stimestamp = Object.timestamp;
				let timeDiff = Math.floor((this.etimestamp - this.stimestamp) / (60*60));
				if ( this.stimestamp > 0 && timeDiff > 0) {
					let subtime = Math.round(((this.etimestamp - this.timestamp) % (60*60)) / 60)
					if (subtime <= 10) {
						this.info.timer =  Math.floor((this.etimestamp - this.stimestamp) / (60*60))+'小时'
					} else if (subtime <= 30 && subtime >= 10) {
						this.info.timer =  Math.floor((this.etimestamp - this.stimestamp) / (60*60))+0.5+'小时'
					} else {
						this.info.timer =  Math.floor((this.etimestamp - this.stimestamp) / (60*60))+1+'小时'
					}
				}else {
					this.info.timer = '';
					if( this.etimestamp > 0 && this.etimestamp <= this.stimestamp) {
						this.$refs.uToast.show({
							title: '结束时间小于开始时间'
						})
					}
				}
			},
			etimeCallback(Object) {
				this.info.endTime = Object.month + '-' + Object.day + ' ' + Object.hour + ':' + Object.minute;
				this.etimestamp = Object.timestamp;
				let timeDiff = Math.floor((this.etimestamp - this.stimestamp) / (60*60));
				if ( this.stimestamp > 0 && this.etimestamp > 0 ) {
					let subtime = Math.round(((this.etimestamp - this.stimestamp) % (60*60)) / 60)
					if( timeDiff > 0 ) {
						if (subtime <= 10) {
							this.info.timer =  timeDiff+'小时'
						} else if (subtime <= 30 && subtime >= 10) {
							this.info.timer =  timeDiff+0.5+'小时'
						} else {
							this.info.timer =  timeDiff+1+'小时'
						}
					} else {
						if (subtime <= 10) {
							this.$refs.uToast.show({
								title: '外出时间半小时起'
							})
						} else if (subtime <= 30 && subtime >= 10) {
							this.info.timer =  0.5+'小时'
						} else {
							this.info.timer =  1+'小时'
						}
					}
				}else {
					this.info.timer = '';
					this.$refs.uToast.show({
						title: '结束时间小于开始时间'
					})
				}
			}
		},
		onReady() {
			this.$refs.uForm.setRules(this.rules);
		}
	}
</script>

<style scoped lang="scss">
	.timeLine {
		padding: 38rpx 0 20rpx 44rpx;
		font-size: 34rpx;
	}
	.u-form-item {
		width: 684rpx;
		margin: 0 auto;
		padding: 10rpx 28rpx;
		border-radius: 6px;
		box-shadow: 0 0 12rpx #999;
	}
</style>
