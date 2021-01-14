<template>
	<view>
		<navBar
		:navBg = "navBg"
		:title = "title"
		:textStyle = "textStyle"
		:backColor = "backColor"
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
		<coachList :tags="tags"></coachList>
		<u-loadmore :status="status" :load-text="loadText" />
	</view>
</template>

<script>
	import coachList from "../../components/coach-list/coach-list.vue"
	import navBar from "../../components/nav-bar/nav-bar.vue"
	
	export default {
		components:{
			coachList,
			navBar
		},
		data() {
			return {
				navBg: { background: 'linear-gradient(-100deg, #3945D9, #4E61F7)' },
				title: "教练列表",
				textStyle: { color: '#fff' },
				backColor: "#fff",
				loadText: {
					loadmore: '轻轻上拉',
					loading: '努力加载中',
					nomore: '实在没有了'
				},
				count: 5,
				status: "loadmore",
				tags:[{
						id: 1,
						paiming: 1,
						name: '张三',
						price: 1000,
						school: '鹏翔驾校',
						image: 'https://cdn.uviewui.com/uview/swiper/1.jpg',
						rate:"4.0",
						tags:[
							"一人一车","专车接送","一对一教学"
						]
					},
					{
						id: 2,
						paiming: 2,
						name: '李四',
						price: 1000,
						school: '鹏翔驾校',
						image: 'https://cdn.uviewui.com/uview/swiper/1.jpg',
						rate:4.0,
						tags:[
							"一人一车","专车接送","一对一教学"
						]
					},
					{
						id: 3,
						paiming: 3,
						name: '王五',
						price: 1000,
						school: '鹏翔驾校',
						image: 'https://cdn.uviewui.com/uview/swiper/1.jpg',
						rate:4.0,
						tags:[
							"一人一车","专车接送","一对一教学"
						]
					},
					{
						id: 4,
						paiming: 4,
						name: '赵六',
						price: 1000,
						school: '鹏翔驾校',
						image: 'https://cdn.uviewui.com/uview/swiper/1.jpg',
						rate:4.0,
						tags:[
							"一人一车","专车接送","一对一教学"
						]
					},
					{
						id: 5,
						paiming: 5,
						name: '周七',
						price: 1000,
						school: '鹏翔驾校',
						image: 'https://cdn.uviewui.com/uview/swiper/1.jpg',
						rate:4.0,
						tags:[
							"一人一车","专车接送","一对一教学"
						]
					}
				]
			};
		}
	}
</script>

<style lang="scss">
	
</style>
