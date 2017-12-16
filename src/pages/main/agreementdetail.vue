<template>
	<div>
		<div class="shadow"></div>
		<div class="agreements">
				<router-link class="button" :to="{path: 'agreement'}"><h2>新海打火机产品陈列协议</h2></router-link>
				<div class="agreements-container">
					
					<div class="names">
						<div class="names-left">
							<a>甲方名称：</a><input readonly id="firstParty" type="text" placeholder="甲方名称" /><div class="clear"></div>
						</div>
						<div class="names-right">
							<a>乙方名称：</a><input readonly id="secondParty" type="text" placeholder="乙方名称" /><div class="clear"></div>
						</div>
						<div class="clear"></div>
					</div>
					<div class="agreements-detail">
						<p>甲乙双方就新海打火机的产品陈列一事，自愿达成如下协议：</p>
						<p class="p1">一、甲方免费提供”新海“牌打火机展示架供乙方使用，专用于”新海“打火机的产品陈列。</p>
						<p class="p1">二、乙方在满足以下条件时，甲方每月支付乙方产品陈列费<input style="width: 3rem;" readonly id="displayFee" type="text" />元。</p>
						<p>1、乙方将展示架摆放在双方约定的店面位置；</p>
						<p>2、乙方在使用展架期间，不得在展示架上摆放非甲方的产品；</p>
						<p>3、陈列品项要求：协议期内，乙方应至少陈列甲方产品<input style="width: 3rem;" readonly id="displayClass" type="text"/>类；</p>
						<p>4、乙方按甲方要求使用展示架，甲方将连续<input style="width: 3rem;" readonly id="displayMonth" type="text"/>个月支付乙方陈列费；</p>
						<p class="p1">三、本协议期结束后，乙方需继续按甲方要求使用展示架，否则甲方有权收回产品展示陈列用具。</p>
						<p class="p1">四、本协议一式两份，双方各执一份。经双方代表签字生效。</p>
					</div>
					<div class="agreements-foot">
						<div class="qianming">
							<div class="qianming2">
								签字
							</div>
						</div>
						<div class="qianming">
							<div class="qianming2">
								签字
							</div>
						</div>
						<div class="clear"></div>
						<div class="names">
							<div class="names-left">
								<a>甲方代表：</a><input readonly type="text" id="firstRepresent" placeholder="甲方代表" /><div class="clear"></div>
								<a>地址：</a><input readonly type="text" id="firstAddress" placeholder="地址" /><div class="clear"></div>
								<a>联系电话：</a><input readonly type="text" id="firstMobile" placeholder="联系电话" /><div class="clear"></div>
								<a>日期：</a><input readonly type="text" id="firstDate" placeholder="日期" /><div class="clear"></div>
							</div>
							<div class="names-right">
								<a>乙方代表：</a><input readonly type="text" id="secondRepresent" placeholder="乙方代表" /><div class="clear"></div>
								<a>地址：</a><input readonly type="text" id="secondAddress" placeholder="地址" /><div class="clear"></div>
								<a>联系电话：</a><input readonly type="text" id="secondMobile" placeholder="联系电话" /><div class="clear"></div>
								<a>超市：</a><input readonly type="text" value="超市" /><div class="clear"></div>
								<a>日期：</a><input readonly type="text" id="secondDate" placeholder="日期" /><div class="clear"></div>
							</div>
							<div class="clear"></div>
						</div>
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
	a{
		text-decoration: none;color: #000000;
	}
</style>