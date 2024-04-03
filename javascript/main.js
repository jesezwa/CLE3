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
        mapId: wijnhaven4, // Dit is het ID van de maps
        center: { lat: 51.917363, lng: 4.484630 }, // Hier worden de centrum coördinaten ingesteld
        zoom: 20, // Hir wordt ingesteld hoeveel er ingezoomed wordt
        heading: 90,
        tilt: 45,

        // Hier wordt de standaar UI eruit gehaald
        zoomControl: false, // Haalt zoomknop weg
        streetViewControl: false, // Haalt het streetview knopje weg
        mapTypeControl: false, // Haalt maptype knopje weg
        keyboardShortcuts: false, // Haalt het keyboardshortcuts knopje weg

        // Hier wordt de mogelijkheid om van locatie te veranderen en uit of in te zoomen uitgezet
        gestureHandling: "auto", // Haalt mogelijkheid om te zoomen met muis/ of andere input mogelijkheden weg
        draggable: true // Zorgt ervoor dat de kaart niet versleept kan worden

    });

    class CustomOverlay extends google.maps.OverlayView { // Basis klasse van OverlayView klasse uitbreiden met de CustomOverlay klasse
        constructor(bounds, image, map) { // Een constructor voor het invoegen van parameters
            super();
            this.bounds_ = bounds;
            this.image_ = image;
            this.map_ = map;
            this.div_ = null;
            this.setMap(map);
        }

        // Functie voor het maken van de map
        onAdd() {

            // Er wordt een div aangemaakt, hier wordt later de plattegrond ingezet
            this.div_ = document.createElement("div");
            this.div_.classList.add('overlayDiv');

            // Hierin komt de plattegrond, die wordt toegevoegd aan de div
            const img = document.createElement('img')
            img.src = this.image_;
            img.classList.add('overlayImage');
            this.div_.appendChild(img);

            // Hier wordt de map toegevoegd
            const panes = this.getPanes(); // Haalt de lagen op van de map uit de API
            panes.overlayLayer.appendChild(this.div_); // Voegt de overlay toe aan de specifieke overlay laag
        }

        // Functie voor het bepalen van de grootte en de positie van de overlay op de kaart
        draw() {
            const overlayProjection = this.getProjection(); // Zet geo-cords om naar pixel-cords
            const sw = overlayProjection.fromLatLngToDivPixel(this.bounds_.getSouthWest()); // Zet zuidewestelijke cords om naar pix cords en voegt toe aan prjectie object
            const ne = overlayProjection.fromLatLngToDivPixel(this.bounds_.getNorthEast()); // Zet noord-oostelijke cords om naar pix cords en voegt toe aan projectie object
            const div = this.div_; // Haalt div op uit de onAdd functie zodat je er makkelijk in kunt
            div.style.left = sw.x + "px";
            div.style.top = ne.y + "px";
            div.style.width = (ne.x - sw.x) + "px";
            div.style.height = (sw.y - ne.y) + "px";
        }
    }


    const imageBounds = new google.maps.LatLngBounds(
        new google.maps.LatLng(51.917230, 4.484111), // Zuidwestelijke punt
        new google.maps.LatLng(51.917483, 4.484945)  // Noordoostelijke punt
    );

    const customOverlay = new CustomOverlay(imageBounds, 'img/groundmapTestV3.png', map);



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