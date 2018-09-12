
fw.css`
	#header {
		grid-column   : 4;
		display : grid;
		grid-template-columns : 1fr 2fr;
		grid-gap : var(--space-20);
	}
`;



// #logo {
// 	display       : inline-block;
// 	width         : 8rem;
// 	height        : 8rem;
// 	background    : var(--key);
// 	box-sizing    : border-box;
// 	border-radius : 3.4rem;
// 	color         : var(--back);
// 	font-size     : 14rem;
// 	line-height   : 14rem;
// 	font-family   : DIN Alternate;
// 	grid-column   : 1/3;
// 	grid-row      : 1;
// 	text-align    : center;
// 	justify-self  : center;
// }

// h1 {
// 	position      : relative;
// 	overflow : hidden;
// 	height : 64px;
// 	margin : 2 0;
// }
// 
// h1 span {
// 	position : absolute;
// 	left   : 50%;
// 	bottom : 0;
// 	transform : translateX(-50%);
// 	font-size : 3.72rem;
// }

let Header = () => `<div id='header'>
		<h6>ANTONBRAMS</h6>
	</div>`
	// `<div id='header'>
	// 	<div id='logo'>*</div>
	// 	<div style="grid-column: 2; grid-row: 2;">
	// 		<h1>Where great Ideas meet Aesthetics and Technology</h1>
	// 		<div class='caption'>by Anton Brams</div>
	// 	</div>
	// 	<div style="grid-column: 1; grid-row: 3; align-self: flex-end;">The basis for all my work is the key philosophy that with enough passion and patience a creative person can achieve almost anything they set out to do.</div>
	// </div>`
	// 

	// <h1>ANTONBRAMS</h1>
	// <h1><span>PORTFOLIO</span></h1>
