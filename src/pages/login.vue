<template>
	<div>
		<div class="bg"></div>
		<div class="content-login">
			<div class="title">
				<p>后台国内销售业务员系统</p>
				<p>欢迎登录</p>
			</div>
			<div class="login">
				<div class="container">
					<div class="container-left">
						<div class="container-left-img"></div>
					</div>
					<div class="container-right">
						<div class="up">
							<input v-model="username" class="username container-input1" type="text" placeholder="用户名" />
							<p class="tips1 tips">工号不能为空</p>
							<input v-model="password" class="password container-input1" type="password" placeholder="密码" />
							<p class="tips2 tips">密码不能为空</p>
						</div>
						<button class="submit" @click="login">登录</button>
					</div>
					<div class="clear"></div>
				</div>
			</div>
			<div class="clear"></div>
		</div>
	
	</div>
</template>

<script>
export default {
  data(){
      return {
  		status:{},
  		username:"",
  		password:""
  	  }
  },
  methods:{
  	login(){
  		this.$ajax({
  			method: "post",
  			url:this.$urlPath+"/login",
  			params: {
                "mobile":this.username,
				"password":this.password
           	},
           	dataType:"json",
            headers: {'Content-Type': 'application/x-www-form-urlencoded'}
  		}).then((res)=>{
			
			if(res.data.status=="yes"){
				sessionStorage.setItem("company_id",res.data.user.userId);
				sessionStorage.setItem("name",res.data.user.name);
				//console.log(res)
				//登录到主页面
				this.$router.push({path:'main'});
			}
  		},(err)=>{
  			
  		})

  	}
  }
}
</script>

<style scoped>
	@import url("../../static/css/reset.css");
	@import url("../../static/css/login.css");
</style>