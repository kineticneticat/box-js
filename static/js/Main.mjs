import {ValuesToCssCode} from '../js/Nodes.mjs'

export let canvas = document.getElementById('canvas')
export let ctx = canvas.getContext('2d')
export let clickPos
canvas.addEventListener('mousedown', e => {
	clickPos = [e.clientX-10, e.clientY-10]
	for (let i in boxes) {
		i=parseInt(i)
		boxes[i].check(clickPos, i)
	}
	reDraw()
}, true)
canvas.addEventListener('mouseup', e => {
	boxes.map(b => b.held = false)
	reDraw()
}, true)

export let boxes = []
export let clickHistory = []
class Box {
	constructor(box, coords) {
		this.box = box
		this.coords = coords
		this.dragBox = [coords, []]
		this.held = false
	}
	draw() {
		this.box.draw(this.coords, this.held)
	}
	check(pos, i) {
		
		let size = this.box.calcSize
		if (pos[0]>this.coords[0] && pos[0]<this.coords[0]+size[0] && pos[1]>this.coords[1] && pos[1]<this.coords[1]+20) {
			// document.getElementById('out').innerHTML = 'ye'
			clickHistory.push(clickHistory.splice(clickHistory.indexOf(i), 1)[0]);
			this.held = true
			
		}
	}
}

window.onload = () => {
	canvas.width = 500
	canvas.height = 500
	boxes.push(new Box(new ValuesToCssCode(), [250, 250]))
	boxes.push(new Box(new ValuesToCssCode(), [25, 25]))
	boxes.push(new Box(new ValuesToCssCode(), [250, 25]))
	boxes.push(new Box(new ValuesToCssCode(), [25, 250]))

	boxes.forEach((_, i) => {clickHistory.push(i)})
	reDraw()
}
function reDraw() {
	ctx.fillStyle = '#555555'
	ctx.fillRect(0, 0, canvas.width, canvas.height)
	boxes.forEach(x => x.draw())

}