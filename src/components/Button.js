
fw.css`
	.buttonWrap {
		text-align : center;
	}
	.button {
		display     : inline-block;
		background  : var(--key);
		color       : var(--back);
		padding     : var(--space-03) var(--space-01);
		cursor      : pointer;
		font-weight : bold;
		border-radius : var(--border-radius-big);
	}
`;

let Button = (name, url) => 
	`<br><div class='buttonWrap'>
		<div 
			class   = "button"
			onclick = "window.open('${url}', '_blank')">
				${name}
		</div>
	</div>`
