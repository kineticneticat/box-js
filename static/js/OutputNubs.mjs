import {ctx} from '../js/Main.mjs'

const typecolours = {
	'string': '#ff0000',
	'number': '#00ff00',
	'boolean': '#0000ff',
	'bigint': '#ffff00',
	'symbol': '#00ffff',
	'object': '#ff00ff',
	'undefined': '#ffffff',
	'null': '#000000'
}

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
		this.drawNub(coords, size, i)
	}
	check(coords, size, i) {
		
	}
	drawNub(coords, size, i) {
		// let pos = [coords[0]+size[0], coords[1]+20+4+(i*12)+5+2]
		let pos = [220, 220]
		ctx.fillStyle = typecolours[this.type]
		ctx.beginPath()
		ctx.arc(pos[0], pos[1], 10, 0, Math.pi*2)
		ctx.fill()
	}
}

//slices should have a multiple of 10 height (10 for most)
export class ONumberSlice extends OSlice {
	constructor(label) {
		super(label, 'number', 20, 200)
	}
}
export class OStringSlice extends OSlice {
	constructor(label) {
		super(label, 'string', 20, 200)
	}
}