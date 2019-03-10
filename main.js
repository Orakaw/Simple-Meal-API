document.querySelector("button").addEventListener("click", newMeal);

function newMeal(e) {
  e.preventDefault();
  fetch(`https://www.themealdb.com/api/json/v1/1/random.php`)
    .then(res => res.json()) // parse response as JSON (can be res.text() for plain response)
    .then(response => {
      document.querySelector("img").src = response.meals[0].strMealThumb;
      document.querySelector("h1").innerHTML = response.meals[0].strMeal;
      document.querySelector("h2").innerHTML = response.meals[0].strCategory;
      console.log(response.meals[0])
    })
    .catch(err => {
      console.log(`error ${err}`);
      alert("sorry, there are no results for your search");
    });
}
