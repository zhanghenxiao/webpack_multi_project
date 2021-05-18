<template>
	<div id="app">
		<router-view />
	</div>
</template>

<script>
export default {
  name: 'app-two',
  beforeCreate() {
    console.log(2000);
  }
}
</script>