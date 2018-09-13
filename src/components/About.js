
fw.css`
	#about {
		grid-column : 4;
		display     : grid;
		grid-gap    : var(--space-10) var(--space-10);
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
	
	.divider {
		border-bottom : var(--border-width) var(--front) solid;
		width  : var(--space-20);
		margin : calc(var(--space-00) - var(--border-width)) 0 var(--space-20);
	}
	
	#about {grid-template-columns : repeat(1, 1fr);}
	@media screen and (min-width : ${fw.breakpoints.mobile}) {
		#about {grid-template-columns : repeat(2, 1fr);}}
	@media screen and (min-width : ${fw.breakpoints.tablet}) {
		#about {grid-template-columns : repeat(3, 1fr);}
		#about .block:first-of-type {grid-column : -3/-1;}}
	@media screen and (min-width : ${fw.breakpoints.desktop}) {
		#about {grid-template-columns : repeat(4, 1fr);}}
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
			${title? `<h6 style='font-weight: bold;'>${title}</h6><br>`: ``}
			<span>${body}</span>
		</div>`,
		
	title : 
		`<span class='title'>
			<div>ABOUT</div>
		</span>`
}
