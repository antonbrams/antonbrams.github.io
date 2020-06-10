const toggleClasses = (dom, classes, i) => {
	classes.forEach((a, n) => {
		dom.classList[i == n ? 'add' : 'remove'](a)
	})
}
