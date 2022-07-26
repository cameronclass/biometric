<template>
	<div class="tech-icon" v-if="content.id && name" :class="content.color" :id="`main-table__techno_${content.id}`">
		<i :class="content.icon"></i>
		<b-tooltip :target="`main-table__techno_${content.id}`" v-if="showTooltip" triggers="hover">
			{{ content.name }}
		</b-tooltip>
	</div>
</template>

<script>
export default {
	name: "c-tech-icon",
	props: {
		name: {
			type: String,
			default: null,
			required: false,
		},
		showTooltip: {
			type: Boolean,
			default: true,
			required: false,
		}
	},
	data() {
		return {
			types: [
				{
					name: "Liveness Detection",
					icon: "i-detection",
					color: "purple"
				},
				{
					name: "Document Verification",
					icon: "i-document-verification",
					color: "blue",
				},
				{
					name: "Face to face",
					icon: "i-f2f",
					color: "red",
				},
				{
					name: "Mobile Verification",
					icon: "i-mobile",
					color: "green",
				},
				{
					name: "Data Save",
					icon: "i-database",
					color: "orange",
				},
				{
					name: "Email Verification",
					icon: "i-email",
					color: "pink",
				},
				{
					name: "AML Processing",
					icon: "i-aml",
					color: "light-blue",
				},
			],
			content: {
				id: null,
				name: null,
				color: null,
				icon: null
			}
		}
	},
	mounted() {
		const item = this.types.filter(item => item.name.toLowerCase() === this.name.toLowerCase())
		if (item[0]) {
			this.content = {...item[0], id: Math.floor(Math.random() * 100 + Date.now())}
		}

	}
}
</script>

<style scoped>

</style>