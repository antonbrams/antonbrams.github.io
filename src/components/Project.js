
fw.css`
	.project {
		grid-column    : 4;
		display        : grid;
		grid-auto-flow : row dense;
		grid-gap       : var(--space-01);
	}
	
	.project .image,
	.project .video {
		position         : relative;
		overflow         : hidden;
		border-radius    : var(--border-radius-big);
		background-color : var(--surface);
		transform        : translate(0, 0);
	}
	
	@keyframes loadedAnimation {
		from {opacity : 0;}
		to   {opacity : 1;}
	}
	
	.project .image img.loaded,
	.project .video video.loaded {
		animation : var(--time-1) loadedAnimation forwards;
	}
	
	.project .image img,
	.project .video video {
		width       : 100%;
		height      : 100%;
		object-fit  : cover;
		filter      : grayscale(1) contrast(.85);
		transition  : var(--time-1) filter;
		opacity     : 0;
	}
	.project .image:hover img,
	.project .video:hover video {
		filter : grayscale(0) contrast(.85);
	}
	
	.project .live {
		position  : absolute;
		z-index   : 1;
		right     : var(--space-00);
		bottom    : var(--space-00);
		width     : var(--space-01);
		height    : var(--space-01);
		transform  : translate(50%, 50%) scale(var(--scale, 1));
		transition :
			var(--time-1) transform,
			var(--time-1) opacity;
		border-radius    : var(--border-radius-circle);
		background-color : var(--key);
		border           : 3px transparent solid;
		background-clip  : padding-box;
		box-shadow       : 0 0 0 1px var(--key);
	}
	
	.project .video:hover .live {
		--scale : .5;
		opacity : 0;
	}
	
	.project .info {
		padding : var(--space-00);
	}
	
	.deco {
		position    : relative;
		overflow    : hidden;
		width       : 100%;
		height      : 100%;
		grid-row    : span 2;
		border-radius : var(--border-radius-big);
	}
	
	.deco > div {
		position : absolute;
		left : 50%;
		top  : 50%;
		transform   : translate(-50%, -50%);
		line-height : 1;
		font-weight : bold;
		font-size   : 10rem;
	}
`;

let Project = {
	container : children => 
		`<div class='project'>${children}</div>`,
	
	title : (title, notes, tools, url) => 
		`<div class='info'>
			<h5>${title}</h5>
			${tools}
			<br>
			<br>
			${notes}
			<br>
			${url? Button('More', url): ''}
		</div>`,
	
	image : (src, size) => 
		`<div class="image ${size}">
			<img
				onload = "this.classList.add('loaded')"
				toload = "${src}"/>
		</div>`,
	
	video : (src, size) => 
			`<div 
				class='video ${size}'> 
					<div class='live'></div>
					<video 
						loop         = "true"
						preload      = "true"
						onloadeddata = "this.classList.add('loaded')"
						onmouseover  = "this.play()"
						onmouseout   = "this.pause()"
						toload       = "${src}"/></video>
			</div>`,
	number : (num, length) => 
		`<div class='deco'>
			<div>${num}/<br>${length}</div>
		</div>`
}
