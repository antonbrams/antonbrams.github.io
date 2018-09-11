
fw.css`
	body {
		display  : grid;
		grid-gap : var(--space-20) 0;
		padding  : var(--space-20) 0;
		grid-template-columns : 
			0 
				0 
					var(--space-00) 
						auto 
					var(--space-00) 
				0 
			0;
	}

	@media screen and (min-width : ${fw.breakpoints.tablet}) {
		body {
			grid-gap : var(--space-30) 0;
			padding  : var(--space-30) 0;
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
			grid-gap : var(--space-30) 0;
			padding  : var(--space-30) 0;
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

let template = ''
// Logotype
template += Header()
// Video
template += Intro(intro)
// About
let infos = about.map(block => {
	let matches = block.body.match(/\[(.+?)\]/g)
	if (matches) matches.forEach(match => 
		block.body = block.body.replace(
			match, 
			Badge(match.substr(1, match.length-2))))
	return About.block(block.title, block.body)
}).join('')
;
template += About.container(infos) //About.title + 

// Projects
projects.forEach(([title, notes, tools, content, more], i, list) => {
	template += Project.container(content
		.split(' ')
		.map(link => {
			// insert title
			if (/H/.test(link))
				return Project.title(
					title, notes, 
					tools.split(', ').map(Badge).join(' '), 
					more)
			// insert item
			else {
				let size = []
				if (/\|\|/.test(link)) size.push('supertall')
				if (/--/.test(link))  size.push('superwide')
				if (/\|/.test(link))  size.push('tall')
				if (/-/.test(link))   size.push('wide')
				let settings = link.match(/\[(.+?)\]/g)
				link = link.replace(settings, '')
				let type = link.match(/.mov|.mp4/)? 'video': 'image'
				let src  = `./projects/${title}/${link}`
				return Project[type](src, size.join(' '))
			}
		}).join(''))
})
// add footer
template += Footer()
document.body.innerHTML += template

// load if in viewport
let onViewPortChange = e => {
	let content = document.querySelectorAll(`
		.project .image img, 
		.project .video video`)
	for (let i = 0; i < content.length; i ++) {
		let rect   = content[i].parentNode.getBoundingClientRect()
		let offset = window.innerHeight
		// if the content is in the viewport
		if (rect.top - offset < window.innerHeight 
		&&	rect.bottom + offset > 0) {
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
			&&	content[i].tagName == 'VIDEO')
				content[i].parentNode.classList.remove('loaded')
			// hide the content
			content[i].style.display = 'none'
		}
	}
}

window.addEventListener('load', onViewPortChange)
window.addEventListener('resize', onViewPortChange)
window.addEventListener('scroll', onViewPortChange)
