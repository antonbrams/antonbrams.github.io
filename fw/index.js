
document.addEventListener('keyup', e => {
	// dev toggle
	if (e.key == 'd') document.body.classList.toggle('dev')
	if (e.key == 't') {
		document.body.classList.toggle('dark')
		document.body.classList.toggle('light')
	}
})

let switchTheme = () => {
	let hours = new Date().getHours()
	let day   = 6 < hours && hours < 21
	document.body.className = day? 'light': 'dark'
}
switchTheme()
setInterval(switchTheme, 1000 * 60 * 30)

let fw = {
	breakpoints : {
		mobile  : '0px',
		tablet  : '640px',
		desktop : '1280px'
	},
	css (style, ...values) {
		var node = document.createElement('style')
		document.body.appendChild(node)
		node.innerHTML = style.map((chunk, i) => 
			chunk + values[i]).join('')
	},
	map (value, aMin, aMax, bMin, bMax, clamp) {
		var x = clamp == true? (
			value < aMin? aMin:
			value > aMax? aMax: value
		):  value
		return (
			(x - aMin) / 
			(aMax - aMin) * 
			(bMax - bMin) + bMin
		)
	},
	html (string) {
		let a = document.createElement('div')
		a.innerHTML = string
		return a.firstChild
	},
	getScaleRatio (a, b) {
		let s = a.getBoundingClientRect()
		let e = b.getBoundingClientRect()
		return {
			x : s.width  / e.width,
			y : s.height / e.height
		}
	},
	easeInOutQuint : t => t < 0.5? 
		16 * Math.pow(t, 5): (--t) * 
		16 * Math.pow(t, 4) + 1,
}

