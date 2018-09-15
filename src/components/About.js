
fw.css`
	#about {
		grid-column : 4;
		display     : grid;
		grid-gap    : var(--space-10) var(--space-10);
		margin-bottom : var(--space-30);
	}
	
	#about .block:first-of-type {
		grid-column : 1;
	}
	
	.divider {
		border-bottom : var(--border-width) var(--front) solid;
		width  : 100%;
		margin : calc(var(--space-00) - var(--border-width)) 0 var(--space-00);
	}
	
	#about {
		grid-template-columns : repeat(1, 1fr);
	}
	
	@media screen and (min-width : ${fw.breakpoints.mobile}) {
		#about {grid-template-columns : repeat(2, 1fr);}
	}
	@media screen and (min-width : ${fw.breakpoints.tablet}) {
		#about {grid-template-columns : repeat(3, 1fr);}
		#about .block:first-of-type {grid-column : -3/-1;}
		.divider {margin-top : calc(var(--space-30) - var(--border-width));}
	}
	@media screen and (min-width : ${fw.breakpoints.desktop}) {
		#about {grid-template-columns : repeat(4, 1fr);}
	}
`;

// #about .block:first-of-type:first-letter {
// 	font-size      : 5rem;
// 	font-weight    : bold;
// 	line-height    : calc(var(--lh-body) * 2);
// 	margin         : .6rem var(--space-01) var(--space-03) 0;
// 	float          : left;
// }

let About = {
		
	container : children => 
		`<div id='about'>
			${children}
		</div>`,
	
	first : `<h5>
		<div style='font-weight: 100;'>ANTON</div>
		BRAMS
	</h5>`,
	
	block : (title, body) => 
		`<div class='block'>
			${title? 
				`<h6 style='font-weight: bold;'>${title}</h6>
				<br>`
			: ``}
			<span>${body}</span>
		</div>`,
}
