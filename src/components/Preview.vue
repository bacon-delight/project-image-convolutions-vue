<template>
	<div class="image-container">
		<!-- Header -->
		<div class="image-container__header">{{ header }}</div>

		<!-- Configurations -->
		<div class="image-container__details" v-if="showConfig">
			<!-- Filters -->
			<div v-if="hasFilters">
				<div class="image-container__title">Filters</div>
				<ul class="image-container__description">
					<span
						v-for="(state, filter) in config.filters"
						:key="filter"
					>
						<li v-if="state">
							<span>{{ filter }}</span>
						</li>
					</span>
				</ul>
			</div>

			<!-- Kernel -->
			<div class="image-container__title">Kernel</div>
			<div class="matrix">
				<div
					:class="[
						'matrix__row',
						`matrix__row--${config.kernel.matrix[0].length}`,
					]"
					v-for="(row, row_index) in config.kernel.matrix"
					:key="row_index"
				>
					<div
						class="matrix__column"
						v-for="(column, column_index) in row"
						:key="column_index"
					>
						<input
							class="matrix__input"
							type="number"
							disabled
							v-model="
								config.kernel.matrix[row_index][column_index]
							"
						/>
					</div>
				</div>
			</div>
		</div>

		<!-- Image -->
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
	computed: {
		hasFilters() {
			for (const filter in this.config.filters) {
				if (this.config.filters[filter]) {
					return true;
				}
			}
			return false;
		},
	},
	data() {
		return {
			showConfig: false,
		};
	},
	mounted() {
		if (this.config) {
			this.showConfig = true;
		}
	},
};
</script>

<style lang="scss" scoped>
.image-container {
	border: 1px solid #dedede;
	padding: 0.8rem 1.5rem;
	margin-top: 4rem;

	&__header {
		font-size: 2rem;
	}
	&__image {
		max-width: 100%;
		display: block;
		margin: 1rem auto;
	}

	&__details {
	}

	&__title {
		margin: 1.5rem 0 1rem;
		font-weight: 500;
	}

	&__description {
		padding-left: 2rem;
		margin: 0.5rem 0 1rem;
	}
}

.matrix {
	&__row {
		display: grid;
		margin: 1rem 0;
		grid-column-gap: 10px;

		&--3 {
			grid-template-columns: 1fr 1fr 1fr;
		}

		&--5 {
			grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
		}

		&--7 {
			grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
		}
	}

	&__input {
		text-align: center;
		width: 100%;
		padding: 0.5rem;
	}

	input::-webkit-outer-spin-button,
	input::-webkit-inner-spin-button {
		-webkit-appearance: none;
		margin: 0;
	}
	input[type="number"] {
		-moz-appearance: textfield;
	}
}
</style>
