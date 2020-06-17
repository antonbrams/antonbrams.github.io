const hideLoader = () => {
	document.body.classList.add('loaded')
	document.body.style.overflow = 'auto'
	Model.projects.forEach((project, i) => {
		if (project.length > 1) {
			const [name, content, [theme, bg, big, locked]] = project
			if (!locked)
				preload(`./projects/${name}/${content[0][0]}`)
		}
	})
}

window.addEventListener('load', hideLoader)
setTimeout(hideLoader, 10000)
