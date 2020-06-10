const project = document.querySelector('.project')
const sections = project.querySelector('.sections')
const perspective = project.querySelector('.perspective')
const name = project.querySelector('.name')
const cancel = project.querySelector('.cancel')
const contents = project.querySelector('.contents')

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

const scroller = Lerp(
	([tx, ty, rx, ry]) =>
		(contents.style.transform = `
			rotateX(${rx}deg)
			rotateY(${ry}deg)
			translateX(${tx}%)
			translateY(${ty}%)
		`)
)

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
				const p = (y - middle) * 0.02
				// animate
				if (i == 0) scroller([0, p - 15, 10, 0])
				else if (i % 2 == 1) scroller([-15, p, 5, 16])
				else scroller([15, p, 5, -16])
			}
			if (i == list.length - 1) {
				const atBottom = rect.top < 20
				cancel.classList[atBottom ? 'add' : 'remove']('end')
			}
		}
	)
}

const openProject = i => {
	project.classList[i ? 'add' : 'remove']('show')
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
		project.style.backgroundColor = bg
		// cancel theme
		cancel.style.backgroundImage = `url(
			'./src/components/project/cancel_${theme}.svg')`
		// fill out the name
		name.innerHTML = title
		// sections
		const iToClass = i =>
			i == 0 ? 'center' : ['left', 'right'][i % 2]
		sections.innerHTML = content
			.map(
				([_, title, description], i) =>
					`<div class="section" data-i-section="${i}">
						<div class="typo ${iToClass(i)}">
							<p class="text_10 header">
								${title}
							</p>
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
	} else {
		sections.removeEventListener('scroll', onScroll)
		Array.from(project.querySelectorAll('video')).forEach(video =>
			video.pause()
		)
	}
}
