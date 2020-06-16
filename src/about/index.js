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

const getintouch = document
	.querySelector('.getintouch')
	.querySelector('.button')
const email = 'hello' + '@' + 'antonbrams' + '.' + 'io'
getintouch.href = `mailto:${email}`
getintouch.innerHTML = email
