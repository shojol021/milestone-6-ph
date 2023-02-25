const loadMeals = async (abc) => {
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${abc}`
    const res = await fetch(url);
    const data = await res.json();
    displayMeals(data.meals);
}

const displayMeals = (meals) => {
    const container = document.getElementById('container');
    container.innerHTML = '';
    console.log(meals);
    var count = 0;
    meals.forEach(element => {
        count++

        if (count < 7) {
            const div = document.createElement('div');
            div.innerHTML = `
            <div class="col">
                <div class="card h-100">
                    <img src="${element.strMealThumb}" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">${element.strMeal}</h5>
                        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to
                            additional content. This content is a little bit longer.</p>
                    </div>
                    <div class="card-footer">
                        <small class="text-muted">Origin: ${element.strArea}</small>
                    </div>
                </div>
            </div>
        `
            container.appendChild(div);
        }

    });



    document.getElementById('btn-showAll').addEventListener('click', function () {
        container.innerText = '';

        meals.forEach(element => {
            const div = document.createElement('div');
            div.innerHTML = `
                <div class="col">
                    <div class="card h-100">
                        <img src="${element.strMealThumb}" class="card-img-top" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">${element.strMeal}</h5>
                            <p class="card-text">This is a wider card with supporting text below as a natural lead-in to
                                additional content. This content is a little bit longer.</p>
                        </div>
                        <div class="card-footer">
                            <small class="text-muted">Origin: ${element.strArea}</small>
                        </div>
                    </div>
                </div>
            `
            container.appendChild(div);

        });
    })
}

const search = () => {
    const searchText = document.getElementById('input-field').value;
    loadMeals(searchText);
    console.log(searchText)
}

loadMeals('fish');