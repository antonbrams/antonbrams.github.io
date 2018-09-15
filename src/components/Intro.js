
fw.css`
	#intro {
		grid-column    : 3/6;
		position       : relative;
		overflow       : hidden;
		height         : 0;
		padding-bottom : 56.25%;
		transform      : translate(0);
	}

	#intro iframe {
		position : absolute;
		left     : 0;
		top      : 0;
		width    : 100%;
		height   : 100%;
	}
	
	#intro iframe {
		filter   : contrast(.85);}

	@media screen and (min-width : ${fw.breakpoints.tablet}) {
		#intro {
			border-radius : var(--border-radius-big);
		}
	}
`;

let Intro = src => 
	`<div id='intro'>
		<iframe
			src         ='${src}'
			frameborder ='0'
			allow       = 'autoplay; encrypted-media'
			allowfullscreen>
		</iframe>
	</div>`
