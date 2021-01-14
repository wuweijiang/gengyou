<template>
	<view class="wrap">
		<navBar
		:title = "title"
		:textStyle = "textStyle"
		:backColor = "backColor"
		:titleColor = "titleColor"
		:borderBottom = "borderBottom"
		></navBar>
		<view class="w_recommend_item">
			<u-image class="w_recommend_item_image"
				width="110rpx" 
				height="110rpx" 
				shape="circle"
				:src="info.image">
			</u-image>
			<view class="w_recommend_item_con">
				<view class="w_recommend_item_title">
					<view class="w_name">
						{{info.name}}
						<text class="w_school">{{info.school}}</text>
					</view>
					<view class="w_price"><text>￥</text>{{info.price}}起</view>
				</view>
				<view class="w_recommend_item_rate">
					<u-rate 
					:count="count" 
					v-model="info.rate"
					active-color="#F5C826" 
					inactive-color="#DBDBDB"
					size="24"
					gutter="6"
					:disabled="true"
					inactive-icon="star-fill"
					></u-rate>
					<view class="w_recommend_item_fen">{{info.rate}}分</view>
				</view>
				<view class="w_recommend_item_tags">
					<u-tag class="tag"
					v-for="item in info.tags"
					size="mini" 
					border-color="transparent" 
					:text="item"
					/>
				</view>
			</view>
		</view>
		<view class="w_class_type">
			班型
		</view>
		<view class="w_class_list">
			<u-image 
				width="140rpx" 
				height="140rpx" 
				border-radius="8"
				src="https://timgsa.baidu.com/timg?image">
			</u-image>
			<view class="w_class_listR">
				<view class="w_class_con">
					<text class="title">科二陪练</text>
					<text class="class">科二</text>
					<text class="price">￥100/小时</text>
				</view>
				<u-button shape="circle" :ripple="true" :custom-style="customStyle">约课</u-button>
			</view>
		</view>
		<view class="w_coach_con">
			<view class="w_coach_title">
				教练详情
			</view>
			<u-table padding="14rpx 0">
				<u-tr>
					<u-th width="210rpx">陪练类型</u-th>
					<u-td>科二陪练</u-td>
				</u-tr>
				<u-tr>
					<u-th width="210rpx">陪练价格</u-th>
					<u-td>160/小时</u-td>
				</u-tr>
				<u-tr>
					<u-th width="210rpx">陪练车型</u-th>
					<u-td>手动挡</u-td>
				</u-tr>
				<u-tr>
					<u-th width="210rpx">陪练车辆</u-th>
					<u-td>比亚迪F3</u-td>
				</u-tr>
				<u-tr>
					<u-th width="210rpx">超约时长</u-th>
					<u-td>2小时</u-td>
				</u-tr>
			</u-table>
			<u-parse :html="content"></u-parse>
		</view>
		<view class="w_coach_comment">
			<u-cell-group :border="cellBorder">
				<u-cell-item title="学员评价" value="查看全部" :title-style="titleStyle" :border-bottom="cellBorder" :borderTop="cellBorder" @click="cellNav"></u-cell-item>
			</u-cell-group>
			<view class="comment">
				<view class="comment_del" v-for="(item,index) in comment">
					<u-image
						width="60rpx" 
						height="60rpx" 
						shape="circle"
						:src="item.titleImg">
					</u-image>
					<view class="del_con">
						<view class="time">
							<text>{{item.name}}</text>
							<text class="gray">{{item.time}}</text>
						</view>
						<view class="w_recommend_item_rate">
							<u-rate 
							:count="count" 
							v-model="item.rate"
							active-color="#F5C826" 
							inactive-color="#DBDBDB"
							size="18"
							gutter="6"
							:disabled="true"
							inactive-icon="star-fill"
							></u-rate>
							<view class="w_recommend_item_fen">{{item.rate}}分</view>
						</view>
						<view class="parse">
							<view class="w_comment_text">
								{{item.neirong}}
							</view>
							<scroll-view scroll-x="true" class="scroll">
								<image
									class="item"
									:src="itemm"
									:data-src="itemm"
									:data-index="index"
									@click="previewOpen"
									v-for="itemm in item.imgs">
								</image>
							</scroll-view>
						</view>
					</view>
				</view>
				<previewImage ref="previewImage" :imgs="imgs" :saveBtn="false" :opacity="1"></previewImage>
			</view>
		</view>
		<view class="w_school_resume_bar">
			<navigator url="/pages/index/enroll" class="w_barbtn">报名缴费</navigator>
		</view>
	</view>
</template>

<script>
	import navBar from "@/components/nav-bar/nav-bar.vue";
	import previewImage from '@/components/kxj-previewImage/kxj-previewImage.vue';
	
	export default {
		components: {
			navBar,
			previewImage
		},
		data() {
			return {
				title: "教练详情",
				textStyle: { color: '#606266' },
				backColor: "#606266",
				titleColor: "#333",
				borderBottom: true,
				count:5,
				rate:4,
				cellBorder: false,
				info: {},
				imgs:[],
				comment: [{
					titleImg: 'https://timgsa.baidu.com/timg?image',
					name: '用户18237463726',
					time: '2012-2-12',
					rate: '4',
					neirong: '教学态度好，教学认真，关心学员教学态度好，教学认真，关心学员教学态度好，教学认真，关心学员教学态度好，教学认真，关心学员',
					imgs: ['https://timgsa.baidu.com/timg?image',
					'https://timgsa.baidu.com/timg?image',
					'https://timgsa.baidu.com/timg?image',
					'https://timgsa.baidu.com/timg?image',
					'https://timgsa.baidu.com/timg?image']
				},
				{
					titleImg: 'https://timgsa.baidu.com/timg?image',
					name: '用户18237463726',
					time: '2012-2-12',
					rate: '4',
					neirong: '教学态度好，教学认真，关心学员教学态度好，教学认真，关心学员教学态度好，教学认真，关心学员教学态度好，教学认真，关心学员',
					imgs: ['https://timgsa.baidu.com/timg?image',
					'https://timgsa.baidu.com/timg?image',
					'https://timgsa.baidu.com/timg?image']
				}],
				content: `
							<p>露从今夜白，月是故乡明</p>
							<img src="https://cdn.uviewui.com/uview/swiper/2.jpg" />
							<img src="https://cdn.uviewui.com/uview/swiper/2.jpg" />
						`,
				customStyle: {
					width: '135rpx',
					height: '52rpx',
					marginRight: '0rpx',
					background: 'linear-gradient(118deg, #384AD2, #5269F7)',
					color: '#fff',
					fontSize: '26rpx'
				},
				titleStyle: {
					color: '#212121',
					fontSize: '32rpx',
					fontWeight: 'bold'
				}
				
			}
		},
		onLoad(option) {
			this.info = JSON.parse(option.item);
		},
		methods: {
			cellNav() {
				this.$u.route({
					url:'pages/index/commentList'
				})
			},
			//打开预览e
			previewOpen(e) {
				console.log(e)
				var param = e.currentTarget.dataset.src;
				this.imgs = this.comment[e.currentTarget.dataset.index].imgs;
				console.log(param);

				this.$refs.previewImage.open(param); // 传入当前选中的图片地址或序号
				return; //如需测试和uni原生预览差别可注释这两行
			
				//以下是效果对比相关
				var _this = this;
				uni.showModal({
					title: '请选择',
					content: '请选择使用uni原生图片预览或非原生自定义的图片预览。',
					cancelText: 'uni',
					confirmText: '自定义',
					success: function(res) {
						if (res.confirm) {
							_this.$refs.previewImage.open(param); // 传入当前选中的图片地址或序号
						} else if (res.cancel) {
							uni.previewImage({
								current: param,
								urls: _this.imgs
							});
						}
					}
				});
			}
		}
	}
</script>

<style lang="scss" scoped>
	.w_recommend_item {
		width: 100%;
		padding: 30rpx 30rpx;
		display: flex;
		align-items: center;
		border-bottom: 1rpx solid #EEEEEE;
	}
	.w-bird {
		border-radius: 8rpx 0 20rpx 0;
		background-color: #FEDC62;
		font-size: 22rpx;
	}
	.w_recommend_item_image {
		margin-right: 20rpx;
	}
	.w_recommend_item_con {
		flex: 1;
	}
	.w_recommend_item_title {
		display: flex;
		justify-content: space-between;
	}
	.w_recommend_item_title .w_name {
		font-size: 30rpx;
		font-weight: bold;
	}
	.w_recommend_item_title .w_price {
		font-size: 30rpx;
		font-weight: bold;
		color: #ED4F43;
	}
	.w_recommend_item_title .w_price text {
		font-size: 24rpx;
		font-weight: 500;
	}
	.w_recommend_item_rate {
		display: flex;
		margin: 4rpx 0;
		line-height: 40rpx;
	}
	.w_recommend_item_fen {
		margin-left: 18rpx;
		font-size: 22rpx;
	}
	.w_recommend_item_tags .tag {
		margin-right: 10rpx;
	}
	.w_ranking {
		width: 44rpx;
		margin-right: 20rpx;
		display: flex;
		justify-content: center;
		align-items: center;
		font-size: 28rpx;
	}
	.w_school {
		margin-left: 20rpx;
		font-size: 24rpx;
	}
	.w_class_type {
		padding: 30rpx;
		border-bottom: 1rpx solid #e6e6e6;
		font-size: 32rpx;
		font-weight: bold;
	}
	.w_class_list {
		padding: 30rpx;		
		display: flex;
		border-bottom: 1rpx solid #e6e6e6;
	}
	.w_class_listR {
		flex: 1;
		display: flex;
		align-items: center;
		justify-content: space-between;
		margin-left: 20rpx;
	}
	.w_class_con {
		display: flex;
		flex-direction: column;
	}
	.w_class_con text {
		font-size: 26rpx;
		color: #999;
	}
	.w_class_con .title {
		font-size: 32rpx;
		color: #212121;
	}
	.w_class_con .price {
		font-size: 34rpx;
		color: #F63235;
	}
	.w_class_con .class {
		padding: 6rpx 0;
	}
	.w_coach_con {
		padding: 0 30rpx;
	}
	.w_coach_title {
		padding: 30rpx 0;
		font-size: 32rpx;
		color: #212121;
		font-weight: bold;
	}
	.u-table {
		margin-bottom: 40rpx;
	}
	.u-th {
		font-weight: 500;
	}
	.w_coach_comment {
		padding-bottom: 170rpx;
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
	.w_recommend_item_rate {
		margin-top: -2rpx;
		margin-bottom: 10rpx;
	}
	.comment {
		padding: 0 30rpx;
	}
	.comment_del {
		padding: 26rpx 0;
		display: flex;
		border-bottom: 1rpx solid #e6e6e6;
		
		.del_con {
			flex: 1;
			overflow: hidden;
			margin-left: 20rpx;
		}
		.time {
			display: flex;
			justify-content: space-between;
			font-size: 28rpx;
			
			.gray {
				color: #a6a6a6;
			}
		}
	}
	.w_comment_text {
		text-align: justify;
		word-break: keep-all;
		word-wrap:break-word;
		margin-bottom: 20rpx;
		font-size: 26rpx;
	}
	.scroll {
		width: 100%;
		overflow: hidden;
		white-space: nowrap;
		display: flex;
		
		.item {
			margin-right: 20rpx;
			width: 160rpx;
			height: 135rpx;
			border-radius: 4rpx;
		}
	}
</style>
