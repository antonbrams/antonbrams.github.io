
let width   = 230
let maxCols = Math.floor(parseInt(fw.breakpoints.desktop) / width)
let sizes   = [
	[1,1,2,4],
	[2,2,2,4], 
	[2,2,3,4], 
	[2,2,3,4]
]

let queries = ''
for (let i = 0; i < maxCols; i ++) {
	let [wide, tall, superwide, supertall] = sizes[i] || sizes[sizes.length - 1]
	queries += 
		`@media screen and (min-width : ${width * (i + 1) + 500}px) {
			.project {grid-template-columns  : 
				repeat(${i+1}, minmax(${width}px, 1fr));}
			.project .wide 		{grid-column : span ${wide};}
			.project .tall 		{grid-row    : span ${tall};}
			.project .superwide {grid-column : span ${superwide};}
			.project .supertall {grid-row    : span ${supertall};}
		}`
}

fw.css`
	.project {
		grid-auto-rows : ${width * 1.15}px;
	}
	
	.project .info {
		align-self   : center;
		justify-self : center;
		grid-row     : 1;
		grid-column  : 1;
	}
	
	.project .supertall {grid-row : span 4;}
	
	@media screen and (min-width : ${fw.breakpoints.tablet}) {
		.project .info {
			grid-row     : auto;
			grid-column  : auto;
		}
	}
	
	${queries}
`;
