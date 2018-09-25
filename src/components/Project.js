
fw.import('./src/components/Button.js')

fw.css`
	
	.projectInfo {
		grid-column : 4;
		display : grid;
		grid-gap : var(--space-00);
		grid-template-columns : 1fr;
		margin-bottom : var(--space-00);
	}
	
	.projectInfo .title {
		
	}
	
	.projectInfo .notes {
		display     : flex;
		align-items : center;
	}
	
	.projectInfo .more {
		display     : flex;
		align-items : center;
	}
	
	.project {
		grid-column   : 1/-1;
		white-space   : nowrap;
		overflow-x    : scroll;
		margin-bottom : var(--space-20);
		transform     : translate3d(0,0,0);
		scroll-snap-type : mandatory;
		-webkit-overflow-scrolling : touch;
		padding : var(--space-00);
	}
	
	.project .item {
		--height  : 48vw;
		--ratio   : 1;
		display   : inline-block;
		overflow  : hidden;
		transform : translate3d(0,0,0);
		height    : var(--height);
		width     : calc(var(--height) * var(--ratio));
		max-width : 85vw;
		margin-right      : var(--space-01);
		border-radius     : var(--border-radius-big);
		scroll-snap-align : center;
	}
	
	.project .item:last-child {
		margin-right : 0;
	}
	
	.project .item .content {
		height     : 100%;
		width      : 100%;
		transition : var(--time-1) filter;
		transform  : translate3d(0,0,0);
		object-fit : cover;
		-webkit-user-select   : none;
		-webkit-touch-callout : none;
	}
	.project .item.t {--ratio : 0.5;}
	.project .item.f {--ratio : 1.25;}
	.project .item.s {--ratio : 1;}
	.project .item.v {--ratio : 1.7;}
	.project .item.w {--ratio : 4.4;}
	
	@media screen and (min-width : ${fw.breakpoints.mobile}) {
		.projectInfo {
			grid-template-columns : 350px;
		}
		.project {
			padding : var(--space-00) calc(var(--space-20) + var(--space-00));
		}
		.project .item {
			--height : calc(var(--lh-body) * 14);
		}
	}
	@media screen and (min-width : ${fw.breakpoints.tablet}) {
		.projectInfo {
			grid-template-columns : minmax(auto, 250px) minmax(auto, 250px) auto;
			grid-gap : 0;
		}
		.projectInfo > * {
			border-right : var(--border-width) var(--surface) solid;
			padding : 0 var(--space-00);
		}
		.projectInfo > *:first-child {padding-left: 0;}
		.projectInfo > *:last-child {border: none;}
	}
	@media screen and (min-width : ${fw.breakpoints.desktop}) {
		.project {
			--big-padding : calc(${fw.breakpoints.desktop} - var(--space-30));
			padding : var(--space-00) calc((100vw - var(--big-padding))/2);
		}
		.project .item {
			--height     : calc(var(--lh-body) * 20);
		}
	}
`;

fw.css`
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
	.project .item .content {opacity : 0;}
	.project .item.loaded .content {animation : var(--time-1) loadedAnimation forwards;}
	@keyframes loadedAnimation {from {opacity : 0;} to {opacity : 1;}}
	.project .item:not(.loaded) .live {animation : var(--time-1) whileLoading alternate infinite;}
	@keyframes whileLoading {to {border-width : calc(var(--border) * 2);}}
`;

let Project = {
	
	project : children => `<div class ='project'>${children}</div>`,
	
	title : (title, notes, tools, url) => 
		`<div class='projectInfo'>
			<div class='title'>
				<h5>${title}</h5>
				${tools}
			</div>
			<div class='notes'>${notes}</div>
			${url? `<div class='more'>${Button('More', url)}</div>`: ''}
		</div>`,
	
	image : (src, size) => 
		`<div class="item image ${size}">
			<img
				class        = "content"
				onload       = "this.parentNode.classList.add('loaded')"
				toload       = "${src}"
				onmouseover  = "onHover(this, 1)"
				onmouseout   = "onHover(this, 0)"
				ontouchstart = "onHover(this, 1)"
				ontouchend   = "onHover(this, 0)" />
		</div>`,
	
	video : (src, size) => 
		`<div 
			class="item video ${size}"> 
				<div class="live"></div>
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
