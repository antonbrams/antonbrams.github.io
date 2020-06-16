document.querySelector('.intro').querySelector('p').innerHTML =
	Model.intro[0]

// blur intro
window.addEventListener('scroll', e => {
	const threshold = 20
	document.body.classList[
		document.body.scrollTop > threshold ? 'add' : 'remove'
	]('scrolled')
	document
		.querySelector('.indicator')
		.classList[
			document.body.scrollTop > threshold ? 'add' : 'remove'
		]('hide')
	document
		.querySelector('.motivation')
		.classList[
			document.body.scrollTop > threshold ? 'add' : 'remove'
		]('visible')
})
