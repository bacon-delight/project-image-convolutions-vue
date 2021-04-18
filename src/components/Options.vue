<template>
	<div class="options-container">
		<!-- Loading Module -->
		<Loader v-if="loading" />

		<!-- Initialized -->
		<div v-else>
			<!-- Header -->
			<div class="options-container__header">
				Configure Layer #{{ layer + 1 }}
			</div>

			<!-- Options -->
			<div class="options-container__grid">
				<div
					class="options-container__option options-container__option--left"
				>
					<span
						:class="[
							selectedKernel
								? 'options-container__option--selected'
								: '',
						]"
						@click="selectedKernel = true"
						>Kernel</span
					>
				</div>
				<div
					class="options-container__option options-container__option--right"
				>
					<span
						:class="[
							selectedKernel
								? ''
								: 'options-container__option--selected',
						]"
						@click="selectedKernel = false"
						>Filter</span
					>
				</div>
			</div>

			<Kernels v-if="selectedKernel" :options="options.kernel" />
			<Filters v-else :options="options.filters" ref="filters" />

			<!-- Actions -->
			<div v-if="!processing" class="options-container__button-grid">
				<button
					class="options-container__button options-container__button--negative"
					@click="$emit('toggle')"
				>
					Discard Layer
				</button>
				<button
					class="options-container__button options-container__button--positive"
					@click="processImage"
				>
					Process Image
				</button>
			</div>

			<!-- Loader -->
			<Loader v-if="processing" />

			<!-- Error -->
			<Error v-if="error" />
		</div>
	</div>
</template>

<script>
import { mapGetters } from "vuex";
import Processor from "@/assets/Processor.js";
import Error from "@/components/options/Error.vue";
import Filters from "@/components/options/Filters.vue";
import Kernels from "@/components/options/Kernels.vue";
import Loader from "@/components/options/Loader.vue";
export default {
	name: "Options",
	components: {
		Error,
		Filters,
		Kernels,
		Loader,
	},
	data() {
		return {
			loading: true,
			processing: false,
			error: false,
			selectedKernel: true,
			processor: null,
			options: {},
		};
	},
	computed: {
		...mapGetters({
			layer: "getLayers",
			image: "getUnprocessedImage",
		}),
	},
	mounted() {
		this.processor = new Processor();
		this.processor
			.initialize(this.image)
			.then(() => {
				this.options = this.processor.getAvailableOptions();
				this.loading = false;
			})
			.catch(() => {
				this.loading = false;
				this.error = true;
			});
	},
	methods: {
		processImage() {
			this.processing = true;
			this.error = false;

			setTimeout(() => {
				this.processor
					.process(this.options)
					.then(() => {
						this.$store.dispatch("addLayer", {
							image: this.processor.getProcessedImage(),
							config: this.options,
						});
						this.processing = false;
						this.$emit("toggle");
					})
					.catch(() => {
						this.error = true;
						this.processing = false;
					});
			}, 200);
		},
	},
};
</script>

<style lang="scss" scoped>
.options-container {
	margin: 4rem 0;
	border: 1px solid #dedede;
	padding: 0.8rem 1.5rem;

	&__header {
		font-size: 2rem;
		margin-bottom: 1rem;
	}

	&__subheader {
		text-align: justify;
		ul {
			padding-left: 2rem;
			margin: 0.5rem 0 1rem;
		}
	}

	&__grid {
		display: grid;
		grid-template-columns: 1fr 1fr;
		grid-column-gap: 10px;
	}

	&__option {
		font-size: 1.6rem;
		cursor: pointer;
		text-transform: uppercase;

		&--left {
			text-align: right;
		}

		&--right {
			text-align: left;
		}

		&--selected {
			font-weight: 500;
			border-bottom: 1px solid #000;
		}
	}

	&__button-grid {
		margin-top: 2rem;
		display: grid;
		grid-template-columns: 1fr 1fr;
		grid-column-gap: 10px;
	}

	&__button {
		margin: 1rem 0;
		padding: 1rem 2rem;
		letter-spacing: 0.2rem;
		width: 100%;
		display: block;
		cursor: pointer;
		border: 0;

		&--positive {
			background: #000;
			color: #fff;
		}

		&--negative {
			border: 1px solid #000;
			background: #fff;
			color: #000;
		}
	}
}
</style>
