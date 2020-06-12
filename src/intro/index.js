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
	const motivation = document.querySelector('.motivation')
	const rect = motivation.getBoundingClientRect()
	motivation.classList[
		rect.top < window.innerHeight ? 'add' : 'remove'
	]('visible')
})

// preload first videos
projects.forEach(([name, content, settings]) => {
	const first = content[0][0]
	if (first.search(/.mp4|.mov/g) > -1)
		preload(`./projects/${name}/${first}`)
})
