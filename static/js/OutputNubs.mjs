import {ctx} from '../js/Main.mjs'

class OSlice {
	constructor(label, type, height, width) {
		this.label = label
		this.type = type
		this.height = height
		this.width = width
	}
	draw(coords, size, i) {
		ctx.textAlign = 'right'
		ctx.fillStyle = '#000000'
		let pos = [coords[0]+size[0]-10, coords[1]+20+4+(i*12)+5+2]
		ctx.fillText(this.label, pos[0], pos[1])
	}
	drawNub() {
		


	}
}

//slices should have a multiple of 10 height (10 for most)
export class ONumberSlice extends OSlice {
	constructor(label) {
		super(label, 'Number', 20, 200)
	}
}
export class OStringSlice extends OSlice {
	constructor(label) {
		super(label, 'String', 20, 200)
	}
}