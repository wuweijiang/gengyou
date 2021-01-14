// 如果没有通过拦截器配置域名的话，可以在这里写上完整的URL(加上域名部分)
let examUrl = '/exam',
	indexUrl = '/index',
	flowUrl = '/flow',
	getSchoolUrl = '/getSchool',
	signUpUrl = '/sign_up'

// 此处第二个参数vm，就是我们在页面使用的this，你可以通过vm获取vuex等操作，更多内容详见uView对拦截器的介绍部分：
// https://uviewui.com/js/http.html#%E4%BD%95%E8%B0%93%E8%AF%B7%E6%B1%82%E6%8B%A6%E6%88%AA%EF%BC%9F
const install = (Vue, vm) => {
	// 此处没有使用传入的params参数
	let	getIndex = (params = {}) => vm.$u.get(indexUrl);//首页
	let	getExam = (params = {}) => vm.$u.get(examUrl);//学车流程
	let	getFlow = (params = {}) => vm.$u.get(flowUrl);//报名流程
	let	getSchool = (params = {}) => vm.$u.get(getSchoolUrl);//报名流程
	let	signUp = (params = {}) => vm.$u.post(signUpUrl, params);//报名
	
	// 此处使用了传入的params参数，一切自定义即可
	// let getInfo = (params = {}) => vm.$u.post(indexUrl, params);
	
	// 将各个定义的接口名称，统一放进对象挂载到vm.$u.api(因为vm就是this，也即this.$u.api)下
	vm.$u.api = {getIndex, getExam, getFlow, getSchool, signUp};
}

export default {
	install
}