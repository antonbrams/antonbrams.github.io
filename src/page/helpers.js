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
	if (url.search('.jpg') > -1) {
		document.createElement('img').src = url
	} else {
		// const video = document.createElement('video')
		// video.src = url
		// video.preload = true
		// video.classList.add('preload')
		// video.oncanplaythrough = () =>
		// 	document.body.removeChild(video)
		// document.body.appendChild(video)
		// var xhr = new XMLHttpRequest()
		// xhr.open('GET', 'https://antonbrams.io' + url.substr(1), true)
		// xhr.responseType = 'blob'
		// xhr.onload = function () {
		// 	if (this.status === 200) {
		// 		const src = URL.createObjectURL(this.response)
		//
		// 		const video = document.createElement('video')
		// 		// video.src = src
		// 		video.autoplay = true
		// 		video.width = 500
		// 		video.height = 500
		// 		// video.classList.add('preload')
		// 		// video.oncanplaythrough = () =>
		// 		// 	document.body.removeChild(video)
		// 		document.body.appendChild(video)
		// 		console.log(src)
		// 	}
		// }
		// xhr.onerror = function () {
		// 	console.log('err', arguments)
		// }
		// xhr.send()
	}
	// var images = document.querySelectorAll("img[src='meh.png']");
}
