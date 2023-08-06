let result = document.querySelector(".result");
let searchBtn = document.getElementById("search-btn");
let url = "https://www.themealdb.com/api/json/v1/1/search.php?s=" ;
let rightBox = document.querySelector(".rightBox")
let userInp = document.getElementById("user-inp").value ;
let title = document.getElementById("title");


searchBtn.addEventListener("click",()=>{
    let userInp = document.getElementById("user-inp").value ;

    result.style.display = "flex";
    document.querySelector(".rep").style.display = "block";

fetch(url + userInp).then((response)=>response.json()).then((data)=>{

    let myMeal = data.meals[0];
    console.log(myMeal);
    console.log(myMeal.strMealThumb);
    console.log(myMeal.strMeal);
    console.log(myMeal.strArea);
    console.log(myMeal.strInstructions);
   
    let count = 1;
    let ingredients = [];

    for(let i in myMeal){
        let ingredient = "";
        let measure = "";
        if(i.startsWith("strIngredient") && myMeal[i]){
            ingredient = myMeal[i];
            measure = myMeal [`strMeasure` + count ];
            count += 1;
            ingredients.push(`${measure} ${ingredient}`);
        }
    
    }


    rightBox.innerHTML =`<img src=${myMeal.strMealThumb} />` ;
    title.innerHTML = `${myMeal.strMeal}` ;

    let recipe = document.querySelector("#recipe");
    recipe.innerHTML = `${myMeal.strInstructions} `

    let parent  = document.getElementById("ingredient-list");
    parent.innerHTML = ``;
    
    ingredients.forEach((i)=>{
        let child = document.createElement("li");
        child.innerText = i;
        parent.appendChild(child);
    })

    
})
})