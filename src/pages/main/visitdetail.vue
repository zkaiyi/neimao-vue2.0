<template>
	<div class="data-container">
		<p class="data-container-return">
			<router-link :to="{path:'visit'}"><a>拜访管理</a></router-link>
			<a class="split">/</a>
			<a>拜访详情</a>
		</p>
		<div class="data-container-part data-container-title" v-for="item in visitRegistLogs">
		
			<p class="visit-detail-p" style="padding: 2rem 0 2rem 5%;">未开发原因：</p>
			<p class="visit-detail-p" style="width: 90%;padding-bottom: 3rem;line-height: 1.5rem;">{{item.reason}}</p>
			<p class="visit-detail-p" style="padding-bottom: 2rem;">时间：{{item.addTime}}</p>
		</div>
		
	</div>
</template>

<script>
	export default{
		data(){
			return{
				visitRegistLogs:[],
				visitId:sessionStorage.getItem("visitId")
			}
		},
		created(){
			this.getVisitRegistLogs();
		},
		methods:{
			getVisitRegistLogs(){
				this.$ajax({
					method:"post",
					url:this.$urlPath+"/getVisitRegistLog",
					params:{
						"visitId":this.visitId,
						"type":"2"
					},
					dataType:"json",
					headers: {'Content-Type': 'application/x-www-form-urlencoded'}
				}).then((res)=>{
					
					if(res.data.status=="yes"){
						
						this.visitRegistLogs = res.data.visitRegistLogs;
						
					}
				},(err)=>{
					
				})
			}
		}
	}
</script>

<style scoped>
	@import url("../../../static/css/reset.css");
	@import url("../../../static/css/main.css");
	@import url("../../../static/css/data-container.css");
	.data-container-parts{
		width: 16.6%;
	}
	.data-container-parts2{
		width: 25%;
	}
	.visit-detail-p{
		padding-left: 5%;
	}
</style>