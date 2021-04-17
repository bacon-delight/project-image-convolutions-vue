import Jimp from "jimp";

class Processor {
	constructor() {
		// Processed Image
		this.processed = null;

		// Options
		this.options = {
			kernel: {
				size: 3,
				matrix: null,
			},
			filters: {
				"Flip Horizontal": false,
				"Flip Vertical": false,
				"Mirror Horizontal": false,
				"Mirror Vertical": false,
				Greyscale: false,
				Invert: false,
			},
		};
	}

	async initialize(image) {
		// Source Image
		await Jimp.read(image)
			.then((data) => {
				this.image = data;
				return true;
			})
			.catch(() => {
				this.image = null;
				return false;
			});
	}

	getAvailableOptions() {
		return this.options;
	}

	processFilter(filter) {
		switch (filter) {
			case "Flip Horizontal":
				this.image.flip(true, false);
				break;
			case "Flip Vertical":
				this.image.flip(false, true);
				break;
			case "Mirror Horizontal":
				this.image.mirror(true, false);
				break;
			case "Mirror Vertical":
				this.image.mirror(false, true);
				break;
			case "Greyscale":
				this.image.greyscale();
				break;
			case "Invert":
				this.image.invert();
				break;
		}
	}

	async process(options) {
		for (const filter in options.filters) {
			if (options.filters[filter]) {
				this.processFilter(filter);
			}
		}
		await this.image.convolute(this.options.kernel.matrix);
		await this.image
			.getBase64Async(Jimp.AUTO)
			.then((data) => {
				this.processed = data;
				return true;
			})
			.catch(() => {
				return false;
			});
	}

	getProcessedImage() {
		return this.processed;
	}
}

export default Processor;
