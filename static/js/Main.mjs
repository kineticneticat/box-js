import {ValuesToCssCode} from '../js/Nodes.mjs'

export let canvas = document.getElementById('canvas')
export let ctx = canvas.getContext('2d')
export let clickPos
canvas.addEventListener('click', e => {
	clickPos = [e.clientX-10, e.clientY-10]
	for (const box of boxes) {
		console.log(box)
		box.check(clickPos)
	}
}, true)

export let boxes = []
class Box {
	constructor(box, coords) {
		this.box = box
		this.coords = coords
		this.dragBox = [coords, []]
	}
	draw() {
		this.box.draw(this.coords)
	}
	check(pos) {
		let size = this.box.calcSize
		ctx.beginPath()
		ctx.strokeStyle = '#000000'
		ctx.moveTo(this.coords[0], this.coords[1])
		ctx.lineTo(this.coords[0]+size[0], this.coords[1])
		ctx.lineTo(this.coords[0]+size[0], this.coords[1]+20)
		ctx.lineTo(this.coords[0], this.coords[1]+20)
		ctx.lineTo(this.coords[0], this.coords[1])
		ctx.stroke()
		ctx.beginPath()
		ctx.moveTo(pos[0], 0)
		ctx.lineTo(pos[0], 500)
		ctx.moveTo(0, pos[1])
		ctx.lineTo(500, pos[1])
		ctx.stroke()
		if (pos[0]>this.coords[0] && pos[0]<this.coords[0]+size[0] && pos[1]>this.coords[1] && pos[1]<this.coords[1]+20) {
			document.getElementById('out').innerHTML = 'ye'
		} else {
			document.getElementById('out').innerHTML = 'no'
		}
	}
}

window.onload = () => {
	canvas.width = 500
	canvas.height = 500
	boxes.push(new Box(new ValuesToCssCode(), [250, 250]))
	boxes.push(new Box(new ValuesToCssCode(), [50, 50]))

	boxes.forEach(x => x.draw())
}