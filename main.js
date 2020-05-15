const btn = document.querySelector('#btn')
btn.addEventListener('click', ()=>{
    fetch("https://www.themealdb.com/api/json/v1/1/random.php")
    .then((res) => res.json())
    .then( (data) => {
        let fullDetails =data.meals[0]
        console.log(fullDetails)
        const img = fullDetails.strMealThumb
        const category= fullDetails.strCategory
        const area = fullDetails.strArea
        const mealName = fullDetails.strMeal
        const instruction = fullDetails.strInstructions
        const youTubeLink = fullDetails.strYoutube


        const info = document.querySelector(".content .info")
        const desc = document.querySelector(".desc")
        const link = document.querySelector(".link")
        info.innerHTML = `<img src= "${img}" alt="Food Photo">
        <p> <strong>Category: </strong> ${category}</p>
        <p><strong>Area: </strong>${area} </p>
        `
        desc.innerHTML= `<h1> ${mealName}</h1>
        <p>${instruction} </p>
        `
        link.innerHTML= ` <h2>Video Recipe </h2>
        <iframe width="420" height="315" src="https://www.youtube.com/embed/${youTubeLink.slice(-11)}"></iframe>`
    })
    
})