<template>
	<div>
		<scroller 
			v-model="scrollerStatus" 
			lock-x
			height="-128"
			ref="scrollerBottom"
			use-pullup
			use-pulldown
			:pullup-config="pullupDefaultConfig"
			:pulldown-config="pulldownDefaultConfig"
			@on-pullup-loading="pullUp"
			@on-pulldown-loading="pullDown"
        >
		<div>
			<x-table :cell-bordered="false" class="custom-bg-box-white leftAndRightBorders"
             style="table-layout:fixed;width: 100%">
        <colgroup>
            <col style="width: 40%"/>
            <col style="width: 20%"/>
            <col style="width: 20%"/>
            <col style="width: 20%"/>
        </colgroup>
        <tr>
            <th colspan="4" class="detail-tr-th">
                北京市
            </th>
        </tr>
        <tr class="detail-tr">
            <th>分型名称</th>
            <th>销售</th>
            <th>库存</th>
            <th>库存天数</th>
        </tr>
        <tr class="detail-td" v-for="(itemDetail,index) in InventoryEstimates" :key="index">
            <td>
                <popover placement="right" style="margin: 2px;">
                    <div slot="content" class="popover-demo-content">
                        {{ itemDetail.MaterialGroupName }}
                    </div>
                    <p class="ellipsis">{{ itemDetail.MaterialGroupName }}</p>
                </popover>
            </td>
            <td><p style="white-space:normal;word-break:break-all;line-height: 20px">{{ itemDetail.SalesOfDaily}}</p></td>
            <td>
                <p style="white-space:normal;word-break:break-all;line-height: 20px">{{ itemDetail.InventoryMonthly}}</p>
            </td>
            <td>
                {{itemDetail.InventoryEstimateDay==='999999'?'∞':itemDetail.InventoryEstimateDay
                }}
            </td>
        </tr>
    </x-table>
		</div>
		</scroller>
	</div>
</template>

<script>	
	import {
        Scroller,
        XTable,
        Popover
    } from "vux";
    // import Qs from 'qs'
    export default {
        components: {
            Scroller,
            XTable,
            Popover
        },
        name: "ceshi",
        data() {
            return {
                scrollerStatus: {
                    pullupStatus: 'default'
                },
				pullupDefaultConfig:{
					content: "上拉加载更多", // 上拉加载更多
					pullUpHeight: 60,
					height: 40,
					autoRefresh: false,
					downContent: "释放后加载",
					upContent: "上拉加载更多", // 上拉加载更多
					loadingContent: "加载中...",
					clsPrefix: "xs-plugin-pullup-"
				},
				pulldownDefaultConfig: {
					content: "下拉刷新", // 下拉刷新
					height: 40,
					autoRefresh: false,
					downContent: "下拉刷新", // 下拉刷新
					upContent: "释放后刷新",
					loadingContent: "正在刷新...", // 正在刷新...
					clsPrefix: "xs-plugin-pulldown-"
				},
                InventoryEstimates: []
            
        }
		},
        created() {
            // this.screeningList() // 筛选 省份List和分型List
            this.modifyDate() // 更新时间
			this.init()
        },
    mounted() {
      this.$nextTick(() => {
        this.$refs.scrollerBottom.reset({top: 0})
      })
    },
        methods: {
            // 更新时间
            modifyDate() {
                let parmars = {
                    'name': 'zhangsan',
                    'password': 'dc483e80a7a0bd9ef71d8cf973673924'
                }
// 				let parmars = new URLSearchParams()
// 				parmars.append('name', 'zhangsan')
// 				parmars.append('password', 'dc483e80a7a0bd9ef71d8cf973673924')
                 this.$http.post("/login/loginMobile", parmars)
                              .then(response => {
                                   console.log(response.data,"1-1-1-1-1-1--1-1-1");
                              });
		},
		init(){
			let InventoryEstimates =[
                    {
                        MaterialGroupName: 'Concor2.5_进口',
                        SalesOfDaily: '34,833,472',
                        InventoryMonthly: '-103,775,645',
                        InventoryEstimateDay: '70'
                    },
                    {
                        MaterialGroupName: 'Concor2.5_进口',
                        SalesOfDaily: '34,833,472',
                        InventoryMonthly: '-103,775,645',
                        InventoryEstimateDay: '70'
                    }]
			this.InventoryEstimates = InventoryEstimates
		},
            // 我是下拉
            pullUp () {
				console.log("111")
				this.InventoryEstimates.push({
                        MaterialGroupName: 'Concor2.5_进口',
                        SalesOfDaily: '34,833,472',
                        InventoryMonthly: '-103,775,645',
                        InventoryEstimateDay: '70'
                    },
                    {
                        MaterialGroupName: 'Concor2.5_进口',
                        SalesOfDaily: '34,833,472',
                        InventoryMonthly: '-103,775,645',
                        InventoryEstimateDay: '70'
                    })
				// this.scrollerStatus.pullupStatus = 'default'
				// this.init()
				 this.$refs.scrollerBottom.enablePullup()
        this.$refs.scrollerBottom.donePulldown()
                // 每次获取十条，页码加一
//                 this.filter.Page++
//                 this.$http.post("/Inventory/QueryInventoryEstimateByTierOne",this.filter).then(response => {
//                     let data = response.data;
//                     if (data.Models && data.Models.length === 0) {
//                         this.scrollerStatus.pullupStatus = 'disabled' // 禁用下拉
//                         return
//                     }
//                     for (var i = 0; i < data.Models.length; i++) {
//                         this.invenoryList.push(data.Models[i]);
//                     }
//                     this.scrollerStatus.pullupStatus = 'default'
//                     this.$nextTick(() => {
//                         this.$refs.scrollerBottom.reset()
//                     this.$refs.scrollerBottom.donePulldown()
//                     })
//                 })
            },
            //  我是上拉  第一次获取数据列表
            pullDown() {this.InventoryEstimates.push({
                        MaterialGroupName: 'Concor2.5_进口',
                        SalesOfDaily: '34,833,472',
                        InventoryMonthly: '-103,775,645',
                        InventoryEstimateDay: '70'
                    },
                    {
                        MaterialGroupName: 'Concor2.5_进口',
                        SalesOfDaily: '34,833,472',
                        InventoryMonthly: '-103,775,645',
                        InventoryEstimateDay: '70'
                    })
					this.$nextTick(() => {
						this.scrollerStatus.pulldownStatus = 'default';
                    this.$refs.scrollerBottom.reset({top: 0})
                    //处理初始化如果没有数据会显示undefined
                    if (this.invenoryList.length > 0) {
                        this.$refs.scrollerBottom.enablePullup();
                        this.$refs.scrollerBottom.donePullup()
                    }
                })
					
// 				 this.$refs.scrollerBottom.enablePullup()
//         this.$refs.scrollerBottom.donePulldown()
				alert("22")
			}
	}

    }
</script>

<style scoped>

</style>
