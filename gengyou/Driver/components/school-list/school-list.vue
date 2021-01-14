<template name="schoolList">
	<view>
		<navigator :url="'../componentsC/badge/index?userid='+item.id"
		v-for="(item,index) in tags" :key="index">
			<view class="w_recommend_item">
				<view class="w-bird" v-if="item.paiming">
					排名{{item.paiming}}
				</view>
				<u-image class="w_recommend_item_image"
					width="200rpx" 
					height="150rpx" 
					border-radius="8"
					:src="item.school_logo">
				</u-image>
				<view class="w_recommend_item_con">
					<view class="w_recommend_item_title">
						<view class="w_name">{{item.school_name}}</view>
						<view class="w_price"><text>￥</text>{{item.price}}</view>
					</view>
					<view class="w_recommend_item_rate">
						<u-rate 
						:count="count" 
						v-model="item.score"
						active-color="#F5C826" 
						inactive-color="#DBDBDB"
						size="24"
						gutter="6"
						:disabled="true"
						inactive-icon="star-fill"
						></u-rate>
						<view class="w_recommend_item_fen">{{item.score}}分</view>
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
		</navigator>
	</view>
</template>

<script>
	export default {
		name: "schoolList",
		props:{
			tags:{
				type: Array
			},
			
		},
		data() {
			return {
				count: 5,
			}
		}
	}
</script>

<style lang="scss" scoped>
	.w_recommend_item {
		width: 100%;
		padding: 40rpx 24rpx;
		display: flex;
		border-bottom: 1rpx solid #EEEEEE;
		position: relative;
	}
	.w-bird {
		position: absolute;
		top: 40rpx;
		left: 24rpx;
		padding: 6rpx 10rpx;
		border-radius: 8rpx 0 20rpx 0;
		background-color: #FEDC62;
		z-index: 55;
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
</style>
