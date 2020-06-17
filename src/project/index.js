const project = document.querySelector('.project')
const sections = project.querySelector('.sections')
const perspective = project.querySelector('.perspective')
const name = project.querySelector('.name')
const cancel = project.querySelector('.cancel')
const contents = project.querySelector('.contents')

const scroller = Lerp(
	([tx, ty, rx, ry]) =>
		(contents.style.transform = `
			rotateX(${rx}deg)
			rotateY(${ry}deg)
			translateX(${tx}%)
			translateY(${ty}%)
		`)
)

const button = (i, list, extern) =>
	(i == 0 || i == list.length - 1) && extern
		? `<br />
		<a class="button" href="${extern[1]}" target="blank">
			${extern[0]}
		</a>`
		: ''

const onScroll = e => {
	Array.from(project.querySelectorAll('.section')).forEach(
		(section, i, list) => {
			const rect = section.getBoundingClientRect()
			const middle = window.innerHeight / 2
			const inViewport =
				rect.top < middle && rect.bottom > middle
			const id = section.getAttribute('data-section')
			const content = project.querySelector(
				`[data-content="${id}"]`
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
			if (i == list.length - 1)
				addClass(cancel, rect.top < 20, 'end')
		}
	)
}

const mapContent = (project, file, i) => {
	const link = `./projects/${project}/${file}`
	const classes = `src="${link}" data-content="${i}" class="content"`
	if (i > 0) preload(link)
	return file.match('.mp4') || file.match('.mov')
		? `<video ${classes} muted loop playsinline preload="auto"></video>`
		: file.match('.jpg')
		? `<img ${classes} />`
		: `<div ${classes}></div>`
}

const setURL = i => {
	const state = i > -1 ? `project=${Model.projects[i][0]}` : ''
	window.history.replaceState({}, '', `?${state}`)
}

let unlocked = false

const verifyProject = i => {
	const [
		title,
		content,
		[theme, bg, big, locked],
		extern,
	] = Model.projects[i]
	if (unlocked || !locked) {
		openProject(i)
	} else {
		if (prompt('Enter pin to unlock') === 'hello') {
			openProject(i)
			unlocked = true
			setTimeout(showLocked, 1000)
		} else openProject(-1)
	}
}

const openProject = i => {
	if (i > -1) {
		const [
			title,
			content,
			[theme, bg, locked],
			extern,
		] = Model.projects[i]
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
			'./src/project/cancel_${theme}.svg')`
		// fill out the name
		name.innerHTML = title
		// sections
		const iToClass = i =>
			i == 0 ? 'center' : ['left', 'right'][i % 2]
		sections.innerHTML = content
			.map(
				([_, title, description], n, list) =>
					`<div class="section" data-section="${n}">
						<div class="typo ${iToClass(n)}">
							<p class="text_10 header">
								${title}
							</p>
							<br />
							<p>${description}</p>
							${button(n, list, extern)}
						</div>
					</div>`
			)
			.join('')
		// content
		contents.innerHTML = content
			.map(([file], i) => mapContent(title, file, i))
			.join('')
		// do on scroll
		sections.scrollTop = 0
		sections.addEventListener('scroll', onScroll)
		onScroll()
	} else {
		sections.removeEventListener('scroll', onScroll)
		Array.from(project.querySelectorAll('video')).forEach(video =>
			video.pause()
		)
		cancel.classList.remove('end')
	}
	addClass(project, i > -1, 'show')
	document.body.style.overflow = i > -1 ? 'hidden' : null
	setURL(i)
}
