const loadMeals = (search) => {
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`)
    .then(res => res.json())
    .then(data => displayMeals(data.meals))
}

const displayMeals = meals => {

    const container = document.getElementById('container');
    container.innerText = ''
    meals.forEach(element => {
        // console.log(element); 
        // ${}
        
        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = `
            <div class="col">
                <div class="card h-100">
                    <img src="${element.strMealThumb}" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">${element.strMeal}</h5>
                        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to
                            additional content. This card has even longer content than the first to show that equal
                            height action.</p>
                    </div>
                    <div class="card-footer">
                        <small class="text-muted">Last updated 3 mins ago</small>
                    </div>
                </div>
            </div>
        
        `

        container.appendChild(div);
    });
}

const searchMeals = search => {
    const searchText = document.getElementById('inp-field').value;
    loadMeals(searchText);
    
}


loadMeals('rice')