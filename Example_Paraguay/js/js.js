///1. Setting up the Basemap

//SOME NOTES HERE
var map = L.map('map', {
  center: [-23.817, -55.731],
  zoom: 6.5
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
var Paraguay_Department = "https://raw.githubusercontent.com/GeoAdaptive/Resources_library/master/Example_Paraguay/data/Paraguay_Department.json?token=AgSQK7cMaK3qDRhxjeQ47_XUpK3jfPppks5aKXmowA%3D%3D";

//downloading and creating mappable objects
$(document).ready(function(){
  $.ajax(Paraguay_Department).done(function(data){
    var parsedData = JSON.parse(data);
    var LayerMappedPolygon = L.geoJSON(parsedData,
      {
        style: {opacity:1,width:0.5,color:'#85C1E9'},
        pointToLayer: function (feature, latlng) {
        return new L.Polygon(latlng, {
        });
      },
    }).bindPopup('I\'m in Paraguay!')
    .addTo(map);
  })
})
