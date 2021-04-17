<template>
	<div class="filters">
		<div
			class="filters__grid"
			v-for="(value, key) in options"
			:key="key"
			@click="toggle(key, value)"
		>
			<input
				class="filters__toggle filters__grid--item"
				type="checkbox"
				:checked="value"
			/>
			<div class="filters__option filters__grid--item">{{ key }}</div>
		</div>
	</div>
</template>

<script>
export default {
	name: "Filters",
	props: {
		options: {
			type: Object,
			required: true,
		},
	},
	methods: {
		toggle(key, value) {
			this.options[key] = !value;
		},
	},
};
</script>

<style lang="scss" scoped>
.filters {
	margin-top: 1rem;
	padding: 0 1rem;

	&__grid {
		margin: 1.5rem 0;
		display: grid;
		grid-template-columns: 1fr 10fr;
		grid-column-gap: 10px;
		align-items: center;
		cursor: pointer;

		&--item {
			align-self: center;
		}
	}

	&__option {
		font-size: 1.4rem;
	}
}
</style>
