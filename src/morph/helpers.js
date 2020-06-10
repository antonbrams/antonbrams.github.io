const calculateSpatialDifference = (A, B) => [
	B.width / A.width,
	0,
	0,
	B.height / A.height,
	B.left + B.width / 2 - (A.left + A.width / 2),
	B.top + B.height / 2 - (A.top + A.height / 2),
]

const inverseMatrix = m => [
	1 / m[0],
	m[1],
	m[2],
	1 / m[3],
	-m[4],
	-m[5],
]

const createStyles = () => {
	const style = document.createElement('style')
	document.head.appendChild(style)
	return css => (style.innerHTML = css)
}
