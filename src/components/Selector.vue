<template>
	<div class="selector-container">
		<div class="selector-container__header">Select an Image</div>
		<div class="selector-container__subheader">
			<ul>
				<li>Images are not uploaded anywhere</li>
				<li>Processing takes place in your browser using JavaScript</li>
				<li>
					No data in any form is retained when you leave this page
				</li>
			</ul>
		</div>
		<label class="select">
			Select an Image:
			<input
				class="select__input"
				type="file"
				@change="handleImageSelection"
			/>
		</label>
	</div>
</template>

<script>
export default {
	name: "Selector",
	methods: {
		handleImageSelection(event) {
			this.$store.dispatch("reset");
			if (event.target.files[0]) {
				this.$store.dispatch("setImage", event.target.files[0]);
			}
		},
	},
};
</script>

<style lang="scss" scoped>
.selector-container {
	margin: 4rem 0;
	border: 1px solid #dedede;
	padding: 0.8rem 1.5rem;

	&__header {
		font-size: 2rem;
	}

	&__subheader {
		ul {
			padding-left: 2rem;
			margin: 0.5rem 0 1rem;
		}
	}
}

.select {
	::-webkit-file-upload-button {
		background: #fff;
		border: 1px solid #dedede;
		margin: 0 1rem;
		font-family: inherit;
		font-weight: 300;
		cursor: pointer;
		outline: none;
		transition: all 0.5s ease-in-out;

		&:hover {
			border: 1px solid #000;
		}
	}
}
</style>
