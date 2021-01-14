<template>
	<view class="wrap">
		<navBar
		:title = "title"
		:titleColor = "titleColor"
		:borderBottom = "borderBottom"
		></navBar>
		<u-cell-group :border="false">
			<u-cell-item :title="item.title" :value="item.type == 0 ? '+' + item.timeLong : '-' + item.timeLong" :label="item.time" :arrow="false" :titleStyle="titleStyle" :valueStyle="item.type ==0 ? valueStyleIn : valueStyleOut" v-for="item in lists"></u-cell-item>
			<u-loadmore :status="status" v-if="lists.length>=10"/>
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
				title: "总课时",
				titleColor: "#333",
				borderBottom: true,
				titleStyle: {
					color: "#333"
				},
				valueStyleIn: {
					color: "#F63235"
				},
				valueStyleOut: {
					color: "#33A2A2"
				},
				status: "loadmore",
				lists: [{
					type: 0,
					title: '课时入账',
					time: '2020-11-24  12:12',
					timeLong: '400'
				},{
					type: 0,
					title: '课时入账',
					time: '2020-11-24  12:12',
					timeLong: '400'
				},{
					type: 1,
					title: '课时使用',
					time: '2020-11-24  12:12',
					timeLong: '400'
				},{
					type: 0,
					title: '课时入账',
					time: '2020-11-24  12:12',
					timeLong: '400'
				},{
					type: 0,
					title: '课时入账',
					time: '2020-11-24  12:12',
					timeLong: '400'
				},{
					type: 0,
					title: '课时入账',
					time: '2020-11-24  12:12',
					timeLong: '400'
				},{
					type: 0,
					title: '课时入账',
					time: '2020-11-24  12:12',
					timeLong: '400'
				},{
					type: 0,
					title: '课时入账',
					time: '2020-11-24  12:12',
					timeLong: '400'
				},{
					type: 0,
					title: '课时入账',
					time: '2020-11-24  12:12',
					timeLong: '400'
				},{
					type: 0,
					title: '课时入账',
					time: '2020-11-24  12:12',
					timeLong: '400'
				}],
				mock:{
					type: 1,
					title: '课时使用',
					time: '2020-11-24  12:12',
					timeLong: '400'
				}
			}
		},
		methods: {
			onReachBottom() {
				if(this.lists.length > 30) {
					this.status = "nomore";
				}else {
					this.status = "loading";
					setTimeout(() => {
						this.lists.push(this.mock)
						this.status = "loading";
					},1000)
				}
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
