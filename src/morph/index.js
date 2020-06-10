const getElements = i => ({
	from: {
		content: document.querySelector(`.morph-content-${i}`),
		background: document.querySelector(`.morph-background-${i}`),
		title: document.querySelector(`.morph-title-${i}`),
		description: document.querySelector(
			`.morph-description-${i}`
		),
	},
	to: {
		content: document.querySelector(`.morph-content`),
		background: document.querySelector(`.morph-background`),
		title: document.querySelector(`.morph-title`),
		description: document.querySelector(`.morph-description`),
	},
})

// inject reusable type animations
createStyles()(
	Object.keys(types)
		.map(key => types[key].keyframes)
		.join(' ')
)

const applyKeyframes = createStyles()

const go = (scene, html, tag, id) => {
	const onEnd = e => {
		html.style.visibility = null
		html.style.zIndex = null
		html.removeEventListener('animationend', onEnd)
	}
	// apply callback
	html.addEventListener('animationend', onEnd)
	// apply animation
	// html.style.zIndex = 1
	html.style.visibility = 'visible'
	html.style.animation = types.morph.play(
		{tag, id},
		scene,
		`1s ease`
	)
}

const play = (from, to, id) => {
	let keyframes = ''
	for (let tag in from) {
		const A = from[tag]
		const B = to[tag]
		keyframes += types.morph.init(
			{rect: A.getBoundingClientRect(), tag, id},
			{rect: B.getBoundingClientRect(), tag, id}
		)
	}
	applyKeyframes(keyframes)
	for (let tag in from) {
		go('A', from[tag], tag, id)
		go('B', to[tag], tag, id)
	}
}

let lastOpened = -1
const animate = i => {
	if (i) {
		const {from, to} = getElements(i)
		// for (let tag in from) {
		// 	from[tag].style.zIndex = 1
		// }
		play(from, to, i)
		lastOpened = i
	} else {
		const {from, to} = getElements(lastOpened)
		// for (let tag in from) {
		// 	from[tag].style.zIndex = 1
		// }
		play(to, from, lastOpened)
		lastOpened = -1
	}
}
