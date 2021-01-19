<template>
	<view>
		<navBar
		:navBg = "navBg"
		:isBack = "false"
		></navBar>
		<view class="background">
			<view class="w_search_con">
				<u-image class="w_logo"
					width="78rpx" 
					height="71rpx" 
					src="@/static/image/sy_icon_logo.png">
				</u-image>
				<uni-search-bar 
				@confirm="search"
				placeholder="输入驾校/教练"
				radius="100"
				bgColor="rgba(255,255,255,0.2)"
				/>
			</view>
			<view class="w_banner">
				<u-swiper 
				:list="banner"
				height="326"
				bgColor="transparent"
				border-radius="16"
				></u-swiper>
			</view>
			<view class="w_nav">
				<view class="w_nav_item" v-for="(item,index) in nav" :key="index">
					<navigator :url="item.url"
					over-class="none">
						<u-image width="96rpx" height="96rpx" :src="item.img"></u-image>
						<text>{{item.title}}</text>
					</navigator>
				</view>
			</view>
		</view>
		<view class="w_recommend_list">
			<u-sticky>
				<view class="sticky">
					驾校推荐
				</view>
			</u-sticky>
			<schoolList :tags="school"></schoolList>
		</view>
	</view>
</template>

<script>
	import schoolList from "@/components/school-list/school-list.vue"
	import navBar from "@/components/nav-bar/nav-bar.vue"
	
	export default {
		components:{
			schoolList,
			navBar
		},
		data() {
			return {
				keywords: "武韦江",
				navBg: { background: 'linear-gradient(100deg, #4F63F8 10%, #3A47DB)' },
				banner: [],
				nav: [{
						url: '/pages/index/enroll',
						img: '/static/image/sy_icon_baoming@2x.png',
						title: '驾校报名'
					},
					{
						url: '/pages/index/order',
						img: '/static/image/sy_icon_yuyue@2x.png',
						title: '预约练车'
					},
					{
						url: '/pages/index/schoolList',
						img: '/static/image/sy_icon_jiaxiao@2x.png',
						title: '驾校排行'
					},
					{
						url: '',
						img: '/static/image/sy_icon_jiaolian@2x.png',
						title: '找教练'
					},
					{
						url: '',
						img: '/static/image/sy_icon_peilian@2x.png',
						title: '找陪练'
					},
					{
						url: '/pages/index/sProcess',
						img: '/static/image/sy_icon_xueche@2x.png',
						title: '学车流程'
					},
					{
						url: '/pages/index/tProcess',
						img: '/static/image/sy_icon_kaoshi@2x.png',
						title: '考试流程'
					},
					{
						url: '',
						img: '/static/image/sy_icon_hehuoren@2x.png',
						title: '申请合伙人'
					}
				],
				school:[]
			};
		},
		methods:{
			ceshi(){
				alert("点击")
			},
			search(e){
				console.log(e.value.trim())
				setTimeout(()=>{
					this.keywords = "ss"
				},5000)
			}
		},
		onLoad() {
			this.$u.api.getIndex().then( res => {
				this.banner = res.banner;
				this.school = res.school;
				// console.log(this.banner)
				console.log(res)
			})
		}
	}
</script>

<style lang="scss" scoped>
	page{
		background-color: #EEEEEE;
	}
	.background {
		width: 100%;
		background-color: #fff;
		background-image: url(../../static/image/sy_icon_bj.png);
		background-repeat: no-repeat;
		background-position: top center;
		background-size: 100% 400rpx;
	}
	.w_search_con {
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 30rpx 24rpx;
	}
	.uni-searchbar {
		flex: 1;
		padding: 0;
	}
	.w_logo {
		margin-right: 20rpx;
	}
	.w_banner {
		padding: 0 24rpx;
	}
	.w_nav {
		padding: 0 30rpx 40rpx 30rpx;
		display: flex;
		justify-content: space-between;
		flex-wrap: wrap;
	}
	.w_nav_item {
		width: 25%;
		margin-top: 40rpx;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		text-align: center;
	}
	.u-image__image img {
		box-shadow: 0 0 8px #000;
	}
	.w_nav_item uni-navigator {
		display: flex;
		flex-direction: column;
		align-items: center;
	} 
	.w_nav_item text {
		font-size: 24rpx;
	}
	.w_recommend_list {
		margin-top: 20rpx;
		background-color: #fff;
	}
	.sticky {
		padding: 24rpx 24rpx 0 24rpx;
		font-size: 30rpx;
		// font-weight: bold;
		color: #418BFA;
	}
	.uni-input-placeholder {
		color: #fff;
	}
</style>
