<template>
  <button class="btn" @click="click">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "c-button",
	methods: {
		click(event){
			this.$emit('click', event)
		}
	}
}
</script>

<style>

</style>