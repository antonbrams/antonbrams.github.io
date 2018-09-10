
fw.css`
	#header {
		justify-self  : center;
		grid-column   : 4;
		text-align    : center;
	}
	
	#logo {
		display       : inline-block;
		width         : 8rem;
		height        : 8rem;
		background    : var(--key);
		box-sizing    : border-box;
		border-radius : 3.4rem;
		color         : var(--back);
		font-size     : 14rem;
		line-height   : 14rem;
		font-family   : DIN Alternate;
	}
	
	h1 {
		position      : relative;
		overflow : hidden;
		height : 64px;
		margin : 2 0;
	}
	
	h1 span {
		position : absolute;
		left   : 50%;
		bottom : 0;
		transform : translateX(-50%);
		font-size : 3.72rem;
	}
`;

let Header = () => 
	`<div id='header'>
		<div id='logo'>*</div>
	</div>`

	// <h1>ANTONBRAMS</h1>
	// <h1><span>PORTFOLIO</span></h1>
