<template>
	<view class="wrap">
		<navBar
		:title = "title"
		:titleColor = "titleColor"
		:borderBottom = "borderBottom"
		></navBar>
		<u-cell-group :border="false">
			<u-cell-item title="头像" :arrow="true" @click="cell">
				<u-image slot="right-icon" :src="src" width="100rpx" height="100rpx" @click="prvImg"></u-image>
			</u-cell-item>
			<u-cell-item title="手机号" value="18862536272" :arrow="true"></u-cell-item>
			<u-cell-item title="姓名" value="柳江" :arrow="false"></u-cell-item>
			<u-cell-item title="性别" value="男" :arrow="false"></u-cell-item>
			<u-cell-item title="身份证号码" value="61061011110002222" :arrow="false"></u-cell-item>
			<u-cell-item title="驾校" value="青海隆鼎驾培城" :arrow="false"></u-cell-item>
		</u-cell-group>
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
				title: "个人资料",
				titleColor: "#333",
				borderBottom: true,
				src:'blob:http://localhost:8080/b63aa702-f064-4c58-a8df-9c40d1ea4bea'
			}
		},
		methods: {
			cell(index) {
				var _this = this;
				if(event.currentTarget == event.target) {
					uni.chooseImage({
						count: 1,
						success(res) {
							var imgFiles = res.tempFilePaths[0];
							_this.src = imgFiles;
							uni.uploadFile({
								// 需要上传的地址
								url:'http://demo.hcoder.net/index.php?c=uperTest',
								// filePath  需要上传的文件
								filePath: imgFiles,
								name: 'file',
								success(res1) {
								    // 显示上传信息
								    console.log(res1)
								}
							})
						}
					})
				}
				
			},
			prvImg() {
				uni.previewImage({
					urls: [this.src]
				});
			}
		}
	}
</script>

<style lang="scss" scoped>
	.wrap {
		padding: 0 30rpx;
	}
	.u-cell {
		padding-left: 6rpx;
		padding-right: 6rpx;
	}
</style>
