<template>
	<div>
		<div class="search">

			<router-link :to="{path:'productadd'}">
				<button class="addProduct">添加</button>
			</router-link>
			<div class="clear"></div>
		</div>
		<div class="data-container">
			<div class="data-container-part data-container-title">
				<div class="data-container-parts">编号</div>
				<div class="data-container-parts">产品型号</div>
				<div class="data-container-parts">操作</div>
				<div class="clear"></div>
			</div>
			<div class="data-container-part data-container-detail" v-for="item in products">
				<div class="data-container-parts">{{item.productId}}</div>
				<div class="data-container-parts">{{item.productName}}</div>
				<div class="data-container-parts">
					<button class="data-container-part-lookUp">添加工艺</button>
					|
					<router-link :to="{path:'productchange'}"><button class="data-container-part-lookUp">修改</button></router-link>
					|
					<button class="data-container-part-lookUp">删除</button>
				</div>
				<div class="clear"></div>
			</div>

		</div>
		<div class="fenye">
			<ul>
				<div class="prev">&lt;</div>
				<li class="liActive">1</li>
				<li>2</li>
				<li>3</li>
				<div class="next">&gt;</div>
			</ul>
		</div>
	</div>
</template>

<script>

	export default{
		data(){
			return{
				products:[]
			}
		},
		created(){
			this.getProducts();
		},
		methods:{
			getProducts(){
				this.$ajax({
					method:"post",
					url:this.$urlPath+"/getProducts",
					params:{
						//"userId":userId,
						"page":"1",
						"num":"10"
					},
					dataType:"json",
					headers: {'Content-Type': 'application/x-www-form-urlencoded'}
				}).then((res)=>{
					console.log(res);
					if(res.data.status=="yes"){
						
						this.products = res.data.products
						
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
		width: 20%;
	}
	.data-container-parts:nth-child(3){
		width:60% ;
	}
	.data-container-parts img{
		width: 100%;
	}
</style>