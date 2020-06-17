document.body.style.overflow = 'hidden'

const hideLoader = () => {
	document.body.classList.add('loaded')
	document.body.style.overflow = null
}

window.addEventListener('load', hideLoader)
setTimeout(hideLoader, 10000)
