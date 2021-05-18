<template>
	<div id="app">
		<router-view />
	</div>
</template>

<script>
	export default {
		name: 'App',
		beforeCreate() {
      console.log(1000);
			// params.$this=this
		}
	}
</script>

<style>

</style>