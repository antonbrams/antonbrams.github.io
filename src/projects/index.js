document.querySelector('.projects').innerHTML = projects
	.map(([name, content, [theme, bg, big]], i) => {
		return `<div
			class="preview ${big ? 'big' : ''} theme_${theme}"
			onclick="openProjectAndSetURL('${i}')"
			style="
				background-color: ${bg};
				box-shadow:
					0 40px 80px -20px rgba(0,0,0,.4),
					0 40px 80px -20px ${bg}
				;
			"
		>
			<div
				class="content"
				style="background-image: url('./projects/${name}/0.jpg')"
			></div>
			<div>
				<p class="header text_10">${name}</p>
				<br/>
				<p class="text_00">${content[0][1]}</p>
			</div>
		</div>`
	})
	.join('')
