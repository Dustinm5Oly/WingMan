console.log ("this is a test")
const foodBtn = document.querySelector('#food-button');
// const foodName = getElementById('#food-image');
// const foodImg = getElementById('#food-name');

const foodArray = [
    {
        food:"Pizza",
        img:`./assets/foodImages/pizza.avif`,
        alt:"Picture of a Pizza",
    },
    {
        food:"Burger",
        img:`./assets/foodImages/burger.avif`,
        alt:"Picture of a Burger",
    },
    {
        food:"Pasta",
        img:`./assets/foodImages/pasta.avif`,
        alt:"Picture of Pasta",
    },
    {
        food:"Ribs",
        img:`./assets/foodImages/ribs.avif`,
        alt:"Picture of Ribs",
    },
    {
        food:"Tacos",
        img:`./assets/foodImages/tacos.avif`,
        alt:"Picture of Tacos",
    },
    {
        food:"Steak",
        img:`./assets/foodImages/steak.avif`,
        alt:"Picture of a Steak",
    },
    {
        food:"Wings",
        img: `./assets/foodImages/wings.avif`,
        alt:"Picture of Wings",
    },
    {
        food:"Sushi",
        img:`./assets/foodImages/sushi.avif`,
        alt:"Picture of Sushi",
    },
    {
        food: `Salad`,
        img: `./assets/foodImages/salad.avif`,
        alt:"Picture of a Salad",
    },
    {
        food: `Fried Rice`,
        img:`./assets/foodImages/fried-rice.avif`,
        alt:"Picture of Fried Rice",
    },
];

function generateFoodArray(data) {
    for (let i = 0; i < foodArray.length; i++); 
    const randomFood = Math.floor(Math.random()*foodArray.length)
    const item = foodArray[randomFood];
    return item;
}
const result = generateFoodArray(foodArray)
console.log(result);

function displayFood () {
    let dinnerFood = JSON.stringify(result.food);
    let dinnerImg = result.img
    let dinnerDisplay = document.getElementById("food-name");
    let dinnerImgDisplay = document.getElementById('food-image')
    console.log(dinnerImg);
    dinnerDisplay.textContent = dinnerFood;
    dinnerImgDisplay.setAttribute("src", dinnerImg);
}

foodBtn.addEventListener('click', function(){
    displayFood();
});


// let foodSelected= []
// for (let i = 0; i < foodArray.length; i++) {
//     foodSelected.push(foodArray[Math.floor(Math.random()*foodArray.length)]);
//     console.log(generateFoodArray);
// }

// pizzaEl.children[0].textContent = data.food;
// pizzaEl.children[1].children[0].setAttribute("src", data.img);
// pizzaEl.children[1].children[0].setAttribute("alt", data.alt);
// pizzaEl.children[1].children[0].setAttribute("style", "padding:10px;");
// }








//Api for random Drink info

const drinksButton = document.getElementById('drinks-button');

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'cd392a0d33mshb5e9da45523590fp1d3689jsnb521e7aa2bf8',
		'X-RapidAPI-Host': 'the-cocktail-db.p.rapidapi.com'
	}
};

function cocktailApi() {
    fetch('https://the-cocktail-db.p.rapidapi.com/random.php?a=list&a=alcholic', options)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        console.log(data)
        //need an img div blank in index.html file with id="cocktail-image"
        //need h3 element blank with id="cocktail-name"
        //need p tag blank with id="instructions"
        document.getElementById('cocktail-image').src = data.drinks[0].strDrinkThumb
        document.getElementById('cocktail-name').textContent = (data.drinks[0].strDrink)
        document.getElementById('cocktail-instructions').textContent = (data.drinks[0].strInstructions)
    })
}
//event listener for button in index.html file
drinksButton.addEventListener('click', function() {
    cocktailApi()
})