// preload first videos
Model.projects.forEach(project => {
	if (project.length > 1) {
		const [name, content] = project
		const first = content[0][0]
		preload(`./projects/${name}/${first}`)
	}
})

window.addEventListener('load', e => {
	// check address
	const p = new URLSearchParams(window.location.search)
	if (p.has('project')) {
		const i = Model.projects
			.map(([name]) => name)
			.indexOf(p.get('project'))
		if (i > -1) openProject(i)
	}
})
