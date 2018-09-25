
fw.import('./model.js')
fw.import('./src/components/Header.js')
fw.import('./src/components/Badge.js')
fw.import('./src/components/Intro.js')
fw.import('./src/components/About.js')
fw.import('./src/components/Project.js')
fw.import('./src/components/Footer.js')

fw.css`
	body {
		display  : grid;
		grid-template-columns : 
			0 
				0 
					var(--space-00) 
						auto 
					var(--space-00) 
				0 
			0;
	}

	@media screen and (min-width : ${fw.breakpoints.mobile}) {
		body {
			grid-template-columns : 
				0 
					var(--space-00) 
						var(--space-20) 
								auto 
						var(--space-20)
					var(--space-00) 
				0;
		}
	}

	@media screen and (min-width : ${fw.breakpoints.desktop}) {
		body {
			grid-template-columns : 
				1fr 
					0 
						0 
							calc(${fw.breakpoints.desktop} - var(--space-30))
						0 
					0 
				1fr;
		}
	}
`;

window.addEventListener('load', e => {
	let template = ''
	// Video
	// template += Intro(intro)
	// Logotype
	template += Header()
	// About
	let infos = about.map(block => {
		let matches = block.body.match(/\[(.+?)\]/g)
		if (matches) matches.forEach(match => 
			block.body = block.body.replace(
				match, 
				Badge(match.substr(1, match.length-2))))
		return About.block(block.title, block.body)
	}).join('')
	template += About.container(About.first + infos)
	template += projects
		// .slice(0, 9)
		.map(([
			title, notes, tools, 
			content, more
		], i, list) => {
			let projectTitle = Project.title(title, notes, 
				tools.split(', ').map(Badge).join(' '), more)
			let project = Project.project(content
				.split(' ')
				.map(link => {
					if (link == '(')
						return `<div class='stack'>`
					else if (link == ')')
						return `</div>`
					else {
						let type   = link.match(/.mov|.mp4/)? 'video' : 'image'
						let width  = /\[(.+?)\]/g.exec(link)[1]
						let params = link.match(/\[(.+?)\]/g)
						let file   = link.replace(params, '')
						let url    = `./projects/${title}/${file}`
						return Project[type](url, width)
					}
				})
				.join(''))
			return projectTitle + project
		})
		.join('')
	
	// add footer
	template += Footer()
	document.body.innerHTML += template
})

// load if in viewport
let onViewPortChange = e => {
	let content = document.querySelectorAll(`.project .item .content`)
	for (let i = 0; i < content.length; i ++) {
		let rect   = content[i].parentNode.getBoundingClientRect()
		// if the content is in the viewport
		let x = window.innerHeight * 1
		let y = window.innerWidth  * .2
		let l = rect.left - x < window.innerWidth
		let r = rect.right + x > 0
		let t = rect.top - y < window.innerHeight 
		let b = rect.bottom + y > 0
		if (l && r && t && b) {
			// load the content
			if (!content[i].src)
				content[i].src = content[i].getAttribute('toload')
			// reload video
			if (content[i].tagName == 'VIDEO' 
			&& 	content[i].style.display == 'none')
				content[i].load() 
			// show content
			content[i].style.display = 'block'
		} else { 
			// mark as unloaded if it's video
			if (content[i].style.display == 'block'
			&&	content[i].tagName == 'VIDEO') {
				content[i].parentNode.classList.remove('loaded')
				content[i].removeAttribute('src')
				content[i].load()
			}
			// hide the content
			content[i].style.display = 'none'
		}
	}
}

window.addEventListener('load', onViewPortChange)
window.addEventListener('resize', onViewPortChange)
window.addEventListener('scroll', onViewPortChange)
