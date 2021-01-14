<template>
	<view>
		<navBar
		:title = "title"
		:navBg = "navBg"
		:isBack = "isBack"
		:textStyle = "textStyle"
		></navBar>
		<view class="title">
			<text>登录</text>
		</view>
		<view class="loginCon">
			<u-form :model="form" ref="uForm" :error-type="errorType">
				<u-form-item label="账号" prop="name" placeholder="请输入账号"><u-input v-model="form.name"/></u-form-item>
				<u-form-item label="密码" prop="password" placeholder="请输入密码" class="pass"><u-input v-model="form.password" type="password" :password-icon="true"/></u-form-item>
			</u-form>
			<view class="btn comfire" @click="submit">
				登录
			</view>
			<view class="btn chanel">
				取消
			</view>
		</view>
	</view>
</template>

<script>
	import navBar from "@/components/nav-bar/nav-bar.vue"
	export default {
		components:{
			navBar
		},
		data() {
			return {
				title: "",
				navBg: { background: 'linear-gradient(118deg, #5063F9 15%, #3B47DB)' },
				isBack: false,
				textStyle: {
					color: '#fff'
				},
				form: {
					name: '',
					password: ''
				},
				rules: {
					name: [
						{
							required: true, 
							message: '账号为手机号',
							trigger: ['change','blur'],
						},
						{
							// 自定义验证函数，见上说明
							validator: (rule, value, callback) => {
								
								return this.$u.test.mobile(value);
							},
							message: '手机号码不正确',
							// 触发器可以同时用blur和change
							trigger: ['change','blur'],
						}
					],
					password: [
							{
								required: true, 
								message: '密码为6~18位字母数字组合',
								pattern: /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,18}$/,
								// (?![0-9A-Z]+$)(?![0-9a-z]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,18}$
								trigger: ['change','blur'],
							}
					]
				},
				errorType: ['message']
			}
		},
		methods: {
			submit() {
				this.$refs.uForm.validate(valid => {
					if (valid) {
						console.log('验证通过');
					} else {
						console.log('验证失败');
						this.$refs.uForm.resetFields();
						this.$u.api.getTest().then( res => {
							console.log(res)
						})
					}
				});
			}
		},
		onReady() {
			this.$refs.uForm.setRules(this.rules);
		}
	}
</script>

<style lang="scss" scoped>
	.title {
		width: 100%;
		height: 400rpx;
		margin-top: -1rpx;
		padding-top: 50rpx;
		background: url(../../../static/image/denglu_bj@2x.png) no-repeat;
		background-position: 0 -50rpx;
		background-size: cover;
		font-size: 44rpx;
		color: #fff;
		
		text {
			padding-left: 70rpx;
		}
	}
	.loginCon {
		width: 690rpx;
		height: 800rpx;
		margin: 0 auto;
		margin-top: -200rpx;
		padding: 50rpx 65rpx 0 65rpx;
		background: #FFFFFF;
		box-shadow: 0rpx 2rpx 32rpx 0rpx rgba(60, 73, 220, 0.2);
		border-radius: 40rpx;
		
		.pass {
			margin-top: 30rpx;
		}
		.btn {
			padding: 28rpx 0;
			border-radius: 50px;
			text-align: center;
			font-size: 36rpx;
			
			&.comfire {
				margin-top: 136rpx;
				background: linear-gradient(118deg, #5269F7, #384AD2);
				color: #fff;
			}
			&.chanel {
				margin-top: 40rpx;
				background: #fff;
				border: 1px solid #DDDDDD;
			}
		}
	}
</style>
