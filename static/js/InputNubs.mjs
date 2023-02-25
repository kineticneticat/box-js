import {ctx} from '../js/Main.mjs'

class ISlice {
	constructor(label, type, height, width) {
		this.label = label
		this.type = type
		this.height = height
		this.width = width
	}
	draw(coords, size, i, shift) {
		ctx.fillStyle = '#000000'
		ctx.textAlign = 'left'
		let pos = [coords[0]+10, coords[1]+30+(shift*12)+(i*12)]
		ctx.fillText(this.label, pos[0], pos[1])
	}
	drawNub() {}
}

//slices should have a multiple of 10 height (10 for most)

export class INumberSlice extends ISlice {
	constructor(label) {
		super(label, 'Number', 20, 200)
	}
}