<template>
	<view class="main">
		<navBar
		:title = "title"
		:titleColor = "titleColor"
		:borderBottom = "borderBottom"
		></navBar>
		<view class="w_info_con">
			<view class="w_info_item">
				<text>姓&ensp;&ensp;名:&ensp;{{info.name}}</text>
			</view>
			<view class="w_info_item">
				<text>手机号:&ensp;{{info.phone}}</text>
			</view>
			<view class="w_info_item">
				<text>驾&ensp;&ensp;校:&ensp;{{info.school}}</text>
			</view>
			<view class="w_info_item">
				<text>类&ensp;&ensp;型:&ensp;{{info.type}}</text>
			</view>
		</view>
		<u-form :model="info" ref="uForm" :border-bottom="border" :error-type="errorType">
			<u-form-item 
			label="科目类型" 
			label-width="140" 
			prop="orderType"
			:border-bottom="border" 
			>
				<u-input 
				v-model="info.orderType" 
				type="select" 
				:select-open="typeShow" 
				placeholder="请选择类型" 
				@click="typeShow = true" 
				input-align="right"
				/>
				<u-action-sheet 
				:list="typeList" 
				v-model="typeShow" 
				border-radius="14"
				 @click="typeCallback"
				 ></u-action-sheet>
			</u-form-item>
			<u-form-item 
			label="预约教练" 
			label-width="140" 
			prop="orderCoach"
			:border-bottom="border" 
			>
				<u-input 
				v-model="info.orderCoach" 
				type="select" 
				:select-open="coachShow" 
				placeholder="请选择教练" 
				@click="coachShow = true" 
				input-align="right"
				/>
				<u-action-sheet 
				:list="coachList" 
				v-model="coachShow" 
				border-radius="14" 
				@click="coachCallback"
				></u-action-sheet>
			</u-form-item>
			<u-form-item 
			label="预约时间" 
			label-width="140" 
			prop="orderDate"
			:border-bottom="border" 
			>
				<u-input 
				v-model="info.orderDate" 
				type="select" 
				:select-open="timeShow" 
				placeholder="请选择时间" 
				@click="timeShow = true" 
				input-align="right"
				/>
				<u-calendar 
				v-model="timeShow" 
				:mode="mode" 
				@change="timeCallback" 
				max-date="2021-06-01" 
				:safe-area-inset-bottom="safe"
				></u-calendar>
			</u-form-item>
			<view class="w_order_sub" v-if="subShow">
				<view class="w_order_sub_tlt">
					上午时段预约
				</view>
				<view class="w_order_sub_item" v-for="(item,index) in timeList" :key="index">
					<text class="time">{{item.time}}</text>
					<text><text class="num">剩余号源</text>{{item.hao}}</text>
					<!-- <view v-if="item.status">
						<u-button
						@click="submit(index)"
						shape="circle"
						:ripple="true"
						ripple-bg-color="rgba(75, 97, 237, 0.5)"
						:custom-style="cancelStyle"
						class="order-submit"
						>取消</u-button>
					</view>
					<view v-else>
						<u-button
						@click="submit(index)"
						shape="circle"
						:ripple="true"
						ripple-bg-color="rgba(75, 97, 237, 0.5)"
						:custom-style="customStyle"
						class="order-submit"
						>预约</u-button>
					</view> -->
					<view>
						<u-button
						@click="submit(index)"
						shape="circle"
						:ripple="true"
						ripple-bg-color="rgba(75, 97, 237, 0.5)"
						:custom-style="customStyle"
						class="order-submit"
						>预约</u-button>
					</view>
				</view>
				<view class="w_order_sub_tlt">
					下午时段预约
				</view>
				<view class="w_order_sub_item">
					<text class="time">10:00-11:00</text>
					<text><text class="num">剩余号源</text>5</text>
					<view>
						<u-button
						@click="submit"
						shape="circle"
						:ripple="true"
						ripple-bg-color="rgba(75, 97, 237, 0.5)"
						:custom-style="customStyle"
						class="order-submit"
						>预约</u-button>
					</view>
				</view>
			</view>
			<!-- <u-button
			@click="submit"
			shape="circle"
			:ripple="true"
			ripple-bg-color="rgba(75, 97, 237, 0.5)"
			:custom-style="customStyle"
			class="order-submit"
			>立即预约</u-button> -->
		</u-form>
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
				title: "预约练车",
				titleColor: "#333",
				borderBottom: true,
				info: {
					name: "牛牛",
					phone: 18888888888,
					school: "隆鼎驾培城",
					type: "C1",
					orderType: '',
					orderCoach: '',
					orderDate: '',
					orderTime: []
				},
				border:false,
				typeShow: false,
				timeShow: false,
				coachShow: false,
				mode: 'date',
				safe: true,
				subShow: false,
				typeList: [
					{
						text: '科目一'
					},
					{
						text: '科目二'
					}
				],
				timeList: [
					{
						text: '男'
					},
					{
						text: '女'
					}
				],
				coachList: [
					{
						text: '教练一'
					},
					{
						text: '教练二'
					}
				],
				timeList: [
					{
						status:0,
						time: "10:00-11:00",
						hao: 5,
					},{
						status:0,
						time: "11:00-12:00",
						hao: 5,
					},{
						status:0,
						time: "14:00-15:00",
						hao: 5,
					},{
						status:0,
						time: "17:00-18:00",
						hao: 5,
					},{
						status:0,
						time: "18:00-20:00",
						hao: 5,
					}
				],
				rules: {
					orderType: [
						{
							required: true,
							message: '请选择科目类型',
							trigger: 'change' ,
						}
					],
					orderCoach: [
						{
							required: true,
							message: '请选择教练',
							trigger: 'change' ,
						}
					],
					orderDate: [
						{
							required: true,
							message: '请选择日期',
							trigger: 'change' ,
						}
					]
				},
				customStyle: {
					background: 'linear-gradient(118deg, #5269F7, #384AD2)',
					color: '#fff',
					border: 'none',
					fontSize: '26rpx',
					width: '132rpx',
					height: '56rpx'
				},
				cancelStyle: {
					background: '#999999',
					color: '#fff',
					border: 'none',
					fontSize: '26rpx',
					width: '132rpx',
					height: '56rpx'
				},
				errorType: ['toast']
			};
		},
		methods: {
			submit(index) {
				this.$refs.uForm.validate(valid => {
					if (valid) {
						this.info.orderTime = this.timeList[index].time;
						console.log(this.info.orderTime)
						console.log('验证通过');
					} else {
						console.log('验证失败');
					}
				});
			},
			// submit(index) {
			// 	this.$refs.uForm.validate(valid => {
			// 		if (valid) {
			// 			if(this.timeList[index].status){
			// 				this.timeList[index].status = !this.timeList[index].status;
			// 				for(let i=0; i<this.info.orderTime.length; i++){
			// 					if(this.info.orderTime[i] == this.timeList[index].time){
			// 						this.info.orderTime.splice(i,1)
			// 					}
			// 				}
			// 				console.log(JSON.stringify(this.info.orderTime))
			// 			}else {
			// 				this.info.orderTime.push(this.timeList[index].time);
			// 				this.timeList[index].status = !this.timeList[index].status;
							
			// 				console.log(JSON.stringify(this.info.orderTime))
			// 			}
						
			// 			console.log('验证通过');
			// 		} else {
			// 			console.log('验证失败');
			// 		}
			// 	});
			// },
			typeCallback(index) {
				this.info.orderType = this.typeList[index].text;
			},
			coachCallback(index) {
				this.info.orderCoach = this.coachList[index].text;
			},
			timeCallback(index) {
				this.info.orderDate = index.result;
			}
		},
		// 必须要在onReady生命周期，因为onLoad生命周期组件可能尚未创建完毕
		onReady() {
			this.$refs.uForm.setRules(this.rules);
		}
	}
</script>

<style lang="scss" scoped>
	.main {
		padding: 12rpx 24rpx;
	}
	.w_info_con {
		width: 100%;
		height: 258rpx;
		display: flex;
		flex-wrap:wrap;
		align-content: space-between;
		background: url(../../static/image/yy_icon_xinxi_bj@2x.png) top center no-repeat;
		background-size: contain;
		padding: 40rpx 60rpx;
		box-sizing: border-box;
		font-size: 30rpx;
		color: #fff;
	}
	.w_info_item {
		width: 100%;
	}
	.u-form-item {
		width: 684rpx;
		margin: 0 auto;
		margin-top: 36rpx;
		padding: 10rpx 28rpx;
		border-radius: 6px;
		box-shadow: 0 0 12rpx #999;
	}
	// .order-submit {
	// 	margin-top: 250rpx;
	// }
	.w_order_sub_tlt {
		border-left: 6rpx solid #4E64F1;
		padding-left: 42rpx;
		margin: 60rpx 0 0 0;
		font-size: 30rpx;
		font-weight: bold;
	}
	.w_order_sub_item {
		padding: 32rpx;
		border-bottom: 1rpx solid #eeeeee;
		font-size: 30rpx;
		line-height: 56rpx;
		display: flex;
		justify-content: space-between;
		
		.num {
			margin-right: 16rpx;
			color: #666;
		}
	}
</style>
