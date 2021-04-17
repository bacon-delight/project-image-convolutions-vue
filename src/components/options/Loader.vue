<template>
	<div class="loader">
		<div class="loader__spinner"></div>
		<div class="loader__header">Processing Image</div>
		<div class="loader__subheader">
			Processing can take upto 90 seconds depending on the size of your
			image
		</div>
	</div>
</template>

<script>
export default {
	name: "Loader",
};
</script>

<style lang="scss" scoped>
.loader {
	&__spinner {
		width: 40px;
		height: 40px;
		margin: 10px auto;
		background-color: #000;

		border-radius: 100%;
		-webkit-animation: sk-scaleout 1s infinite ease-in-out;
		animation: sk-scaleout 1s infinite ease-in-out;
	}

	&__header {
		text-align: center;
		letter-spacing: 0.15rem;
		font-weight: 500;
	}

	&__subheader {
		text-align: center;
		letter-spacing: 0.15rem;
		margin-top: 0.5rem;
		font-size: 1.2rem;
	}
}

@-webkit-keyframes sk-scaleout {
	0% {
		-webkit-transform: scale(0);
	}
	100% {
		-webkit-transform: scale(1);
		opacity: 0;
	}
}

@keyframes sk-scaleout {
	0% {
		-webkit-transform: scale(0);
		transform: scale(0);
	}
	100% {
		-webkit-transform: scale(1);
		transform: scale(1);
		opacity: 0;
	}
}
</style>
