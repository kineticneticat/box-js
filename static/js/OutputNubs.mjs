import {ctx} from '../js/Main.mjs'
import {Slice} from '../js/InputNubs.mjs'

//slices should have a multiple of 10 height (10 for most)

export class ONumberSlice extends Slice {
	constructor(label) {
		super(label, 'Number', 20, 200)
	}
	draw() {
		super.drawNub()
	}
}
export class OStringSlice extends Slice {
	constructor(label) {
		super(label, 'String', 20, 200)
	}
	draw() {
		super.drawNub()
	}
}