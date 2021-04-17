<template>
	<div class="image-container">
		<div class="image-container__header">{{ header }}</div>
		<img class="image-container__image" :src="image" />
	</div>
</template>

<script>
export default {
	name: "Preview",
	props: {
		image: {
			type: String,
			required: true,
			default: "",
		},
		header: {
			type: String,
			required: true,
			default: "",
		},
		config: {
			type: [Object, null],
			required: false,
			default: null,
		},
	},
};
</script>

<style lang="scss" scoped>
.image-container {
	margin-top: 4rem;

	&__header {
		font-size: 2rem;
	}
	&__image {
		max-width: 100%;
		display: block;
		margin: 1rem auto;
	}
}
</style>
