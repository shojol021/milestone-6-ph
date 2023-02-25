const loadCountries = async() => {
    const url = `https://restcountries.com/v2/all`;
    const res = await fetch(url);
    const data = await res.json();
    displayCountry(data);
}

const displayCountry = countryArray => {

    const container = document.getElementById('container')
    countryArray.forEach(element => {
        // element.name;
        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = `
        <div class="card h-100">
            <img src="${element.flag}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${element.name}</h5>
                <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
            </div>
            <div class="card-footer">
                <small class="text-muted">Last updated 3 mins ago</small>
            </div>
            </div>
        
        `;

        container.appendChild(div);        
        
    });
}

const loadRegion = async(region) => {
    const url = `https://restcountries.com/v3.1/region/${region}`;
    const res = await fetch(url);
    const data = await res.json();
    displayRegion(data);
}

const displayRegion = countryArray => {

    const container = document.getElementById('container')
    container.innerHTML = '';
    countryArray.forEach(element => {
        console.log(element);
        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = `
        <div class="card h-100">
            <img src="${element.flags.png}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${element.name.common}</h5>
                <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
            </div>
            <div class="card-footer">
                <small class="text-muted">Last updated 3 mins ago</small>
            </div>
            </div>
        
        `;

        container.appendChild(div);        
        
    });
}

const getRegion = countryRegion => {
    document.getElementById(countryRegion).addEventListener('click', function(){
        const region = countryRegion;
        loadRegion(region);
        
    })
}

getRegion('africa');
getRegion('americas');
getRegion('asia');
getRegion('europe');
getRegion('oceania');


loadCountries();