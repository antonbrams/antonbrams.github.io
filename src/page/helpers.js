const toggleClasses = (dom, classes, i) => {
	classes.forEach((a, n) => {
		dom.classList[i == n ? 'add' : 'remove'](a)
	})
}

const addClass = (dom, boolean, c) => {
	dom.classList[boolean ? 'add' : 'remove'](c)
}

const Lerp = (fn, speed = 0.05, threshold = 1) => {
	let active = false
	let pTarget = null
	let pSmooth = null
	const frame = () => {
		let diff = 0
		pSmooth = pSmooth.map((n, i) => {
			const v = pTarget[i] - n
			diff += Math.abs(v)
			return n + v * speed
		})
		fn(pSmooth)
		if (diff > threshold) window.requestAnimationFrame(frame)
		else active = false
	}
	return params => {
		if (!pSmooth) pSmooth = params.slice()
		pTarget = params
		if (!active) {
			active = true
			frame()
		}
	}
}

const preload = url => {
	const img = new Image()
	img.src = url
	// const link = document.createElement('link')
	// link.href = url
	// link.rel = 'preload'
	// link.as = 'image'
	// document.head.appendChild(link)
}
