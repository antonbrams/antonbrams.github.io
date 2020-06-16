const projects = document.querySelector('.projects')

window.addEventListener('scroll', e => {
	const rect = projects.getBoundingClientRect()
	document.body.classList[
		rect.top < window.innerHeight / 2 ? 'add' : 'remove'
	]('hide-intro')
})

projects.innerHTML = Model.projects
	.map((project, i) => {
		if (project.length > 1) {
			const [name, content, [theme, bg, big]] = project
			return `<div
				class="preview ${big ? 'big' : ''} theme_${theme}"
				onclick="openProjectAndSetURL('${i}')"
				style="--bg : ${bg}"
			>
				<div
					class="content"
					style="background-image: url('./projects/${name}/0.jpg')"
				></div>
				<div>
					<p class="header text_10">${name}</p>
					<p class="description">${content[0][1]}</p>
				</div>
			</div>`
		} else {
			const [name] = project
			return `<div
				class="preview theme_dark"
				style="--bg: none"
			>
				<div>
					<p class="header text_10">${name}</p>
					<p class="description">Coming Soon...</p>
				</div>
			</div>`
		}
	})
	.join('')
