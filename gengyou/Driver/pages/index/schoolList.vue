<template>
	<view class="background">
		<navBar
		:title = "title"
		:titleColor = "titleColor"
		:borderBottom = "borderBottom"
		></navBar>
		<u-sticky>
			<uni-search-bar 
			@confirm="search"
			placeholder="输入驾校/教练"
			radius="100"
			bgColor="#EEEEEE"
			color="#999"
			textcolor="#333"
			/>
		</u-sticky>
		<schoolList :tags="tags"></schoolList>
		<u-loadmore :status="status" :load-text="loadText" />
	</view>
</template>

<script>
	import schoolList from "../../components/school-list/school-list.vue"
	import navBar from "../../components/nav-bar/nav-bar.vue"
	
	export default {
		components:{
			schoolList,
			navBar
		},
		data() {
			return {
				title: "驾校排名",
				titleColor: "#333",
				borderBottom: true,
				status: "loadmore",
				loadText: {
					loadmore: '轻轻上拉',
					loading: '努力加载中',
					nomore: '实在没有了'
				},
				tags:[{
						id:1,
						paiming:1,
						name: '隆鼎驾培城',
						price: 1000,
						image: 'https://cdn.uviewui.com/uview/swiper/1.jpg',
						rate:"4.0",
						tags:[
							"一人一车","专车接送","一对一教学"
						]
					},
					{
						id:2,
						paiming:2,
						name: '隆鼎驾培城',
						price: 1000,
						image: 'https://cdn.uviewui.com/uview/swiper/1.jpg',
						rate:4.0,
						tags:[
							"一人一车","专车接送","一对一教学"
						]
					},
					{
						id:3,
						paiming:3,
						name: '隆鼎驾培城',
						price: 1000,
						image: 'https://cdn.uviewui.com/uview/swiper/1.jpg',
						rate:4.0,
						tags:[
							"一人一车","专车接送","一对一教学"
						]
					},
					{
						id:3,
						paiming:'',
						name: '隆鼎驾培城',
						price: 1000,
						image: 'https://cdn.uviewui.com/uview/swiper/1.jpg',
						rate:4.0,
						tags:[
							"一人一车","专车接送","一对一教学"
						]
					},
					{
						id:3,
						paiming:'',
						name: '隆鼎驾培城',
						price: 1000,
						image: 'https://cdn.uviewui.com/uview/swiper/1.jpg',
						rate:4.0,
						tags:[
							"一人一车","专车接送","一对一教学"
						]
					},
					{
						id:3,
						paiming:'',
						name: '隆鼎驾培城',
						price: 1000,
						image: 'https://cdn.uviewui.com/uview/swiper/1.jpg',
						rate:4.0,
						tags:[
							"一人一车","专车接送","一对一教学"
						]
					},
					{
						id:3,
						paiming:'',
						name: '隆鼎驾培城',
						price: 1000,
						image: 'https://cdn.uviewui.com/uview/swiper/1.jpg',
						rate:4.0,
						tags:[
							"一人一车","专车接送","一对一教学"
						]
					},
					{
						id:3,
						paiming:'',
						name: '隆鼎驾培城',
						price: 1000,
						image: 'https://cdn.uviewui.com/uview/swiper/1.jpg',
						rate:4.0,
						tags:[
							"一人一车","专车接送","一对一教学"
						]
					},
					{
						id:3,
						paiming:'',
						name: '隆鼎驾培城',
						price: 1000,
						image: 'https://cdn.uviewui.com/uview/swiper/1.jpg',
						rate:4.0,
						tags:[
							"一人一车","专车接送","一对一教学"
						]
					}
				]
			}
		},
		methods: {
			search(e){
				console.log(e.value.trim())
				setTimeout(()=>{
					this.keywords = "ss"
				},5000)
			},
		},
		onPullDownRefresh() {
			console.log("下拉")
		},
		onReachBottom() {
			console.log("上拉");
			this.status = this.loadText.loading
		}
	}
</script>

<style lang="scss" scoped>
	.background {
		padding: 0 24rpx;
	}
	.uni-input-placeholder {
		color: #999;
	}
	.uni-searchbar {
		padding: 20rpx 10rpx 20rpx 10rpx;
		background-color: #fff;
	}
</style>
