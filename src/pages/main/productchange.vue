<template>
	<div>
		<p class="data-container-return">
			<router-link :to="{path:'product'}"><a>产品管理</a></router-link>
			<a class="split">/</a>
			<a>产品修改</a>
			
		</p>
		<div class="inputs" style="padding-bottom: 10rem;">
			<button class="save" style="margin-top: 1rem;">保存</button>
			<div class="inputs-section">
				<a>编号</a><input class="proNum" type="text" placeholder="请输入产品编号" />
			</div>
			<div class="inputs-section">
				<a>产品型号</a><input class="proModel" type="text" placeholder="请输入产品型号" />
			</div>
			<div class="inputs-section">
				<a>产品工艺</a><input class="proGongyi" type="text" placeholder="请输入产品工艺" />
			</div>	
			<div class="inputs-section2">
				<a class="upimg">产品图片</a>
				<div class="upimg2">
					<div class="uppic" id="uppic"></div>
					<a class="upfile">
						<input onchange="upload(this,this.files)" type="file" />
						<span>上传图片</span>
					</a>
				</div>
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