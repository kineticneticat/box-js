import {ctx} from '../js/Main.mjs'

export class Slice {
	constructor(label, type, height, width) {
		this.label = label
		this.type = type
		this.height = height
		this.width = width
	}
	drawNub() {}
}

//slices should have a multiple of 10 height (10 for most)

export class INumberSlice extends Slice {
	constructor(label) {
		super(label, 'Number', 20, 200)
	}
	draw() {
		super.drawNub()
	}
}