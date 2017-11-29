///1. SETUP AND BASEMAP

//1.1 SETUP BASEMAP
//SOME NOTES HERE
var map = L.map('map', {
  center: [-57.731, -24.317],
  zoom: 13.5
});

// var Style = 'dark';
var Style = 'light';

L.tileLayer('http://{s}.basemaps.cartocdn.com/'+ Style + '_all/{z}/{x}/{y}@2x.png', {
  maxZoom: 18,
  attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>, &copy; <a href="https://carto.com/attribution">CARTO</a>',
  subdomains: 'abcd'
}).addTo(map);
