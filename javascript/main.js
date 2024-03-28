window.addEventListener('load', init);

let userLocation;
let button;


function init(){

    // Benodigheden ophalen uit HTML
    userLocation = document.getElementById('userLocation');
    button = document.getElementById('button');

    // De button verwijzen naar getGeoLocation functie
    button.addEventListener('click', getGeoLocation);


}

// fuctie voor het creeëren van de map, de functie wordt aangeroepen in de script tag in de html
function initMap() {
    let wijnhaven4 = 'dba152c45ac190f4';




    map = new google.maps.Map(document.getElementById("map"), { // hier wordt de map ingeladen
        center: { lat: 51.917423, lng: 4.484874 }, // Hier worden de centrum coördinaten ingesteld
        zoom: 25, // Hir wordt ingesteld hoeveel er ingezoomed wordt

        heading: 180,
        mapId: wijnhaven4, // Dit is het ID van de map

        // Hier wordt de standaar UI eruit gehaald
        zoomControl: false, // Haalt zoomknop weg
        streetViewControl: false, // Haalt het streetview knopje weg
        mapTypeControl: false, // Haalt maptype knopje weg
        keyboardShortcuts: false, // Haalt het keyboardshortcuts knopje weg

        // Hier wordt de mogelijkheid om van locatie te veranderen en uit of in te zoomen uitgezet
        gestureHandling: "auto", // Haalt mogelijkheid om te zoomen met muis/ of andere input mogelijkheden weg
        draggable: true // Zorgt ervoor dat de kaart niet versleept kan worden

    });
}


function getGeoLocation(e){
    // Haal locatie op en stuur door naar showlocaton functie
    navigator.geolocation.getCurrentPosition(showLocation);

}

function showLocation(location){
    button.remove();
    userLocation.innerHTML = '';
    userLocation.innerHTML = (location.coords.latitude + ', ' + location.coords.longitude); // Vult de coördinaten in en lat ze zien op de pagina
    console.log(location.coords.latitude + ', ' + location.coords.longitude)

}