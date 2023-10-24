export default (function() {
    const json = {
        "name" : "Danai",
        "age" : 2519,
        
    }
    
    localStorage.setItem("fnyf", JSON.stringify(json))

    console.log(JSON.parse(localStorage.getItem("fnyf")).hair_color)
})()