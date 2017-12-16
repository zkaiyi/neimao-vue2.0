<template>
	<div>
		<div class="search">

			<router-link :to="{path:'personadd'}">
				<button class="addProduct">添加</button>
			</router-link>
			<div class="clear"></div>
		</div>
		<div class="data-container">
			<div class="data-container-part data-container-title">
				<div class="data-container-parts">编号</div>
				<div class="data-container-parts">业务员</div>
				<div class="data-container-parts">公司名称</div>
				<div class="data-container-parts">联系方式</div>
				<div class="data-container-parts">地址</div>
				<div class="data-container-parts">操作</div>
				<div class="clear"></div>
			</div>
			<div class="data-container-part data-container-detail" v-for="item in user">
				<div class="data-container-parts">{{item.customerNum}}</div>
				<div class="data-container-parts">{{item.name}}</div>
				<div class="data-container-parts">{{item.represent}}</div>
				<div class="data-container-parts">{{item.mobile}}</div>
				<div class="data-container-parts">{{item.address}}</div>
				<div class="data-container-parts">
					<router-link :to="{path:'personchange'}"><button class="data-container-part-lookUp">修改</button></router-link>
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
				user:[]
			}
		},
		created(){
			this.loadPerson();
		},
		methods:{
			loadPerson(){
				this.$ajax({
					method:"post",
					url:this.$urlPath+"/getUsers",
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
						this.user = res.data.users;
						console.log(this.user)
					}
				},(err)=>{
					
				})
			}
		}
	}
</script>

<style  scoped>
	@import url("../../../static/css/reset.css");
	@import url("../../../static/css/main.css");
	@import url("../../../static/css/data-container.css");
	.data-container-parts{
		width: 16.6%;
	}
</style>