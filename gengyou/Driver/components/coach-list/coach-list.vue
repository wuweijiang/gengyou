<template name="coachList">
	<view>
			<view class="w_recommend_item" v-for="(item,index) in tags" :key="index" @click="toDetail(item)">
				<view class="w_ranking">
					<u-image
					width="43rpx" 
					height="37rpx" 
					:src="item.paiming == 1 ? '/static/image/icon_huangguan1@2x.png' : item.paiming == 2 ? '/static/image/icon_huangguan2@2x.png' : item.paiming == 3 ? '/static/image/icon_huangguan3@2x.png' : ''" v-if="item.paiming < 4"></u-image>
					<text v-else>{{item.paiming}}</text>
				</view>
				<u-image class="w_recommend_item_image"
					width="110rpx" 
					height="110rpx" 
					shape="circle"
					:src="item.image">
				</u-image>
				<view class="w_recommend_item_con">
					<view class="w_recommend_item_title">
						<view class="w_name">
							{{item.name}}
							<text class="w_school">{{item.school}}</text>
						</view>
						<view class="w_price"><text>￥</text>{{item.price}}起</view>
					</view>
					<view class="w_recommend_item_rate">
						<u-rate 
						:count="count" 
						v-model="item.rate"
						active-color="#F5C826" 
						inactive-color="#DBDBDB"
						size="24"
						gutter="6"
						:disabled="true"
						inactive-icon="star-fill"
						></u-rate>
						<view class="w_recommend_item_fen">{{item.rate}}分</view>
					</view>
					<view class="w_recommend_item_tags">
						<u-tag class="tag"
						v-for="itemv in item.tags"
						size="mini" 
						border-color="transparent" 
						:text="itemv"
						/>
					</view>
				</view>
			</view>
	</view>
</template>

<script>
	export default {
		name: "coachList",
		props:{
			tags:{
				type: Array
			},
			
		},
		data() {
			return {
				count: 5,
			}
		},
		methods: {
			toDetail(item) {
				this.$u.route('/pages/index/coachDetail', {
					item: JSON.stringify(item)
				});
			}
		}
	}
</script>

<style lang="scss" scoped>
	.w_recommend_item {
		width: 100%;
		padding: 30rpx 24rpx;
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
</style>
