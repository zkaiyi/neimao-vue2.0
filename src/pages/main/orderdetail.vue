<template>
	<div>
		<div class="data-container">
			<p class="data-container-return">
				<router-link :to="{path:'order'}"><a>订单管理</a></router-link>
				<a class="split">/</a>
				<a>订单详情</a>
			</p>
			<div class="data-container-part data-container-title">
				<div class="data-container-parts">产品</div>
				<div class="data-container-parts">规格</div>
				<div class="data-container-parts">单位</div>
				<div class="data-container-parts">数量</div>
				<div class="data-container-parts">单价</div>
				<div class="data-container-parts">金额</div>
				<div class="clear"></div>
			</div>
			<div class="data-container-part data-container-detail" v-for="item in deliveryNoteInfos">
				<div class="data-container-parts">{{item.productName}}</div>
				<div class="data-container-parts">{{item.specName}}</div>
				<div class="data-container-parts">{{item.uint}}</div>
				<div class="data-container-parts">{{item.number}}</div>
				<div class="data-container-parts">{{item.price}}</div>
				<div class="data-container-parts">{{item.allPrice}}</div>
				<div class="clear"></div>
			</div>
			
			<div class="data-container-part data-container-detail">
				<div class="data-container-parts">总计金额：</div>
				<div class="data-container-parts"></div>
				<div class="data-container-parts"></div>
				<div class="data-container-parts"></div>
				<div class="data-container-parts"></div>
				<div class="data-container-parts">16000</div>
				<div class="clear"></div>
			</div>
		</div>
		
		<div class="data-container">
			
			<div class="data-container-part data-container-title" style="margin-top: 3rem;">
				<div class="data-container-parts data-container-parts2">客户名称：</div>
				<div class="data-container-parts data-container-parts2">印第安男孩</div>
				<div class="data-container-parts data-container-parts2">客户电话：</div>
				<div class="data-container-parts data-container-parts2">13000000001</div>
				<div class="data-container-parts data-container-parts2">下单时间：</div>
				<div class="data-container-parts data-container-parts2">2017-09-19 08:35:10</div>
				<div class="clear"></div>
			</div>
			<div class="data-container-part data-container-title" style="margin-top: 3rem;">
				<div class="data-container-parts data-container-parts2">送货单位：</div>
				<div class="data-container-parts data-container-parts2">暴风城</div>
				<div class="data-container-parts data-container-parts2">联系电话：</div>
				<div class="data-container-parts data-container-parts2">13000000002</div>
				<div class="clear"></div>
			</div>
		</div>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				deliveryNoteInfos:[],
				deliveryId:sessionStorage.getItem("deliveryId")
			}
		},
		created(){
			this.getDeliveryNoteInfo();
		},
		methods:{
			getDeliveryNoteInfo(){
				this.$ajax({
					method:"post",
					url:this.$urlPath+"/getDeliveryNoteInfo",
					params:{
						"deliveryId":this.deliveryId,
					},
					dataType:"json",
					headers: {'Content-Type': 'application/x-www-form-urlencoded'}
				}).then((res)=>{
					
					if(res.data.status=="yes"){
						this.deliveryNoteInfos=res.data.deliveryNoteInfos;
						
						
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
</style>