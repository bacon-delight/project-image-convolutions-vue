<template>
	<div class="kernel">
		<div class="kernel__selection">
			<!-- Kernel Size -->
			<div class="kernel__header">Select Kernel Size</div>
			<div class="kernel__grid">
				<label>
					<input type="radio" v-model="options.size" value="3" />
					3x3
				</label>
				<label>
					<input type="radio" v-model="options.size" value="5" />
					5x5
				</label>
				<label>
					<input type="radio" v-model="options.size" value="7" />
					7x7
				</label>
			</div>

			<!-- Kernel Matrix -->
			<div class="kernel__header">Configure Matrix</div>
			<div class="matrix">
				<div
					:class="[
						'matrix__row',
						`matrix__row--${options.matrix[0].length}`,
					]"
					v-for="(row, row_index) in options.matrix"
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
							v-model="options.matrix[row_index][column_index]"
						/>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: "Kernels",
	props: {
		options: {
			type: Object,
			required: true,
		},
	},
	mounted() {
		this.initialize(this.options.size);
	},
	methods: {
		initialize(size) {
			switch (parseInt(size)) {
				case 3:
					this.options.matrix = [
						[0, 0, 0],
						[0, 1, 0],
						[0, 0, 0],
					];
					break;
				case 5:
					this.options.matrix = [
						[0, 0, 0, 0, 0],
						[0, 0, 0, 0, 0],
						[0, 0, 1, 0, 0],
						[0, 0, 0, 0, 0],
						[0, 0, 0, 0, 0],
					];
					break;
				case 7:
					this.options.matrix = [
						[0, 0, 0, 0, 0, 0, 0],
						[0, 0, 0, 0, 0, 0, 0],
						[0, 0, 0, 0, 0, 0, 0],
						[0, 0, 0, 1, 0, 0, 0],
						[0, 0, 0, 0, 0, 0, 0],
						[0, 0, 0, 0, 0, 0, 0],
						[0, 0, 0, 0, 0, 0, 0],
					];
					break;
			}
		},
	},
	watch: {
		options: {
			handler(update) {
				if (update.size != this.options.matrix[0].length) {
					this.initialize(update.size);
				}
			},
			deep: true,
		},
	},
};
</script>

<style lang="scss" scoped>
.kernel {
	&__grid {
		display: grid;
		grid-template-columns: 1fr 1fr 1fr;
		margin: 0.5rem 0;
	}

	&__header {
		font-weight: 500;
		margin: 1.5rem 0 0.5rem;
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
