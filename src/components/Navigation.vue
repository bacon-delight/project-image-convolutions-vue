<template>
	<div class="navigation-container">
		<div class="navigation-container__header">CONVOLUTIONS</div>
		<div class="navigation-container__subheader">
			This page was created to study and understand the effects of using
			convolutions (kernels) on images. In simple terms, convolution is
			the treatment of a matrix (an image in this case) by another one (a
			filter or a kernel). Here are few things that you can try out here:
			<ul>
				<li>Select any image from your device</li>
				<li>The size of your image should be at least 10x10</li>
				<li>Use filters with sizes 3x3, 5x5 or 7x7</li>
				<li>Try out multiple filters, multiple times on a sequence</li>
			</ul>
			Created by
			<a class="navigation-container__link" href="https://dipanjande.com"
				>Dipanjan De</a
			>
		</div>

		<!-- Buy Me a Coffee -->
		<a href="https://www.buymeacoffee.com/bacondelight" class="bmc">
			<img
				src="https://www.buymeacoffee.com/assets/img/BMC-btn-logo.svg"
				class="bmc__image"
			/>
			<span class="bmc__text">Buy me a coffee?</span>
		</a>
	</div>
</template>

<script>
export default {
	name: "Navigation",
};
</script>

<style lang="scss" scoped>
.navigation-container {
	margin-bottom: 4rem;

	&__header {
		font-size: 3rem;
		text-align: center;
		margin-bottom: 1rem;
	}

	&__subheader {
		text-align: justify;
		ul {
			padding-left: 2rem;
			margin: 0.5rem 0 1rem;
		}
	}

	&__link {
		text-decoration: none;
		color: #4287f5;
	}
}
.bmc {
	width: fit-content;
	display: grid;
	grid-template-columns: 1fr 4.5fr;
	grid-column-gap: 10px;
	margin: 1rem 0;
	border: 1px solid #000;
	padding: 0.7rem 1rem;
	text-decoration: none;

	&__image {
	}

	&__text {
		color: #000;
	}
}
</style>
