export default (function() {
    let option = {
        root: document.querySelector(".dims"),
        rootMargin: "6px",
        threhold: 1.0,
    }

    function callback() {
        entrion.forEach(entry => {
            if (entry.isIntersection) return

            if (entry.isIntersection >= 0.75) {
                console.log(entry)
                entry.target.classList.remove("dims")
                entry.target.classList.add("dims-on")
            }
        })
    }

    let observer = new IntersectionObserver(callback, option)

    observer .observe(document.querySelectorAll(".boks"))
})()