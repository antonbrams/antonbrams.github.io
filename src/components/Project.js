
fw.css`
	.project {
		grid-column    : 4;
		display        : grid;
		grid-auto-flow : row dense;
		grid-gap       : var(--space-01);
	}
	
	.project .item {
		position         : relative;
		overflow         : hidden;
		border-radius    : var(--border-radius-big);
		background-color : var(--surface);
		transform        : translate(0, 0);
	}
	
	.project .image img,
	.project .video video {
		width       : 100%;
		height      : 100%;
		object-fit  : cover;
		filter      : grayscale(1) contrast(.85);
		transition  : var(--time-1) filter;
		opacity     : 0;
		-webkit-user-select   : none;
		-webkit-touch-callout : none;
	}
	.project .image:hover img,
	.project .video:hover video {
		filter : grayscale(0) contrast(.85);
	}
	
	.project .item .live {
		position   : absolute;
		z-index    : 1;
		right      : var(--space-00);
		bottom     : var(--space-00);
		width      : 1.25rem;
		height     : 1.25rem;
		box-sizing : border-box;
		box-shadow : 0 0 0 1px var(--key);
		border     : 3px transparent solid;
		transform  : translate(50%, 50%) scale(var(--scale, 1));
		transition :
			var(--time-1) transform,
			var(--time-1) opacity,
			var(--time-1) border-width;
		border-radius    : var(--border-radius-circle);
		background-color : var(--key);
		background-clip  : padding-box;
	}
	
	.project .video.loaded:hover .live {
		--scale : .5;
		opacity : 0;
	}
	
	.project .item .info {
		padding : var(--space-00);
	}
	
	.project .item.loaded img,
	.project .item.loaded video {
		animation : var(--time-2) loadedAnimation forwards;}
	@keyframes loadedAnimation {from {opacity : 0;} to {opacity : 1;}}
	
	.project .item:not(.loaded) .live {
		animation : var(--time-1) whileLoading alternate infinite;}
	@keyframes whileLoading {to {border-width : 6px;}}
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
		`<div class="item image ${size}">
			<img
				onload = "this.parentNode.classList.add('loaded')"
				toload = "${src}"/>
		</div>`,
	
	video : (src, size) => 
		`<div 
			class='item video ${size}'> 
				<div class='live'></div>
				<video 
					loop         = "true"
					preload      = "true"
					onmouseover  = "this.play()"
					onmouseout   = "this.pause()"
					ontouchstart = "this.play()"
					ontouchend   = "this.pause()"
					playsinline	 = "true"
					onloadeddata = "this.parentNode.classList.add('loaded')"
					toload       = "${src}"/></video>
		</div>`
}
