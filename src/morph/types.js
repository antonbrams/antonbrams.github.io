const types = {
	fade: {
		keyframes: `
			@keyframes A-fade {40%, 100% {opacity: 0;}}
			@keyframes B-fade { 0%,  60% {opacity: 0;}}
		`,
		play: (element, scene, parameters) => `
			${scene}-fade ${parameters}
		`,
	},

	scale: {
		keyframes: `
			@keyframes A-scale {40%, 100% {transform: scale(0.5);}}
			@keyframes B-scale { 0%,  60% {transform: scale(0.5);}}
		`,
		play: (element, scene, parameters) => `
			${scene}-scale ${parameters},
			${scene}-fade ${parameters}
		`,
	},

	slideUp: {
		keyframes: `
			@keyframes A-slide-up {40%, 100% {transform: translateY(-10rem);}}
			@keyframes B-slide-up { 0%,  60% {transform: translateY(-10rem);}}
		`,
		play: (element, scene, parameters) => `
			${scene}-slide-up ${parameters},
			${scene}-fade ${parameters}
		`,
	},

	slideDown: {
		keyframes: `
			@keyframes A-slide-down {40%, 100% {transform: translateY(10rem);}}
			@keyframes B-slide-down { 0%,  60% {transform: translateY(10rem);}}
		`,
		play: (element, scene, parameters) => `
			${scene}-slide-down ${parameters},
			${scene}-fade ${parameters}
		`,
	},

	morph: {
		keyframes: `
			@keyframes A-morph {
				 0%,  20% {opacity: 1;}
				50%, 100% {opacity: 0;}
			}
			@keyframes B-morph {
				 0%,  10% {opacity: 0;}
				40%, 100% {opacity: 1;}
			}
		`,
		init(AElement, BElement) {
			let AMatrix = calculateSpatialDifference(
				AElement.rect,
				BElement.rect
			)
			let BMatrix = inverseMatrix(AMatrix)
			return `
				@keyframes A-morph-${AElement.tag}-${AElement.id} {
					100% {transform : matrix(${AMatrix.join(',')});}
				}
				@keyframes B-morph-${BElement.tag}-${BElement.id} {
					  0% {transform : matrix(${BMatrix.join(',')});}
				}
		`
		},
		play: (element, scene, parameters) => `
			${scene}-morph-${element.tag}-${element.id} ${parameters},
			${scene}-morph ${parameters}
		`,
	},
}
