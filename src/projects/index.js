document.querySelector('.projects').innerHTML = Model.projects
	.map((project, i) => {
		if (project.length > 1) {
			const [name, content, [theme, bg, big]] = project
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
		} else {
			const [name] = project
			return `<div
				class="preview theme_dark"
				style="box-shadow: 0 40px 80px -20px rgba(0,0,0,.4);"
			>
				<div>
					<p class="header text_10">${name}</p>
					<br/>
					<p class="text_00">Coming Soon...</p>
				</div>
			</div>`
		}
	})
	.join('')
