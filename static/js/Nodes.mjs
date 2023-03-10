import {INumberSlice} from '../js/InputNubs.mjs'
import {OStringSlice} from '../js/OutputNubs.mjs'
import {ctx} from '../js/Main.mjs'

class BaseBox {
	constructor(label, inputs, outputs, colour) {
		this.label = label
		this.inputs = inputs
		this.outputs = outputs
		this.colour = colour
	}
	draw(coords, held) {
		let size = this.calcSize
		ctx.fillStyle = '#000000aa'
		ctx.fillRect(coords[0], coords[1], size[0], size[1]+20)
		if (held) {
			coords = [coords[0]+5, coords[1]-5]
		}
		ctx.fillStyle = this.colour
		ctx.fillRect(coords[0], coords[1], size[0], 20)
		ctx.fillStyle = '#777777'
		ctx.fillRect(coords[0], coords[1]+20, size[0], size[1])
		ctx.fillStyle = '#000000'
		ctx.textAlign = 'left'
		ctx.fillText(this.label, coords[0]+10, coords[1]+15)
		this.outputs.forEach((e, i) => e.draw(coords, size, i))
		this.inputs.forEach((e, i) => e.draw(coords, size, i, this.outputs.length))
	}
	get calcSize() {
		//margin = 2
		let baseHeight = 2
		let baseWidth = 2
		this.inputs.forEach(x => {
			baseHeight += x.height + 2
		})
		this.outputs.forEach(x => {
			baseHeight += x.height + 2
		})
		baseWidth = Math.max(...this.inputs.map(x => x.width).concat(this.outputs.map(x => x.width))) + 4
		return [baseWidth, baseHeight]
	}
}

export class ValuesToCssCode extends BaseBox {
	constructor() {
        super(
			'Values to CSS Code',
		[
			new INumberSlice('Red'),
			new INumberSlice('Green'),
			new INumberSlice('Blue')
		], [
			new OStringSlice('Css Code'),
			new OStringSlice('Css Code'),
		], '#3333ff')
    }
}