const projects = document.querySelector('.projects')

window.addEventListener('scroll', e => {
	const rect = projects.getBoundingClientRect()
	addClass(
		document.body,
		rect.top < window.innerHeight / 2,
		'hide-intro'
	)
})

projects.innerHTML = Model.projects
	.map((project, i) => {
		if (project.length > 1) {
			const [name, content, [theme, bg, big, locked]] = project
			return `<div
				class="preview theme_${theme} ${big ? 'big' : ''}"
				onclick="verifyProject('${i}')"
				style="--bg : ${bg}"
				data-i="${i}"
			>
				<img src="./projects/${name}/0.jpg" />
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

const showLocked = () =>
	Array.from(document.querySelectorAll('.preview')).forEach(
		preview => {
			const i = preview.getAttribute('data-i')
			const [
				name,
				content,
				[theme, bg, big, locked],
			] = Model.projects[i]
			if (locked) {
				const img = preview.querySelector('img')
				const path = `./projects/${name}`
				// unlock thumbnails
				img.src = `${path}/0_unlocked.jpg`
				// preload first contents in locked projects
				setTimeout(preload(`${path}/${content[0][0]}`), 5000)
			}
		}
	)
