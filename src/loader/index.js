const hideLoader = () => {
	document.body.classList.add('loaded')
	document.body.style.overflow = 'auto'
}

window.addEventListener('load', hideLoader)
setTimeout(hideLoader, 10000)
