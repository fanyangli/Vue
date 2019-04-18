<template>
	<!-- 根容器 -->
	<div class="container">
		<h2>消息</h2>
		{{msg}}
	</div>
</template>

<script>
	export default{
		name: 'Message',
		data(){
			return{
				msg:'这是消息页面'
			}
		}
	}
</script>

<style scoped>
	
</style>