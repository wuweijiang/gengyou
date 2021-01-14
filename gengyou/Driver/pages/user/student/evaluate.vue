<template>
	<view>
		<navBar
		:title = "title"
		:textStyle = "textStyle"
		:backColor = "backColor"
		:titleColor = "titleColor"
		:borderBottom = "borderBottom"
		></navBar>
		<view class="w_class_list">
			<u-image 
				width="150rpx" 
				height="150rpx" 
				border-radius="8"
				src="https://timgsa.baidu.com/timg?image">
			</u-image>
			<view class="w_class_listR">
				<view class="w_class_con">
					<text class="title">科二陪练</text>
					<text class="class">科二</text>
					<text class="jiaolian">好的话教练</text>
				</view>
				<view class="price">
					￥160
				</view>
			</view>
		</view>
		<view class="rate">
			<text>评分</text>
			<u-rate 
			:count="form.count" 
			size="50" 
			inactive-icon="star-fill" 
			inactive-color="#eeeeee"
			active-color="#F5C826"
			min-count="1"
			v-model="form.rateval"
			></u-rate>
		</view>
		<view class="textarea">
			<u-field
				v-model="form.textarea"
				placeholder="在这里输入你对此次的评价"
				type="textarea"
				label-width="0"
				placeholder-style="color:#a6a6a6"
				:border-bottom="false"
				:border-top="false"
				@focus="clear"
				@blur="fieldValid"
			>
			</u-field>
			<view class="tips">
				<view :class="tips ? 'tips_txt' : ''">（不少于10个字）</view>
			</view>
		</view>
		<view class="imgUpload">
			<u-upload 
			class="upload"
			ref="uUpload"
			:action="form.action" 
			:file-list="form.fileList" 
			:max-size="2 * 1024 * 1024" 
			max-count="6"
			:custom-btn="true"
			v-show="form.fileList.length >= 6 ? false : true"
			>
				<view slot="addBtn" class="slot-btn" hover-class="slot-btn__hover" hover-stay-time="150">
					<u-icon name="photo" size="60" :color="$u.color['lightColor']"></u-icon>
					<text>上传图片</text>
				</view>
			</u-upload>
			<u-toast ref="uToast" />
		</view>
		<u-button
		@click="submit"
		shape="circle"
		:ripple="true"
		ripple-bg-color="rgba(81,104,246,.5)"
		:custom-style="customStyle"
		>立即报名</u-button>
	</view>
</template>

<script>
	import navBar from "@/components/nav-bar/nav-bar.vue";
	
	export default {
		components: {
			navBar
		},
		data() {
			return {
				title: "评价",
				textStyle: { color: '#606266' },
				backColor: "#606266",
				titleColor: "#333",
				borderBottom: true,
				tips: false,
				form: {
					count:5,
					rateval:1,
					textarea:'',
					action: 'http://www.example.com/upload',
					fileList: [],
				},
				customStyle: {
					width: '680rpx',
					background: 'linear-gradient(86deg, #5269F7, #384AD2)',
					color: '#fff',
					border: 'none',
					height: '88rpx'
				},
				
			}
		},
		methods: {
			submit() {
				if(this.form.textarea.length < 10) {
					this.$refs.uToast.show({title:'请填写十字以上评价'});
					return
				}
				let files = [];
				files = this.$refs.uUpload.lists;
				files = this.$refs.uUpload.lists.filter(val => {
					return val.progress == 100;
				})
				this.fileList = files;
			},
			fieldValid() {
				if(this.form.textarea.length < 10) {
					this.tips = true;
				}
			},
			clear() {
				this.tips = false;
			}
		}
	}
</script>

<style lang="scss" scoped>
	page {
		background: #fafafa;
	}
	.w_class_list {
		padding: 30rpx;		
		display: flex;
		background: #fff;
		border-bottom: 1rpx solid #e6e6e6;
	}
	.w_class_listR {
		flex: 1;
		display: flex;
		justify-content: space-between;
		margin-left: 20rpx;
	}
	.w_class_con {
		display: flex;
		flex-direction: column;
		
		.jiaolian {
			font-size: 26rpx;
			color: #666;
		}
	}
	.w_class_con text {
		font-size: 26rpx;
		color: #999;
	}
	.w_class_con .title {
		font-size: 32rpx;
		color: #212121;
	}
	.price {
		margin-right: 20rpx;
		font-size: 30rpx;
		color: #F63235;
	}
	.w_class_con .class {
		padding: 6rpx 0;
		color: #666;
	}
	.w_coach_con {
		padding: 0 30rpx;
	}
	.rate {
		padding: 30rpx 50rpx;
		margin-top: 20rpx;
		background: #FFFFFF;
		border-bottom: 1rpx solid #e6e6e6;
		border-top: 1rpx solid #e6e6e6;
		font-size: 28rpx;
		font-weight: bold;
		display: flex;
		flex-direction: column;
		text {
			margin-bottom: 20rpx;
		}
	}
	.textarea {
		background: #fff;
		border-top: 1px solid #E6E6E6;
		border-bottom: 1px solid #E6E6E6;
		margin-top: 20rpx;
		
		.tips {
			display: flex;
			flex-direction: row-reverse;
			font-size: 26rpx;
			padding: 10rpx;
			color: #212121;
			&_txt {
				color: #fa3534;
				animation: tips .5s;
			}
		}
		@keyframes tips {
			0% {
				transform:rotate(0deg) scale(1);
			}
			20% {
				transform:rotate(-5deg) scale(1.05);
			}
			40% {
				transform:rotate(5deg) scale(1.05);
			}
			60% {
				transform:rotate(-5deg) scale(1.05);
			}
			80% {
				transform:rotate(5deg) scale(1.05);
			}
			100% {
				transform:rotate(0deg) scale(1);
			}
		}
	}
	.slot-btn {
		width: 200rpx;
		height: 200rpx;
		margin: 10rpx;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		background: rgb(244, 245, 246);
		border-radius: 10rpx;
		font-size: 24rpx;
		color: #a6a6a6;
	}
	
	.slot-btn__hover {
		background-color: rgb(235, 236, 238);
	}
	.imgUpload {
		padding: 20rpx;
		.upload {
			padding-bottom: 30rpx;
			border-bottom: 1rpx solid #e6e6e6;
		}
	}
</style>
