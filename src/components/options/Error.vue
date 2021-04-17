<template>
	<div class="error">
		<div class="error__header">Processing Failed</div>
		<div class="error__subheader">
			Something went wrong and we could not process your image. Some of
			the known cases where this happens:
			<ul>
				<li>
					Selected image, or the image used from the previous layer is
					too small for the selected filter or kernel
				</li>
				<li>Image size is greater than 7680x4320 (8K)</li>
			</ul>
		</div>
	</div>
</template>

<script>
export default {
	name: "Error",
};
</script>

<style lang="scss" scoped>
.error {
	&__header {
		font-size: 1.5rem;
		font-weight: 500;
		margin: 1.5rem 0 0.6rem;
	}

	&__subheader {
		text-align: justify;
		ul {
			padding-left: 2rem;
			margin: 0.5rem 0 1rem;
		}
	}
}
</style>
