import {canvas} from '../js/Main.mjs'

canvas.addEventListner('onmousemove', e => {
	console.log([e.clientX, e.clientY])
}, true)