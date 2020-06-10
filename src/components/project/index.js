const project = document.querySelector('.project')
const sections = project.querySelector('.sections')
const background = project.querySelector('.background')
const perspective = project.querySelector('.perspective')
const name = project.querySelector('.name')
const cancel = project.querySelector('.cancel')
const contents = project.querySelector('.contents')

const iToClass = i =>
	i == 0 ? 'center' : i % 2 == 0 ? 'left' : 'right'

const mapContent = (project, file, i) => {
	const style = `
		src="projects/${project}/${file}"
		data-i-content="${i}"
		class="content"
	`
	return file.match('.mp4') || file.match('.mov')
		? `<video ${style} muted loop playsinline></video>`
		: file.match('.jpg')
		? `<img ${style} />`
		: ''
}

let scrollSmooth = 0
const onScroll = e => {
	Array.from(project.querySelectorAll('.section')).forEach(
		(section, i, list) => {
			const rect = section.getBoundingClientRect()
			const middle = window.innerHeight / 2
			const inViewport =
				rect.top < middle && rect.bottom > middle
			const id = section.getAttribute('data-i-section')
			const content = project.querySelector(
				`[data-i-content="${id}"]`
			)
			content.style.opacity = inViewport ? 0.7 : 0
			if (content.tagName == 'VIDEO')
				content[inViewport ? 'play' : 'pause']()
			if (inViewport) {
				const y = rect.top + rect.height / 2
				const p = (y - middle) * 0.2
				scrollSmooth += (p - scrollSmooth) * 0.1
				const contents = project.querySelector('.contents')
				toggleClasses(
					contents,
					['center', 'left', 'right'],
					i == 0 ? 0 : i % 2 == 0 ? 2 : 1
				)
				perspective.style.transform = `translateY(${scrollSmooth}px)`
			}
			if (i == list.length - 1) {
				const atBottom = rect.top < 20
				cancel.classList[atBottom ? 'add' : 'remove']('end')
			}
		}
	)
}

const openProject = i => {
	project.style.visibility = i ? 'visible' : 'hidden'
	document.body.style.overflow = i ? 'hidden' : null
	if (i) {
		sections.scrollTop = 0
		const [title, content, [theme, bg]] = projects[i]
		// set theme
		toggleClasses(
			project,
			['theme_dark', 'theme_light'],
			theme == 'light'
		)
		// bg color
		background.style.backgroundColor = bg
		// cancel theme
		cancel.style.backgroundImage = `url('./src/components/project/cancel_${theme}.svg')`
		// fill out the name
		name.innerHTML = title
		// sections
		sections.innerHTML = content
			.map(
				([_, title, description], i) =>
					`<div class="section" data-i-section="${i}">
						<div class="typo ${iToClass(i)}">
							<p class="
								text_10 header
								${i == 0 ? 'morph-description' : ''}
							">
								${title}
							</p>
							<br />
							<br />
							<p>${description}</p>
						</div>
					</div>`
			)
			.join('')
		// content
		contents.innerHTML = content
			.map(([file], i) => mapContent(title, file, i))
			.join('')
		// do on scroll
		sections.addEventListener('scroll', onScroll)
		onScroll()
		animate(i)
	} else {
		animate()
		sections.removeEventListener('scroll', onScroll)
		Array.from(project.querySelectorAll('video')).forEach(video =>
			video.pause()
		)
		// contents.innerHTML = ''
		// cancel.classList.remove('end')
		// toggleClasses(contents, ['center', 'left', 'right'], 0)
	}
}
