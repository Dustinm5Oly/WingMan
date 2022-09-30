console.log ("We all worked very hard on this, we appreciate the learning opportunity!")

const foodBtn = document.querySelector('#food-button');
//Setting const for view dates, past dates, and save dates button
const viewDatesBtn = document.getElementById('view-dates')
const pastDates = document.getElementById('past-dates')
const datesBtn = document.getElementById('save-dates')
//API random movie button, API key for movie, and reference to movie title on index.html
const movieButton = document.getElementById("movie-button");
const movieApiKey = '6f3f105acd904176840e0cce36308ce5'
const movieTitle = document.getElementById('movie-title')
//Cocktail id reference and button reference
const cocktailName = document.getElementById('cocktail-name')
const drinksButton = document.getElementById('drinks-button');
//Dinner display reference in index file
let dinnerDisplay = document.getElementById("food-name");
//Clear dates button reference in the index file
const clearBtn = document.getElementById('clear-dates')

//Green check marks for even listeners
const checkOne = document.getElementById('check-one')
checkOne.style.display = 'none'
const checkTwo = document.getElementById('check-two')
checkTwo.style.display = 'none'
const checkThree = document.getElementById('check-three')
checkThree.style.display = 'none'

//Array of food, link to food image, and alt for best practice
const foodArray = [
    {
        food: `Pizza`,
        img: `./assets/foodImages/pizza.avif`,
        alt: "Picture of a Pizza",
    },
    {
        food: `Burger`,
        img: `./assets/foodImages/burger.avif`,
        alt: "Picture of a Burger",
    },
    {
        food: `Pasta`,
        img: `./assets/foodImages/pasta.avif`,
        alt: "Picture of Pasta",
    },
    {
        food: `Ribs`,
        img: `./assets/foodImages/ribs.avif`,
        alt: "Picture of Ribs",
    },
    {
        food: `Tacos`,
        img: `./assets/foodImages/tacos.avif`,
        alt: "Picture of Tacos",
    },
    {
        food: `Steak`,
        img: `./assets/foodImages/steak.avif`,
        alt: "Picture of a Steak",
    },
    {
        food: `Wings`,
        img: `./assets/foodImages/wings.avif`,
        alt: "Picture of Wings",
    },
    {
        food: `Sushi`,
        img: `./assets/foodImages/sushi.avif`,
        alt: "Picture of Sushi",
    },
    {
        food: `Salad`,
        img: `./assets/foodImages/salad.avif`,
        alt: "Picture of a Salad",
    },
    {
        food: `Fried Rice`,
        img: `./assets/foodImages/fried-rice.avif`,
        alt: "Picture of Fried Rice",
    },
];
//Function to generate random food name, image, and alt 
function generateFoodArray(data) {
    for (let i = 0; i < foodArray.length; i++);
    const randomFood = Math.floor(Math.random() * foodArray.length)
    const item = foodArray[randomFood];
    return item;
}
const result = generateFoodArray(foodArray)

//Function to display the random food item from above
function displayFood () {
    let dinnerImg = result.img
    let dinnerImgDisplay = document.getElementById('food-image')
    console.log(dinnerImg);
    dinnerDisplay.textContent = result.food;
    dinnerImgDisplay.setAttribute("src", dinnerImg);
}

//Function to fetch a random movie title and picture from The Movie Database
function movieApi() {
    fetch(`https://api.themoviedb.org/3/movie/popular?api_key=6f3f105acd904176840e0cce36308ce5&language=en-US`)
    .then(function (response) {
    return response.json()
})
.then(function (data) {
    for (i=0; i<data.results.length; i++) {
        const random = data.results[Math.floor(Math.random() * data.results.length)]
        console.log(random)
        console.log(random.title)
        console.log(random.overview)
        const poster = document.getElementById('movie-poster').src = `https://image.tmdb.org/t/p/original${random.poster_path}`
        movieTitle.textContent = (random.title)
    }
    })
}

//Options pasted from API documentation on the Cocktail DB
const options = {
    method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'cd392a0d33mshb5e9da45523590fp1d3689jsnb521e7aa2bf8',
		'X-RapidAPI-Host': 'the-cocktail-db.p.rapidapi.com'
	}
};

//Function to fetch one object from the Cocktail database which already has a random
//path built into the API
function cocktailApi() {
    fetch('https://the-cocktail-db.p.rapidapi.com/random.php?a=list&a=alcholic', options)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            document.getElementById('cocktail-image').src = data.drinks[0].strDrinkThumb
            cocktailName.textContent = (data.drinks[0].strDrink)
        })
}

//Event listener for viewing dates, once clicked, it will create a p tag in the index, grab the 
//current array in local storage, and if there are no results in local storage, it will return the 
//user a message saying there's no saved dates. If there is saved dates in the local storage array
//we run a for loop to iterate through the array and print the dates.
viewDatesBtn.addEventListener('click', function() {
    const $p1 = document.createElement('p')
    const dates = JSON.parse(localStorage.getItem('array'))
    if (dates === null) {
        $p1.textContent = ("There are no saved dates.")
        $p1.style.color = "red"
        pastDates.appendChild($p1)
        //This function will hide the message that there are no dates after 2 seconds
        function HideLabel() {
            var seconds = 2;
            setTimeout(function () {
                $p1.style.display = "none";
            }, seconds * 1000);
        };
        HideLabel()
    } else {
        const header = document.createElement('h3')
        header.textContent = "Here's Your Past Dates!"
        header.style.textAlign = 'center'
        header.style.fontSize = '40px'
        pastDates.appendChild(header)
    for (let i=0; i<dates.length; i++) {
        const $p1 = document.createElement('p')
        var drink = document.createElement('p').textContent = "Drink: "
        const movie = document.createElement('p').textContent = "Movie: "
        const food = document.createElement('p').textContent = "Food: "
        $p1.textContent += ("\u00A0" + drink + dates[i].cocktailName + "\u00A0" + "\u00A0" + "\u00A0" + "\u00A0" + "\u00A0" + movie + dates[i].movieName + "\u00A0" + "\u00A0" + "\u00A0" + "\u00A0" + "\u00A0" + food + dates[i].dinnerName + "\u00A0")
        pastDates.appendChild($p1)
        console.log(dates[i].movieName)
    }
}
})

//Event listener for movie button that will run the movieAPI function, then hide the button
//so the user can't click again
movieButton.addEventListener('click', function() {
    movieApi()
    movieButton.style.display = "none"
    checkOne.style.color = 'green'
    checkOne.style.display = 'inline'
}, { once: true})

//Event listener for the food button, which will then display the random food item
//Then it will hide the button so the user can't continue to click
foodBtn.addEventListener('click', function(){
    displayFood();
    checkTwo.style.display = 'inline'
    checkTwo.style.color = 'green'
    foodBtn.style.display = "none"
}, { once: true });

//Event listener for the drinks button which will run the cocktailApi function
//then it will hide the button
drinksButton.addEventListener('click', function() {
    cocktailApi()
    checkThree.style.display = 'inline'
    checkThree.style.color = 'green'
    drinksButton.style.display = "none"
}, { once: true})

//Event listener for the save dates button, this will get any array inside the local storage 
//called "array" even if it's blank, then it will push the resuls from the cocktail name, movie name, 
//and dinner into the array as a new array of objects
datesBtn.addEventListener('click', function() {
    const arr = JSON.parse(localStorage.getItem('array')) || []
    arr.push({cocktailName: cocktailName.textContent,movieName: movieTitle.textContent,dinnerName: dinnerDisplay.textContent})
    localStorage.setItem('array', JSON.stringify(arr))
})

//Event listener to clear local storage and refresh the page so it updates the current dates
clearBtn.addEventListener('click', function() {
    localStorage.clear()
    window.location.reload()
})


