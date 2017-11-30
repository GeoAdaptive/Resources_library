///1. Setting up the Basemap

//SOME NOTES HERE
var map = L.map('map', {
  center: [-23.817, -55.731],
  zoom: 7
});

// other styles are also available to choose from
// see here:
// also here maybe: http://leaflet-extras.github.io/leaflet-providers/preview/
// var Style = 'dark';
var Style = 'light';

L.tileLayer('http://{s}.basemaps.cartocdn.com/'+ Style + '_all/{z}/{x}/{y}@2x.png', {
  maxZoom: 18,
  attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>, &copy; <a href="https://carto.com/attribution">CARTO</a>',
  subdomains: 'abcd'
}).addTo(map);

///2. Adding the markers
L.marker([-25.262, -57.581]).addTo(map)
    .bindPopup('Asuncion, Paraguay')
    .addTo(map);

///3. Adding the layer data to be mapped
var SouthAmerica = "https://raw.githubusercontent.com/GeoAdaptive/DevelopmentExplorer/master/data/south_america.geojson?token=AgSQK168yLFAxeD_eP-ve8dYgTBzWOGyks5aKWBKwA%3D%3D";

$(document).ready(function(){
  $.ajax(SouthAmerica).done(function(data){
    var parsedData = JSON.parse(data);
    var LayerMappedPolygon = L.geoJSON(parsedData,
      {
        style: {opacity:1,width:0.5,color:'#E0903F'},
        pointToLayer: function (feature, latlng) {
        return new L.Polygon(latlng, {
        });
      },
    }).addTo(map);
  })
})
