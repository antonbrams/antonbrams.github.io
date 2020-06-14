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

// preload first videos
window.addEventListener('load', e => {
	projects.forEach(([name, content, settings]) => {
		const first = content[0][0]
		preload(`./projects/${name}/${first}`)
	})
	// check address
	const p = new URLSearchParams(window.location.search)
	if (p.has('project')) {
		const i = projects
			.map(([name]) => name)
			.indexOf(p.get('project'))
		if (i > -1) openProject(i)
	}
})
