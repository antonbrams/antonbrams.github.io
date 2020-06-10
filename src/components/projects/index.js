document.querySelector('.projects').innerHTML = projects
	.map(([name, content, [theme, bg, big]], i) => {
		return `<div
		class="preview ${big ? 'big' : ''}
		theme_${theme}"
		onclick="openProject('${i}')"
		style="box-shadow:
			0 40px 80px -20px rgba(0,0,0,.4),
			0 40px 80px -20px ${bg}
		;"
	>
		<div
			class="background morph-background-${i}"
			style="background-color: ${bg};"
		></div>
		<div
			class="content morph-content-${i}"
			style="background-image: url('./projects/${name}/0.png')"
		></div>
		<div>
			<p class="header text_10 morph-title-${i}">${name}</p>
			<br/>
			<br/>
			<p class="text_00 morph-description-${i}">${content[0][1]}</p>
		</div>
	</div>`
	})
	.join('')
