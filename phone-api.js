const getAllPhones = async (phones) => {
    const url = `https://openapi.programming-hero.com/api/phones?search=${phones}`;
    const res = await fetch(url);
    const data = await res.json();
    showAllPhones(data.data);


}

const showAllPhones = (phones) => {
    console.log(phones)
    const phonesContainer = document.getElementById('phones-container')
    phonesContainer.innerHTML = '';
    const noPhone = document.getElementById('no-phone');
    if (phones.length === 0){
        noPhone.classList.remove('d-none')
    }
    else {
        noPhone.classList.add('d-none')
    }

    phones.forEach(element => {
        // console.log(element)
        const div = document.createElement('div')
        div.classList.add('col');
        div.innerHTML = `
        <div class="card h-100">
            <img src="${element.image}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${element.phone_name}</h5>
                <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            </div>
            </div>
        `
        phonesContainer.appendChild(div);

    });
}


const searchPhoneBrand = () => {
    const searchText = document.getElementById('inp-search-phones').value;
    document.getElementById('inp-search-phones').value = '';
    
    if(searchText === ''){
        alert('please type something');
        return;
    }
    getAllPhones(searchText);

}

getAllPhones('samsung');





// URL Format: https://openapi.programming-hero.com/api/phone/${id}

// Example: https://openapi.programming-hero.com/api/phone/apple_iphone_13_pro_max-11089