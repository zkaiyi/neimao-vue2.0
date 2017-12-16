<template>
	<div>
		<p class="data-container-return">
			<router-link :to="{path:'person'}"><a>人员管理</a></router-link>
			<a class="split">/</a>
			<a>人员修改</a>
		</p>
		<div class="inputs" style="padding-bottom: 5rem;">
			<button class="save" style="margin-top: 1rem;">保存</button>
			<div class="inputs-section">
				<a>编号</a><input class="proNum" type="text" placeholder="请输入编号" />
			</div>
			<div class="inputs-section">
				<a>业务员</a><input class="proModel" type="text" placeholder="请输入业务员" />
			</div>
			<div class="inputs-section">
				<a>联系方式</a><input class="proGongyi" type="text" placeholder="请输入联系方式" />
			</div>	
			<div class="inputs-section">
				<a>地址</a><input class="proGongyi" type="text" placeholder="请输入地址" />
			</div>
			
		</div>
	</div>
</template>

<script>
</script>

<style scoped>
	@import url("../../../static/css/reset.css");
	@import url("../../../static/css/main.css");
	@import url("../../../static/css/data-container.css");
</style>