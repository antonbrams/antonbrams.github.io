document.querySelector('.intro').querySelector('p').innerHTML =
	Model.intro[0]

// blur intro
window.addEventListener('scroll', e => {
	const scrolled = document.body.scrollTop > 20
	addClass(document.body, scrolled, 'scrolled')
	addClass(document.querySelector('.indicator'), scrolled, 'hide')
	addClass(
		document.querySelector('.motivation'),
		scrolled,
		'visible'
	)
})
