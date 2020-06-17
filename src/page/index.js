window.addEventListener('load', e => {
	// check address
	const p = new URLSearchParams(window.location.search)
	if (p.has('project')) {
		const i = Model.projects
			.map(([name]) => name)
			.indexOf(p.get('project'))
		if (i > -1) verifyProject(i)
	}
})
