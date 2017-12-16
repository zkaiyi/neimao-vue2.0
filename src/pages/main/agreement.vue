<template>
	<div>
		<div class="search">
			<button id="search-btn">搜索</button>
			<input id="search-input" type="text" placeholder="按日期（2017-09-08）/客户查找" />
			
			<div class="clear"></div>
		</div>

		<div class="data-container">
			<div class="data-container-part data-container-title">
				<div class="data-container-parts">编号</div>
				<div class="data-container-parts">业务员</div>
				<div class="data-container-parts">客户</div>
				<div class="data-container-parts">日期</div>
				<div class="data-container-parts">操作</div>
				<div class="clear"></div>
			</div>
			<div class="data-container-part data-container-detail" v-for="item in protocols">
				<div class="data-container-parts">{{item.protocolId}}</div>
				<div class="data-container-parts">{{item.name}}</div>
				<div class="data-container-parts">{{item.customerName}}</div>
				<div class="data-container-parts">{{item.addTime}}</div>
				<div class="data-container-parts">
					<router-link :to="{path:'agreementdetail'}"><button class="data-container-part-lookUp">查看</button></router-link>
					|
					<button class="data-container-part-lookUp">隐藏</button>
				</div>
				<div class="clear"></div>
			</div>

		</div>
		<div class="fenye">
			<v-pagination :total="total" ></v-pagination>
		</div>
	</div>
</template>

<script>
	import pagination from '../../components/pagination'
	export default{
		data(){
			return{
				protocols:[],
				total: 150,     // 记录总条数
		        display: 10,   // 每页显示条数
		        current: 1   // 当前的页数
			}
		},
		created(){
			this.loadAgreement();
		},
		methods:{
			loadAgreement(){
				this.$ajax({
					method:"post",
					url:this.$urlPath+"/getProtocol",
					params:{
						//"userId":userId,
						"type":"1",
						"page":"1",
						"num":"10"
					},
					dataType:"json",
					headers: {'Content-Type': 'application/x-www-form-urlencoded'}
				}).then((res)=>{
					console.log(res)
					if(res.data.status=="yes"){
						this.protocols = res.data.protocols;	
					}
				},(err)=>{
					
				})
			}
		},
		components: {
		    'v-pagination': pagination
		}
	}
</script>

<style scoped>
	@import url("../../../static/css/reset.css");
	@import url("../../../static/css/main.css");
	@import url("../../../static/css/data-container.css");
	.data-container-parts{
		width: 20%;
	}
	
	
</style>