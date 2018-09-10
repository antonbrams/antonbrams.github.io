
fw.css`
	#about {
		grid-column : 4;
		display     : grid;
		grid-gap    : var(--space-10) var(--space-10);
		grid-template-columns : repeat(auto-fill, minmax(220px, 1fr));
	}
	
	#about .block:first-of-type {
		grid-column : 1;
	}
	
	#about .block:first-of-type:first-letter {
		font-size      : 5rem;
		font-weight    : bold;
		line-height    : calc(var(--lh-body) * 2);
		margin         : .6rem var(--space-01) var(--space-03) 0;
		float          : left;
	}
	
	@media screen and (min-width : ${fw.breakpoints.tablet}) {
		#about .block:first-of-type {
			grid-column : -3/-1;
		}
	}
	
	.divider {
		border-bottom : var(--border-width) var(--front) solid;
		width : var(--space-20);
	}
`;

// #about .title {
// 	position     : relative;
// 	overflow     : hidden;
// 	align-self   : flex-start;
// 	justify-self : flex-end;
// 	width        : 100%;
// 	height       : 200px;
// }
// #about .title div {
// 	position  : absolute;
// 	right     : 0px;
// 	top       : 0px;
// 	height    : 100%;
// 	font-size : 7rem;
// }

// #about .title {
// 	grid-column : span 2;
// }

let About = {
	
	container : children => 
		`<div id='about'>
			${children}
		</div>`,
	
	block : (title, body) => 
		`<div class='block'>
			${title? `<h6>${title}</h6><br>`: ``}
			<span>${body}</span>
		</div>`,
		
	title : 
		`<span class='title'>
			<div>ABOUT</div>
		</span>`
}
