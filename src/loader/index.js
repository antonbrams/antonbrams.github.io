window.addEventListener('load', e => {
	document.body.classList.add('loaded')
})

setTimeout(() => {
	document.body.classList.add('loaded')
}, 10000)
