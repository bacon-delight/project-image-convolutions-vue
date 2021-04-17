<template>
	<div class="container">
		<!-- Navigation -->
		<Navigation />

		<!-- File Uploader -->
		<Selector />

		<!-- Original Image -->
		<Preview v-if="image" :image="image" header="Original Image" />

		<!-- Processed Image -->
		<Preview
			v-for="(item, index) in processed"
			:key="index"
			:image="item.image"
			:config="item.config"
			:header="'Layer #' + (index + 1) + ' Result'"
		/>

		<!-- Configuration Panel -->
		<div v-if="image" class="container__configurator">
			<!-- Add Layer Button -->
			<div
				v-if="!configurator"
				:class="[layers ? 'container__button-grid' : '']"
			>
				<button
					v-if="layers"
					class="container__button container__button--negative"
					@click="removeLayer"
				>
					Remove Layer #{{ layers }}
				</button>
				<button
					class="container__button container__button--positive"
					@click="toggleConfigurator"
				>
					Add New Layer
				</button>
			</div>

			<!-- Configurator -->
			<Options v-else @toggle="toggleConfigurator" />
		</div>
	</div>
</template>

<script>
import { mapGetters } from "vuex";
import Navigation from "@/components/Navigation.vue";
import Selector from "@/components/Selector.vue";
import Preview from "@/components/Preview.vue";
import Options from "@/components/Options.vue";

export default {
	name: "Landing",
	data() {
		return {
			configurator: false,
		};
	},
	components: {
		Navigation,
		Selector,
		Preview,
		Options,
	},
	computed: {
		...mapGetters({
			image: "getImage",
			processed: "getProcessedImages",
			layers: "getLayers",
		}),
	},
	methods: {
		toggleConfigurator() {
			this.configurator = !this.configurator;
		},
		removeLayer() {
			this.$store.dispatch("removeLayer");
		},
	},
};
</script>

<style lang="scss" scoped>
.container {
	background: #fff;
	width: 600px;
	max-width: 95%;
	margin: 0 auto;
	padding: 1rem;
	font-size: 1.4rem;

	&__button-grid {
		margin: 2rem 0;
		display: grid;
		grid-template-columns: 1fr 1fr;
		grid-column-gap: 10px;
	}

	&__button {
		margin: 2rem 0;
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
