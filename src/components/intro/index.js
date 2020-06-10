window.addEventListener('scroll', e => {
	document.body.classList[
		document.body.scrollTop > 20 ? 'add' : 'remove'
	]('scrolled')
})
