<template>
	<view class="wrap">
		<navBar
		:title = "title"
		:titleColor = "titleColor"
		:borderBottom = "borderBottom"
		></navBar>
		<uni-swiper-dot 
		:info="imgList" 
		:mode="mode" 
		:current="current" 
		:dotsStyles="dotsStyles"
		>
			<u-swiper mode="none" border-radius="0" height="400" :list="imgList" @change="change"></u-swiper>
		</uni-swiper-dot>
		<view class="w_title">
			<view class="w_schoolList">
				<view class="w_schoolList_item">
					<text>青海隆鼎驾培城</text>
					<text class="w_noun">排名第一</text>
				</view>
				<view class="w_schoolList_item">
						<u-image 
						src="/static/image/icon_gongshang@2x.png"
						width="30rpx"
						height="30rpx"
						class="img"
						></u-image>
					<text class="w_auth">驾校工商认证</text>
				</view>
				<view class="w_schoolList_item">
					<u-tag class="tags" text="一人一车" size="mini" border-color="transparent"/>
					<u-tag class="tags" text="一人一车" size="mini" border-color="transparent"/>
					<u-tag class="tags" text="一人一车" size="mini" border-color="transparent"/>
				</view>
			</view>
			<view class="tel" @click="makePhoneCall('114')">
				<u-image
				src="/static/image/icon_dianhua@2x.png"
				width="84rpx"
				height="84rpx"
				></u-image>
			</view>
		</view>
		<view class="score">
			<view class="num">
				<text class="bold">5.0</text>
				<text>分</text>
			</view>
			<view>
				服务号，收费透明
			</view>
		</view>
		<view class="main">
			<view class="w_main_title">
				班型
			</view>
			<view class="w_class_list">
				<view class="w_class_item" v-for="(item,index) in school" :key="index">
					<navigator class="delUrl" url="/pages/index/sProcess">
						<u-image
						:src="item.img"
						width="140rpx"
						height="140rpx"
						border-radius="8"
						class="img"
						></u-image>
						<view class="class_type">
							<text class="name">{{item.title}}</text>
							<text>{{item.subject}}</text>
							<text class="price">￥{{item.price}}</text>
						</view>
					</navigator>
					<view class="btn">
						<navigator url="/pages/index/enroll" class="btnUrl">
							报名缴费
						</navigator>
					</view>
				</view>
			</view>
		</view>
		<view class="w_teachTeam">
			<u-cell-group :border="cellBorder">
				<u-cell-item title="教练团队" value="全部42名教练" :title-style="titleStyle" :border-bottom="cellBorder" :borderTop="cellBorder" @click="cellNav"></u-cell-item>
			</u-cell-group>
			<view class="teachItem">
				<scroll-view scroll-x="true" class="scroll">
					<navigator url="" class="scrollUrl" v-for="(item, index) in teacher" :key="index">
						<view class="box">
								<u-image
								:src="item.img"
								width="100rpx"
								height="100rpx"
								border-radius="8"
								shape="circle"
								class="teachImg"
								></u-image>
								<view class="teach_resume">
									<view class="teach_resume_name">
										{{item.title}}
									</view>
									<view class="teach_resume_rank">
										<u-image
										src="/static/image/icon_xingji@2x.png"
										width="26rpx"
										height="33rpx"
										border-radius="8"
										class="teachIcon"
										></u-image>
										<text>{{item.rank}}</text>
									</view>
									<view class="teach_resume_time">
										<text>{{item.time}}</text>
									</view>
								</view>
						</view>
					</navigator>
				</scroll-view>
			</view>
		</view>
		<view class="w_school_resume">
			<view class="w_school_resume_title">
				驾校简介
			</view>
			<view class="w_school_resume_con">
				<u-parse :html="content"></u-parse>
			</view>
		</view>
		<view class="w_school_resume_bar">
			<navigator url="/pages/index/enroll" class="w_barbtn">报名缴费</navigator>
		</view>
	</view>
</template>

<script>
	import uniSwiperDot from "@/components/uni-swiper-dot/uni-swiper-dot.vue"
	import navBar from "../../components/nav-bar/nav-bar.vue"
	
	export default {
		components: {
			uniSwiperDot,
			navBar
		},
		data() {
			return {
				title: "驾校详情",
				titleColor: "#333",
				borderBottom: true,
				imgList: [{
						image: 'https://cdn.uviewui.com/uview/swiper/1.jpg'
					},
					{
						image: 'https://cdn.uviewui.com/uview/swiper/2.jpg'
					},
					{
						image: 'https://cdn.uviewui.com/uview/swiper/3.jpg'
					}
				],
				school: [
					{
						url: '/pages/index/enroll',
						img: 'https://cdn.uviewui.com/uview/swiper/1.jpg',
						title: 'C1大众班',
						subject: '科目一，科目二',
						price: '9999'
					},
					{
						url: '/pages/index/enroll',
						img: 'https://cdn.uviewui.com/uview/swiper/1.jpg',
						title: '驾校报名',
						subject: '科目一，科目二',
						price: '9999'
					}
				],
				teacher: [
					{
						url: '/pages/index/enroll',
						img: 'https://cdn.uviewui.com/uview/swiper/1.jpg',
						title: '教练',
						rank: '五星教练',
						time: '五年'
					},
					{
						url: '/pages/index/enroll',
						img: 'https://cdn.uviewui.com/uview/swiper/1.jpg',
						title: '教练',
						rank: '五星教练',
						time: '五年'
					},
					{
						url: '/pages/index/enroll',
						img: 'https://cdn.uviewui.com/uview/swiper/1.jpg',
						title: '教练',
						rank: '五星教练',
						time: '五年'
					},
					{
						url: '/pages/index/enroll',
						img: 'https://cdn.uviewui.com/uview/swiper/1.jpg',
						title: '教练',
						rank: '五星教练',
						time: '五年'
					},
				],
				content: `
					<p>露从今夜白，月是故乡明</p>
					<img src="https://cdn.uviewui.com/uview/swiper/2.jpg" />
					<p>露从今夜白，月是故乡明</p>
				`,
				mode: "round",
				current: 0,
				cellBorder: false,
				dotsStyles: {
					backgroundColor: '#cccccc',
					border: 'none',
					selectedBackgroundColor: '#465BE6',
					selectedBorder: 'none'
				},
				titleStyle: {
					color: '#212121',
					fontSize: '32rpx',
					fontWeight: 'bold'
				}
			};
		},
		methods: {
			change(index) {
				this.current = index;
			},
			makePhoneCall(phone) {
				uni.makePhoneCall({
				    phoneNumber: phone
				});
			},
			cellNav() {
				this.$u.route({
					url:'pages/index/coachList'
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	page {
		background-color: #f7f7f7;
	}
	.w_title {
		padding: 26rpx 30rpx;
		display: flex;
		justify-content: space-between;
		background: #fff;
		
		.w_schoolList {
			font-size: 34rpx;
			font-weight: bold;
			
			.w_schoolList_item {
				display: flex;
				align-items: center;
				margin-bottom: 20rpx;
			}
			.w_noun {
				margin-left: 20rpx;
				padding: 2rpx 10rpx;
				background-color: #FEDC62;
				font-size: 22rpx;
				font-weight: 500;
				color: #666;
			}
			.w_auth {
				font-size: 26rpx;
				color: #858585;
			}
			.tags {
				margin-right: 12rpx;
			}
			.img {
				margin-top: -10rpx;
				margin-right: 12rpx;
			}
		}
		.tel {
			display: flex;
			align-items: center;
			margin-right: 20rpx;
		}
	}
	.score {
		padding: 34rpx 50rpx;
		margin:15rpx 0;
		background: #fff;
		display: flex;
		font-size: 30rpx;
		color: #4E64F1;
		
		.num {
			font-size: 26rpx;
			margin-right: 24rpx;
		}
		.bold {
			font-size: 32rpx;
			font-weight: bold;
		}
	}
	.main {
		background: #fff;
		
		.w_main_title {
			padding: 30rpx;
			font-size: 32rpx;
			font-weight: bold;
			border-bottom: 1rpx solid #E6E6E6;
		}
		.w_class_list {
			padding-top: 30rpx;
			
		}
		.w_class_item {
			padding: 0 30rpx 30rpx 30rpx;
			display: flex;
			justify-content: space-between;
			
			.img {
				margin-right: 20rpx;
			}
			.class_type {
				display: flex;
				flex-direction: column;
				font-size: 26rpx;
				color: #999;
				
				text {
					margin-bottom: 10rpx;
				}
				.name {
					font-size: 32rpx;
					font-weight: bold;
					color: #212121;
				}
				.price {
					color: #F63235;
					font-size: 34rpx;
					font-weight: bold;
				}
			}
			.btn {
				display: flex;
				align-items: center;
				
				.btnUrl {
					width: 135rpx;
					height: 52rpx;
					background: linear-gradient(118deg, #384AD2, #5269F7);
					border-radius: 26px;
					display: flex;
					align-items: center;
					justify-content: center;
					font-size: 26rpx;
					color: #fff;
				}
			}
		}
		.delUrl {
			display: flex;
		}
	}
	.teachItem {
		width: 100%;
		box-sizing: border-box;
		padding-left: 20rpx;
		background: #fff;
		
		.scroll {
			width: 100%;
			overflow: hidden;
			white-space: nowrap;
			
			.box {
				width: 368rpx;
				height: 175rpx;
				display: flex;
				align-items: center;
				margin: 16rpx 20rpx 16rpx 16rpx;
				padding-left: 30rpx;
				border-radius: 8rpx;
				box-shadow: 0px 0px 16px rgba(68, 68, 68, 0.27);
				
				.teachImg {
					margin-right: 20rpx;
				}
				.teachIcon {
					margin-right: 10rpx;
				}
				.teach_resume_rank {
					display: flex;
					align-items: center;
					margin: 20rpx 0 4rpx 0;
					font-size: 24rpx;
				}
				.teach_resume_name {
					font-size: 32rpx;
				}
				.teach_resume_time {
					color: #999999;
					font-size: 24rpx;
				}
			}
			.scrollUrl {
				display: inline-block;
			}
		}
	}
	.w_school_resume {
		padding: 0 30rpx 190rpx 30rpx;
		background: #FFFFFF;
		
		.w_school_resume_title {
			padding: 30rpx 0;
			font-size: 32rpx;
			font-weight: bold;
		}
	}
	.w_school_resume_bar {
		width: 100%;
		padding: 26rpx 30rpx 36rpx 30rpx;
		background: #fff;
		position: fixed;
		bottom: 0;
		
		.w_barbtn {
			padding: 30rpx;
			background: linear-gradient(-118deg, #384AD2, #5269F7);
			border-radius: 44px;
			text-align: center;
			font-size: 32rpx;
			color: #ffffff;
		}
	}
</style>
