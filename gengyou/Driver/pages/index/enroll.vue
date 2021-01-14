<template>
	<view class="background">
		<navBar
		:navBg = "navBg"
		:title = "title"
		:titleColor = "titleColor"
		></navBar>
		<view class="w_form">
			<u-form :model="form" :error-type="errorType" ref="uForm">
				<u-form-item label="姓名" label-width="140" prop="user_name">
					<u-input v-model="form.user_name"/>
				</u-form-item>
				<u-form-item label="手机号" label-width="140" prop="phone" >
					<u-input v-model="form.phone" type="number"/>
				</u-form-item>
				<u-form-item label="性别" label-width="140" prop="gender">
					<u-input v-model="form.gender" type="select" :select-open="sexShow" placeholder="请选择性别" @click="sexShow = true"/>
					<u-action-sheet :list="sexList" v-model="sexShow" border-radius="14" @click="sexCallback"></u-action-sheet>
				</u-form-item>
				<u-form-item label="身份证号" label-width="140" prop="idnumber" >
					<u-input v-model="form.idnumber" type="idcard"/>
				</u-form-item>
				<u-form-item label="选择驾校" label-width="140" prop="school">
					<u-input v-model="form.school" type="select" :select-open="schoolShow" placeholder="请选择驾校" @click="schoolShow = true"/>
					<u-action-sheet :list="schoolList" v-model="schoolShow" border-radius="14" @click="schoolCallback"></u-action-sheet>
				</u-form-item>
				<u-form-item label="驾照类型" label-width="140" prop="sign_type">
					<u-input v-model="form.sign_type" type="select" :select-open="typeShow" placeholder="请选择驾照类型" @click="typeShow = true"/>
					<u-action-sheet :list="typeList" v-model="typeShow" border-radius="14" @click="typeCallback"></u-action-sheet>
				</u-form-item>
				<view class="w_tips">
					<u-icon name="error-circle"></u-icon>
					<text>提交成功后，选择的驾校和教练会与您联系</text>
				</view>
				<u-button 
				@click="submit"
				shape="circle"
				:ripple="true"
				ripple-bg-color="rgba(101, 220, 226, 0.5)"
				:custom-style="customStyle"
				>立即报名</u-button>
			</u-form>
		</view>
	</view>
</template>

<script>
	import navBar from "../../components/nav-bar/nav-bar.vue"
	
	export default {
		components: {
			navBar
		},
		data() {
			return {
				navBg: { background: '#fff' },
				title: "驾校报名",
				titleColor: "#333",
				form: {
					user_name: '',
					phone: '',
					gender: '',
					idnumber:'',
					school_id:'',
					school:'',
					sign_type: ''
				},
				sexList: [
					{
						text: '男'
					},
					{
						text: '女'
					}
				],
				schoolList: [],
				typeList: [
					{
						text: 'C1'
					},
					{
						text: 'C2'
					}
				],
				sexShow: false,
				schoolShow: false,
				typeShow: false,
				rules: {
					user_name: [
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
							trigger: 'blur' 
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
					gender: [
						{
							required: true,
							message: '请选择性别',
							trigger: 'change' ,
							
						},
					],
					idnumber: [
						{
							required: true,
							message: '请输入身份证号',
							trigger: 'blur' ,
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
							message: '请选择驾校',
							trigger: 'change' ,
							
						}
					],
					sign_type: [
						{
							required: true,
							message: '请选择驾照类型',
							trigger: 'change' ,
							
						}
					]
				},
				errorType: ['message'],
				customStyle: {
					background: 'linear-gradient(-86deg, rgba(58, 132, 241, 0.97), rgba(101, 220, 226, 0.97))',
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
						this.$u.api.signUp(this.form).then( res => {
							console.log(res)
							this.$uForm.resetFields();
						})
						console.log('验证通过');
					} else {
						console.log('验证失败');
					}
				});
			},
			sexCallback(index) {
				this.form.gender = this.sexList[index].text;
			},
			schoolCallback(index) {
				this.form.school = this.schoolList[index].text;
				this.form.school_id = this.schoolList[index].id
			},
			typeCallback(index) {
				this.form.sign_type = this.typeList[index].text;
			}
		},
		onReady() {
			this.$refs.uForm.setRules(this.rules);
		},
		onLoad() {
			this.$u.api.getSchool().then( res => {
				res.forEach( item => {
					let arr = {id:"", text:""};
					arr.id = item.id;
					arr.text = item.school_name;
					this.schoolList.push(arr);
				})
			});
		}
	};
</script>

<style lang="scss" scoped>
	.background {
		position: fixed;
		top: 88rpx;
		right: 0;
		bottom: 0;
		left: 0;
		background-image: url(../../static/image/bm_icon_bj@2x.png);
		background-position: top center;
		background-repeat: no-repeat;
		background-size: contain;
		background-color: #489EF5;
	}
	.w_form {
		width: 690rpx;
		// height: 780rpx;
		background-color: #fff;
		border-radius: 10rpx;
		position: fixed;
		left: 0;
		right: 0;
		bottom: 40rpx;
		margin: auto;
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
</style>
