
fw.css`
	.project {
		grid-column    : 4;
		display        : grid;
		grid-auto-flow : row dense;
		margin-bottom  : var(--space-30);
	}
	
	.project .item {
		position         : relative;
		overflow         : hidden;
		border-radius    : var(--border-radius-big);
		background-color : var(--surface);
		transform        : translate(0, 0);
	}
	
	.project .item .content {
		width       : 100%;
		height      : 100%;
		object-fit  : cover;
		transition  : var(--time-1) filter;
		opacity     : 0;
		-webkit-user-select   : none;
		-webkit-touch-callout : none;
	}
	
	.project .item .content {filter : grayscale(1) contrast(.85);}
	.project .item.hover .content {filter : grayscale(0) contrast(.85);}
	
	.project .item .live {
		--outline  : 1px;
		--border   : 3px;
		--diameter : calc(var(--space-00) - (var(--border) - var(--outline)) * 2);
		position   : absolute;
		z-index    : 1;
		right      : var(--space-00);
		bottom     : var(--space-00);
		width      : var(--diameter);
		height     : var(--diameter);
		box-sizing : border-box;
		box-shadow : 0 0 0 var(--outline) var(--key);
		border     : var(--border) transparent solid;
		transform  : translate(50%, 50%) scale(var(--scale, 1));
		transition :
			var(--time-1) transform,
			var(--time-1) opacity,
			var(--time-1) border-width;
		border-radius    : var(--border-radius-circle);
		background-color : var(--key);
		background-clip  : padding-box;
		pointer-events   : none;
	}
	
	.project .item.loaded.hover .live {
		--scale : .5;
		opacity : 0;
	}
	
	.project .item.loaded .content {
		animation : var(--time-2) loadedAnimation forwards;
	}
	@keyframes loadedAnimation {
		from {opacity : 0;} to {opacity : 1;}
	}
	
	.project .item:not(.loaded) .live {
		animation : var(--time-1) whileLoading alternate infinite;
	}
	@keyframes whileLoading {
		to {border-width : calc(var(--border) * 2);}
	}
	
	.project .info {
		grid-row     : 1;
		grid-column  : 1/span 2;
		align-self   : flex-end;
		justify-self : flex-start;
		padding      : var(--space-00) 0;
	}
	
	.project .supertall {
		grid-row : span 4;
	}
	
	.project {
		grid-auto-rows : calc(var(--lh-body) * 6);
		grid-template-columns : repeat(2, 1fr);
		grid-gap : var(--space-01);
	}
	
	.project .item {grid-column : span 2;}
	.project .wide {grid-column : span 2;}
	.project .tall {grid-row : span 2;}
	.project .superwide {grid-column : span 2;}
`;

fw.css`

	@media screen and (min-width : ${fw.breakpoints.mobile}) {
		.project {grid-auto-rows : calc(var(--lh-body) * 12);}
		.project .info {
			grid-row     : auto; 
			grid-column  : auto;
			align-self   : center;
			justify-self : center;
			padding      : 0 var(--space-00);
		}
		.project .item {grid-column : auto;}
		.project .wide {grid-column : span 2;}
		.project .tall {grid-row : span 2;}
		.project .superwide {grid-column : span 2;}
	}

	@media screen and (min-width : ${fw.breakpoints.tablet}) {
		.project {grid-template-columns : repeat(3, 1fr);}
		.project .superwide {grid-column : span 3;}
	}

	@media screen and (min-width : ${fw.breakpoints.desktop}) {
		.project {grid-template-columns : repeat(4, 1fr);}
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
		`<div class="item image ${size}">
			<img
				class  = "content"
				onload = "this.parentNode.classList.add('loaded')"
				toload = "${src}"
				onmouseover  = "onHover(this, 1)"
				onmouseout   = "onHover(this, 0)"
				ontouchstart = "onHover(this, 1)"
				ontouchend   = "onHover(this, 0)" />
		</div>`,
	
	video : (src, size) => 
		`<div 
			class='item video ${size}'> 
				<div class='live'></div>
				<video 
					class        = "content"
					loop         = "true"
					preload      = "true"
					playsinline	 = "true"
					onloadeddata = "this.parentNode.classList.add('loaded')"
					toload       = "${src}"
					onmouseover  = "onHover(this, 1)"
					onmouseout   = "onHover(this, 0)"
					ontouchstart = "onHover(this, 1)"
					ontouchend   = "onHover(this, 0)" /></video>
		</div>`
}

let onHover = function (dom, bool) {
	dom.parentNode.classList[bool? 'add': 'remove']('hover')
	if (dom.tagName == 'VIDEO') {
		if (bool) 
			dom.play() 
		else 
			setTimeout(() => dom.pause(), 5)
	}
}
