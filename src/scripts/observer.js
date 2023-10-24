export default (function init(offset = 0) {
	let observer = new IntersectionObserver(callback, {rootMargin: "0px", threshold: 1.0})
	
	fetch(`https://pokeapi.co/api/v2/pokemon?limit=50&offset=${offset}`)
		.then(res => res.json())
		.then(data => {
			data.results.forEach((pokemon, index) => {
				const p = document.createElement("p")
				p.innerText = pokemon.name
				document.body.append(p)
				if (index === data.results.length - 1) {
					observer.observe(p)
				}
			})
		})

		function callback(entries) {
			entries.forEach(entry => {
				if (!entry.isIntersecting) return // guard clause

				if (entry.intersectionRatio >= 0.5) {
					observer.unobserve(entry.target)
					init(offset + 50)
				}
			})
		}
})()
