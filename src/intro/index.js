window.addEventListener('scroll', e => {
	document.body.classList[
		document.body.scrollTop > 20 ? 'add' : 'remove'
	]('scrolled')
})

const preload = url => {
	const link = document.createElement('link')
	link.href = url
	link.rel = 'preload'
	link.as = 'image'
	document.head.appendChild(link)
}

projects.forEach(([name, content, settings]) => {
	const first = content[0][0]
	if (first.search(/.mp4|.mov/g) > -1)
		preload(`./projects/${name}/${first}`)
})
