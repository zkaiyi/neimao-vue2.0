<template>
	<div>
		<header>
			<div class="title">后台国内销售业务员系统</div>
			<router-link :to="{path: '/'}"><img src="../../static/img/quit.png" /></router-link>
			<p>Hello，{{username}}</p>
		</header>
		<div class="content">
			<div class="content-left">
				<ul>
					<router-link v-for="item in navs" :to="{path:item.path}" tag="li" active-class="active">{{item.name}}</router-link>
				</ul>
			</div>
			<div class="content-right">
				<keep-alive>
					<router-view></router-view>
				</keep-alive>
			</div>
			<div class="clear"></div>
			
		</div>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				username:sessionStorage.getItem("name"),
				navs:[
					{
						name:"协议管理",
						path:"agreement",
						active:false
					},
					{
						name:"订单管理",
						path:"order",
						active:false
					},
					{
						name:"产品管理",
						path:"product",
						active:false
					},
					{
						name:"人员管理",
						path:"person",
						active:false
					},
					{
						name:"信息管理",
						path:"message",
						active:false
					},
					{
						name:"拜访管理",
						path:"visit",
						active:false
					}
				]
			}
		}
		
	}
</script>

<style>
	@import url("../../static/css/reset.css");
	@import url("../../static/css/main.css");
</style>