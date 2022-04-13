import axios from "axios";

console.log("Test")

async function fetchCountries(){
    try {
        const result = await axios.get('https://restcountries.com/v2/all')
        console.log(result.data)
        sort(result.data)
        console.log("De info is nu " + newCountryList)
        countryMap(result.data)
        const countryLijst = document.getElementById("countries")
        countryLijst.innerHTML = newCountryList
    } catch (e) {
        console.error(e)
    }
}

fetchCountries()

// Maak een functie die ervoor zorgt dat er door de uitkomsten gemapt kan worden.
// Gebruik de map-methode om over de array met landen heen te mappen, en zo een <li>-element te maken voor álle landen;
let newCountryList = []
function countryMap(countryList){
// Map functie. Geeft name, flag en population terug in <li>. 'colour' refereert naar de colourChange functie.
    newCountryList = countryList.map((country) => {
        colourChange(country.region)
            return`<ul><img src="${country.flag}" alt="Country flag">
        <li id="${colour}">${country.name}</li>
        <li>Has a population of ${country.population} people</li>
        </ul>`}
    )
    return newCountryList
}

// Schrijf een aparte functie die één regio-naam verwacht, en op basis van deze regio de correcte kleur-naam als string teruggeeft.
// Gebruik deze, om de naam van het land in de juiste kleur weer te geven op de pagina. Tip: zorg ervoor dat je CSS-classes maakt voor alle regio-kleuren!
let colour = ""

function colourChange(regionName){
switch (regionName){
    case 'Asia' :
        colour = "Red";
        break;
    case 'Europe' :
        colour = 'Yellow';
        break;
    case 'Africa' :
        colour = 'Blue';
        break;
    case 'Polar' :
        colour = 'Black';
        break;
    case 'Americas' :
        colour = 'Green';
        break;
    case 'Oceania' :
        colour = 'Pink';
        break;
    default :
        colour = 'None';
}
}

function sort(countryList){
    countryList.sort((a, b) => {
        if (a.population<b.population){return -1}
        if (a.population>b.population){return 0}
    })
}


