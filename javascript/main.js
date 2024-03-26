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


function getGeoLocation(e){
    // Haal locatie op en stuur door naar showlocaton functie
    navigator.geolocation.getCurrentPosition(showLocation);

    // Zorg dat de locatie continu opnieuw wordt ververst
    navigator.geolocation.watchPosition(showLocation);
}

function showLocation(location){
    button.remove();
    userLocation = '';
    userLocation.innerHTML = (location.coords.latitude + ', ' + location.coords.longitude);
    console.log(location.coords.latitude + ', ' + location.coords.longitude)

}