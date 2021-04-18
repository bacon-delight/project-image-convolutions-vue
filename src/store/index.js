import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		image: null,
		layers: 0,
		images: [],
	},
	mutations: {
		setImage(state, image) {
			state.image = image;
		},
		incrementLayers(state) {
			state.layers += 1;
		},
		addImage(state, data) {
			state.images.push(data);
		},
		decrementLayer(state) {
			state.layers -= 1;
		},
		removeImage(state) {
			state.images.pop();
		},
		reset(state) {
			state.image = null;
			state.layers = 0;
			state.images = [];
		},
	},
	actions: {
		reset(context) {
			context.commit("reset");
		},
		setImage(context, image) {
			context.commit("setImage", URL.createObjectURL(image));
		},
		addLayer(context, { image, config }) {
			context.commit("incrementLayers");
			context.commit("addImage", { image, config });
		},
		removeLayer(context) {
			context.commit("decrementLayer");
			context.commit("removeImage");
		},
	},
	getters: {
		getImage(state) {
			return state.image;
		},
		getLayers(state) {
			return state.layers;
		},
		getUnprocessedImage(state) {
			return state.images.length
				? state.images[state.images.length - 1].image
				: state.image;
		},
		getProcessedImages(state) {
			return state.images;
		},
	},
	strict: true,
});
