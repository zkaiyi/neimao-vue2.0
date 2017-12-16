<template>
  <div class="hello">
  	<div id="head"></div>
    <div id="content">
    	<!--index的页面在这里-->
    	<keep-alive>
        <router-view></router-view>
      </keep-alive>
    </div>
    <div id="footer"></div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
