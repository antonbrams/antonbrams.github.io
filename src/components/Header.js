
fw.css`
	#header {
		grid-column     : 1/-1;
		position 		: relative;
		text-align      : center;
		height          : 100vh;
		display         : flex;
		align-items     : center;
		justify-content : center;
		margin-bottom   : var(--space-20);
	}
	
	#header .bg {
		position : absolute;
		z-index  : -1;
		left     : 0px;
		top      : 0px;
		width    : 100%;
		height   : 100%;
		background-image    : url('./graphic/intro3.png');
		background-size     : auto 100%;
		background-position : center;
		background-repeat   : no-repeat;
	}
	
	body.dark #header .bg {
		opacity : .4;
	}
	
	#header h1 {
		font-weight : 100;
		max-width   : 500px;
		color       : white;
		padding     : var(--space-00);
	}
	
	#header a {
		--color : white;
	}
`;

let Header = () => `<div id='header'>
		<div class='bg'></div>
		<div>
		<h1>Where great <b>Ideas</b> meet <b>Math</b> and <b>Aesthetics.</b></h1>
		<a target='blank' href='https://youtu.be/HMAyucUVoSo'>Introduction</a>
		</div>
	</div>`
