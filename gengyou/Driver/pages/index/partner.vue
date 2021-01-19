<template>
	<view class="background">
		<navBar
		:navBg = "navBg"
		:title = "title"
		:backColor = "backColor"
		:textStyle = "textStyle"
		></navBar>
		<view class="w_s_title"></view>
		<view class="w_form">
			<view class="w_form_title">
				申请合伙人
			</view>
			<u-form :model="form" :error-type="errorType" ref="uForm">
				<u-form-item label="姓名 : " label-width="140" prop="name">
					<u-input v-model="form.name"/>
				</u-form-item>
				<u-form-item label="手机号 : " label-width="140" prop="phone" >
					<u-input v-model="form.phone" type="number"/>
				</u-form-item>
				<u-form-item label="身份证号 : " label-width="140" prop="idcard" >
					<u-input v-model="form.idcard" type="idcard"/>
				</u-form-item>
				<u-form-item label="驾校名称 : " label-width="140" prop="school">
					<u-input v-model="form.school"/>
				</u-form-item>
				<u-form-item label="上传资质 : " label-width="140" prop="files">
					<u-upload 
					:action="action" 
					:file-list="form.fileList" 
					width="150"
					height="150"
					max-count="2"
					upload-text=""
					@on-error="error"
					@on-uploaded="uploaded"
					></u-upload>
				</u-form-item>
				<u-button 
				@click="submit"
				shape="circle"
				:ripple="true"
				ripple-bg-color="rgba(101, 220, 226, 0.5)"
				:custom-style="customStyle"
				>成为合伙人</u-button>
			</u-form>
			<u-toast ref="uToast" />
		</view>
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
				navBg: { background: 'linear-gradient(100deg, #5269F7, #3B4ED7)' },
				title: "申请合伙人",
				backColor: "#fff",
				textStyle: { color: '#fff' },
				form: {
					name: '',
					phone: '',
					idcard:'',
					school:'',
					fileList: []
				},
				action: '/api/upload',
				rules: {
					name: [
						{
							required: true,
							message: '请输入姓名',
							trigger: 'blur' ,
						},
						{
							min: 2,
							max: 5,
							message: '姓名长度在2到5个字',
							trigger: ['change','blur'],
						},
						{
							// 此为同步验证，可以直接返回true或者false，如果是异步验证，稍微不同，见下方说明
							validator: (rule, value, callback) => {
								// 调用uView自带的js验证规则，详见：https://www.uviewui.com/js/test.html
								return this.$u.test.chinese(value);
							},
							message: '姓名必须为中文',
							// 触发器可以同时用blur和change，二者之间用英文逗号隔开
							trigger: ['change','blur'],
						}
					],
					phone: [
						{
							required: true,
							message: '请输入手机号',
							trigger: 'blur' ,
							
						},
						{
							// 此为同步验证，可以直接返回true或者false，如果是异步验证，稍微不同，见下方说明
							validator: (rule, value, callback) => {
								// 调用uView自带的js验证规则，详见：https://www.uviewui.com/js/test.html
								return this.$u.test.mobile(value)
							},
							message: '请输入正确手机号',
							// 触发器可以同时用blur和change，二者之间用英文逗号隔开
							trigger: ['change','blur'],
						}
					],
					idcard: [
						{
							required: true,
							message: '请输入身份证',
							trigger: 'blur'
						},
						{
							// 此为同步验证，可以直接返回true或者false，如果是异步验证，稍微不同，见下方说明
							validator: (rule, value, callback) => {
								// 调用uView自带的js验证规则，详见：https://www.uviewui.com/js/test.html
								return this.$u.test.idCard(value)
							},
							message: '请输入正确身份证',
							// 触发器可以同时用blur和change，二者之间用英文逗号隔开
							trigger: ['change','blur'],
						}
					],
					school: [
						{
							required: true,
							message: '请输入驾校名称',
							trigger: 'blur' ,
						}
					]
				},
				errorType: ['toast'],
				customStyle: {
					background: 'linear-gradient(-86deg, #384AD2, #5269F7)',
					color: '#fff',
					border: 'none',
					height: '88rpx'
				}
			};
		},
		methods: {
			submit() {
				this.$refs.uForm.validate(valid => {
					if (valid) {
						if(this.form.fileList.length <= 0) {
							this.$refs.uToast.show({
								title: '请上传资质'
							})
						}else {
							console.log('验证通过');
						}
					} else {
						console.log('验证失败');
					}
				});
			},
			uploaded(lists, index) {
				console.log(lists)
			},
			error(res, index, lists, name) {
				console.log(lists)
				console.log(res)
				console.log(index)
				console.log(name)
			}
		},
		onReady() {
			this.$refs.uForm.setRules(this.rules);
		}
	};
</script>

<style lang="scss" scoped>
	.background {
		position: fixed;
		top: 0;
		right: 0;
		bottom: 0;
		left: 0;
	}
	.w_s_title {
		height: 200rpx;
		background: linear-gradient(118deg, #5269F7, #384AD2);;
	}
	.w_form {
		width: 660rpx;
		// height: 780rpx;
		background-color: #fff;
		border-radius: 10rpx;
		margin: 0 auto;
		margin-top: -100rpx;
		box-shadow: 0 0 40rpx #999;
		padding: 0rpx 40rpx 30rpx 40rpx;
	}
	.w_tips {
		text-align: center;
		color: #A0A0A0;
		font-size: 26rpx;
		padding: 30rpx 0;
	}
	.w_tips text {
		margin-left: 6rpx;
	}
	.w_form_title {
		padding: 50rpx 0;
		text-align: center;
		font-size: 40rpx;
		color: #384AD2;
		font-weight: bold;
	}
</style>

