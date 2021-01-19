<template>
	<view>
		<navBar
		:title = "title"
		:isBack = "isBack"
		:titleColor = "titleColor"
		></navBar>
		<view class="wrap">
			<view class="u-tabs-box">
				<u-tabs-swiper :bold="false" bar-height="4" activeColor="#384AD2" font-size="28" ref="tabs" :list="list" :current="current" @change="change" :is-scroll="false" swiperWidth="750"></u-tabs-swiper>
			</view>
			<swiper class="swiper-box" :current="swiperCurrent" @transition="transition" @animationfinish="animationfinish">
				<swiper-item class="swiper-item">
					<scroll-view scroll-y style="height: 100%;width: 100%;" @scrolltolower="reachBottom">
						<view class="page-box">
							<view class="card" :class="type == false ? 'over' : ''">
								<view class="top">
									<view class="title">
										<text>练车预约</text>
										<text class="time">2020.11.23 14:20</text>
									</view>
									<view class="btn" v-if="type">
										查看
									</view>
									<view class="no_btn">
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
								<view class="bottom" v-if="type">
									<text>温馨提示：在预约起始时间的30分钟内将不能取消本次预约</text>
									<text class="cancel">取消预约</text>
								</view>
							</view>
							<u-loadmore :status="loadStatus[0]" bgColor="#f7f7f7" v-show="loadShow"></u-loadmore>
						</view>
					</scroll-view>
				</swiper-item>
				<swiper-item class="swiper-item">
					<scroll-view scroll-y style="height: 100%;width: 100%;" @scrolltolower="reachBottom">
						<view class="page-box">
							<view class="card">
								<view class="top">
									<view class="title">
										<text>练车预约</text>
										<text class="time">2020.11.23 14:20</text>
									</view>
									<view class="btn">
										查看
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
								<view class="bottom">
									<text>温馨提示：在预约起始时间的30分钟内将不能取消本次预约</text>
									<text class="cancel">取消预约</text>
								</view>
							</view>
							<u-loadmore :status="loadStatus[1]" bgColor="#f7f7f7" v-show="loadShow"></u-loadmore>
						</view>
					</scroll-view>
				</swiper-item>
			</swiper>
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
			title: '预约',
			isBack: false,
			titleColor: "#333",
			orderList: [[], []],
			dataList: [
				{
					id: 1,
					store: '3663663636278',
					deal: '待付款',
					goodsList: [
						{
							goodsUrl: '//img13.360buyimg.com/n7/jfs/t1/103005/7/17719/314825/5e8c19faEb7eed50d/5b81ae4b2f7f3bb7.jpg',
							title: '科二陪练',
							type: '科二',
							deliveryTime: '付款后30天内发货',
							price: '348.58',
							number: 2
						}
					]
				},
				{
					id: 2,
					store: '3663663636278',
					deal: '交易失败',
					goodsList: [
						{
							goodsUrl: '//img14.360buyimg.com/n7/jfs/t1/60319/15/6105/406802/5d43f68aE9f00db8c/0affb7ac46c345e2.jpg',
							title: '【冬日限定】现货 原创jk制服女2020冬装新款小清新宽松软糯毛衣外套女开衫短款百搭日系甜美风',
							type: '粉色;M',
							deliveryTime: '付款后7天内发货',
							price: '128.05',
							number: 1
						}
					]
				},
				{
					id: 3,
					store: '3663663636278',
					deal: '待评价',
					goodsList: [
						{
							goodsUrl: '//img11.360buyimg.com/n7/jfs/t1/94448/29/2734/524808/5dd4cc16E990dfb6b/59c256f85a8c3757.jpg',
							title: '三星（SAMSUNG）京品家电 UA65RUF70AJXXZ 65英寸4K超高清 HDR 京东微联 智能语音 教育资源液晶电视机',
							type: '4K，广色域',
							deliveryTime: '保质5年',
							price: '1998',
							number: 3
						},
						{
							goodsUrl: '//img14.360buyimg.com/n7/jfs/t6007/205/4099529191/294869/ae4e6d4f/595dcf19Ndce3227d.jpg!q90.jpg',
							title: '美的(Midea)639升 对开门冰箱 19分钟急速净味 一级能效冷藏双开门杀菌智能家用双变频节能 BCD-639WKPZM(E)',
							type: '容量大，速冻',
							deliveryTime: '保质5年',
							price: '2354',
							number: 1
						}
					]
				},
				{
					id: 4,
					store: '3663663636278',
					deal: '待使用',
					goodsList: [
						{
							goodsUrl: '//img10.360buyimg.com/n7/jfs/t22300/31/1505958241/171936/9e201a89/5b2b12ffNe6dbb594.jpg!q90.jpg',
							title: '法国进口红酒 拉菲（LAFITE）传奇波尔多干红葡萄酒750ml*6整箱装',
							type: '4K，广色域',
							deliveryTime: '珍藏10年好酒',
							price: '1543',
							number: 3
						},
						{
							goodsUrl: '//img10.360buyimg.com/n7/jfs/t1/107598/17/3766/525060/5e143aacE9a94d43c/03573ae60b8bf0ee.jpg',
							title: '蓝妹（BLUE GIRL）酷爽啤酒 清啤 原装进口啤酒 罐装 500ml*9听 整箱装',
							type: '一打',
							deliveryTime: '口感好',
							price: '120',
							number: 1
						}
					]
				},
				{
					id: 5,
					store: '3663663636278',
					deal: '交易成功',
					goodsList: [
						{
							goodsUrl: '//img12.360buyimg.com/n7/jfs/t1/52408/35/3554/78293/5d12e9cfEfd118ba1/ba5995e62cbd747f.jpg!q90.jpg',
							title: '企业微信 中控人脸指纹识别考勤机刷脸机 无线签到异地多店打卡机WX108',
							type: '识别效率高',
							deliveryTime: '使用方便',
							price: '451',
							number: 9
						}
					]
				}
			],
			list: [
				{
					name: '可使用预约'
				},
				{
					name: '已使用预约'
				}
			],
			current: 0,
			swiperCurrent: 0,
			tabsHeight: 0,
			dx: 0,
			loadStatus: ['loadmore','loadmore'],
			loadShow: false,
			type: false
		};
	},
	onLoad(option) {
		if (option.hasOwnProperty("current")) {
			this.current = option.current;
		}
		this.getOrderList(0);
		this.getOrderList(1);
	},
	methods: {
		reachBottom() {
			// 此tab为空数据
			this.loadStatus.splice(this.current,1,"loading")
			setTimeout(() => {
				this.getOrderList(this.current);
			}, 1200);
		},
		// 页面数据
		getOrderList(idx) {
			for(let i = 0; i < 5; i++) {
				let index = this.$u.random(0, this.dataList.length - 1);
				let data = JSON.parse(JSON.stringify(this.dataList[index]));
				data.id = this.$u.guid();
				this.orderList[idx].push(data);
			}
			this.loadStatus.splice(this.current,1,"loadmore")
		},
		// tab栏切换
		change(index) {
			this.swiperCurrent = index;
			this.getOrderList(index);
		},
		transition({ detail: { dx } }) {
			this.$refs.tabs.setDx(dx);
		},
		animationfinish({ detail: { current } }) {
			this.$refs.tabs.setFinishCurrent(current);
			this.swiperCurrent = current;
			this.current = current;
			// console.log(current)
		}
	}
};
</script>

<style lang="scss" scoped>
	page{
		background-color: #f7f7f7;
	}
	
	.card {
		width: 700rpx;
		background-color: #ffffff;
		margin: 20rpx auto;
		border-radius: 20rpx;
		box-sizing: border-box;
		padding: 20rpx;
		font-size: 28rpx;
		overflow: hidden;
		
		&.over .center .info_row .info_col .val, &.over {
			color: #999999;
		}
		&.over .center {
			border-bottom: 0;
		}
		.top {
			padding: 30rpx 26rpx;
			display: flex;
			justify-content: space-between;
			
			.title {
				font-size: 30rpx;
				font-weight: bold;
				
				text {
					margin-right: 30rpx;
				}
				.time {
					font-size: 26rpx;
					color: #999;
					font-weight: 500;
				}
			}
			.btn {
				width: 135rpx;
				// height: 0rpx;
				padding: 10rpx 0;
				background: linear-gradient(118deg, #384AD2, #5269F7);
				border-radius: 50rpx;
				color: #fff;
				font-size: 26rpx;
				text-align: center;
			}
			.no_btn {
				width: 200rpx;
				// height: 0rpx;
				padding: 10rpx 0;
				background: #ACACAC;
				color: #fff;
				font-size: 26rpx;
				text-align: center;
				transform: rotate(45deg) translate(46rpx,-95rpx);
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
						color: #212121;
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
.centre {
	text-align: center;
	margin: 200rpx auto;
	font-size: 32rpx;
	image {
		width: 164rpx;
		height: 164rpx;
		border-radius: 50%;
		margin-bottom: 20rpx;
	}
	.tips {
		font-size: 24rpx;
		color: #999999;
		margin-top: 20rpx;
	}
	.btn {
		margin: 80rpx auto;
		width: 200rpx;
		border-radius: 32rpx;
		line-height: 64rpx;
		color: #ffffff;
		font-size: 26rpx;
		background: linear-gradient(270deg, rgba(249, 116, 90, 1) 0%, rgba(255, 158, 1, 1) 100%);
	}
}
.wrap {
	display: flex;
	flex-direction: column;
	height: calc(100vh - var(--window-top));
	width: 100%;
}
.swiper-box {
	flex: 1;
}
.swiper-item {
	height: 100%;
}
</style>
