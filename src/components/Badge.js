
fw.css`
	.badge {
		color          : var(--back);
		vertical-align : bottom;
		background     : var(--middle);
		padding        : 1px var(--space-03);
		border-radius  : var(--border-radius-small);
		font-size      : var(--size-caption);
		line-height    : var(--lh-caption);
		white-space    : nowrap;
	}
`;

let Badge = string => 
	`<span class='badge'>${string}</span>`
