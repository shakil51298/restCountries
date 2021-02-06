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
            <button onclick="showDetails('${country.name}')" class="btn btn-success"><a href ="#hide" style="text-decoration:none;color:white"> Details</a></button>
        `
        items.innerHTML = countryInfo;
        mainDiv.appendChild(items);
        // console.log(country.area);
    }
}

function showDetails(name) {
    fetch(`https://restcountries.eu/rest/v2/name/${name}`)
        .then(Response => Response.json())
        .then(json => Details(json))

    function Details(country){
        const FlagImg = document.getElementById('flagImg');
        FlagImg.src = country[0].flag;

        const CnameD = document.getElementById('showingName')
        CnameD.innerText = 'Country Name: '+country[0].name;

        const CnumericCode = document.getElementById('showingNumericCode');
        CnumericCode.innerText = 'Numeric Code: ' + country[0].numericCode;

        const Cborders = document.getElementById('showingBorders');
        Cborders.innerText = 'Borders: ' + country[0].borders;

        const Cpopulation = document.getElementById('showingPopilation');
        Cpopulation.innerText = 'Population: ' + country[0].population;

        const Cregion = document.getElementById('showingRegion');
        Cregion.innerText = 'Region: ' + country[0].region;

        const CsubRegion = document.getElementById('showingsubRegion');
        CsubRegion.innerText = 'Sub-Region: ' + country[0].subregion;

        const CtimeZons = document.getElementById('showingTimeZons');
        CtimeZons.innerText = 'Time-Zones: ' + country[0].timezones[0];

        const CcallingCode = document.getElementById('showingCallingCode');
        CcallingCode.innerText = 'Calling Code : ' + country[0].callingCodes[0];

        const CcallingArea = document.getElementById('showingArea');
        CcallingArea.innerText = 'Area : ' + country[0].area;

        const Ccapital = document.getElementById('showingCapital');
        Ccapital.innerText = 'Capital : ' + country[0].capital;

        const Clanguage = document.getElementById('showinglang');
        Clanguage.innerText = 'Language : ' + country[0].languages[0].nativeName;

    console.log(country);
    }
}