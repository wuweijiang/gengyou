<template>
	<view class="wrap">
		<navBar
		:title = "title"
		:textStyle = "textStyle"
		:backColor = "backColor"
		:titleColor = "titleColor"
		:borderBottom = "borderBottom"
		></navBar>
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
</template>

<script>
	import navBar from "../../components/nav-bar/nav-bar.vue";
	import previewImage from '@/components/kxj-previewImage/kxj-previewImage.vue';
	
	export default {
		components:{
			navBar,
			previewImage
		},
		data() {
			return {
				title: '评价列表',
				textStyle: { color: '#606266' },
				backColor: "#606266",
				titleColor: "#333",
				borderBottom: true,
				count:5,
				rate:4,
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
			}
		},
		methods: {
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
