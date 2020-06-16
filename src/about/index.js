const badgify = text => {
	let matches = text.match(/\[(.+?)\]/g)
	if (matches)
		matches.forEach(
			match =>
				(text = text.replace(
					match,
					`<span class='badge theme_dark text_01'>${match.substr(
						1,
						match.length - 2
					)}</span>`
				))
		)
	return text
}

document.querySelector('.about').innerHTML = Model.about
	.map(
		([title, body]) => `<div>
		<p class='header'>${title}</p>
		${badgify(body)}
	</div>`
	)
	.join('')

document
	.querySelector('.getintouch')
	.querySelector('.button').href = `mailto:${
	'hello' + '@' + 'antonbrams' + '.' + 'io'
}`
