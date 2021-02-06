fetch('https://restcountries.eu/rest/v2/all')
    .then(res => res.json())
    .then(data => shakil(data))

function shakil(all) {
    const mainDiv = document.getElementById('main');
    for (let i = 0; i < all.length; i++) {
        const country = all[i];

        const items = document.createElement('div');
        items.className = 'infoDiv'

        const countryInfo = `
            <h3 class="countryName">${country.name}</h3>
            <p class="capital">${country.capital}</p>
            <button onclick="showDetails('${country.name}')" class="btn btn-success">Details</button>
        `
        items.innerHTML = countryInfo;
        mainDiv.appendChild(items);
        // console.log(country.area);
    }
}

function showDetails(name) {
    fetch(`https://restcountries.eu/rest/v2/name/${name}`)
        .then(Response => Response.json())
        .then(json => console.log(json))

    // function Details(shakil){
    // console.log(name);
    // }
}