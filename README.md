# Web Mapping Essentials

Welcome to the Resources Library of GeoAdaptive!

This is the First GA Web Tutorial.

### Learning Objectives

1) To learn how to use Github, the open collaboration platform for application development;<br>
2) To learn the basics of javascript, HTML, and CSS;<br>
3) To learn how to set up a simple web-mapping application using an open server;

==========================================================================.
### Github and preparations
#### Step 1
Register your Github account <a href = https://github.com/>here.</a>
#### Step 2
Let me know your username, and I'll invite you to join our Github group!
#### Step 3
We can engage in projects and collaborate later on! <a href = https://guides.github.com/activities/hello-world/> How does Github work? </a>
#### Step 4
Download the Github Desktop <a href = https://desktop.github.com/>here.</a>

#### Step 5
Now download the free-to-use coding interface Atom <a href = https://atom.io/>here.</a>

extended reading
<a href = http://people.apache.org/~acmurthy/WhyIsProgrammingFun.html>What's the fun of programming?</a>

### Online Courses
<br>
Here are some good resources of online tutorial courses good to start with. Shouldn't take more than a day to complete for each.

<ul>
<li> HTML & CSS </li>
This is the framework for most of the websites nowadays, the front-end design language
<a href = https://www.codecademy.com/en/tracks/web> here </a>
<li> javascript </li>
This is one of the most popular tools to link back-end operations with front-end reactions, the instrument of web-apps
<a href = https://www.codecademy.com/learn/introduction-to-javascript> here </a>
</ul>
In total, these courses shouldn't take more than three full days to complete. But now, just go to the example below and I'll walk you through an example.


### Putting up a Web-map

#### Social-economic Profile of Paraguay Departments
This is a step-by-step walking through example for, starting with a GIS shapefile, to a simple online webmap-application
The map application you are going to build looks like <a href = https://rawgit.com/GeoAdaptive/Resources_library/master/Example_Paraguay/index.html>this. </a>

#### Step 0
Convert your shapefile from shp to the geoJSON format. You should be able to do this is ArcMap with the JSON conversion tool. By the end, you should get something like <a href = https://github.com/GeoAdaptive/Resources_library/blob/master/Example_Paraguay/data/Paraguay_Department.json>this.</a>


#### Step 1
First, fork this Resources_library repository to your own Github repo. Check to make sure you have the css, js, data folders and the index.html file. Let me know if you have problems.

#### Step 2
Then open your Atom interface

#### Step 3
Open the HTML(the index.html), CSS(the css file in the css folder) files

##### HTML:
<br> Here looks at the file, these part of the code sets up a web page using HTML

```HTML
<!DOCTYPE html>
<html>
  <!--here is where your web page starts to load-->
  <body>
  </body>
</html>
```
Now within the \<body>\ tags, you can start build it.
First you would want to set up some preparations, such as the links calling to use the default style controllers

```
    <!--here add some links to use the default styles-->
    <link rel="stylesheet" href="css/reset.css">
    <link rel="stylesheet" href="css/bootstrap.css"/>
    <link rel="stylesheet" href="css/style.css">
```
Then you can embed the link to request the use of leaflet, the open-source mapping library
```
<!-- This request the usage of the leaflet library, which is a populat web-mapping library for open-source projects
    Make sure you put this AFTER Leaflet's CSS -->
    <link rel="stylesheet" href="https://unpkg.com/leaflet@1.2.0/dist/leaflet.css"
      integrity="sha512-M2wvCLH6DSRazYeZRIm1JnYyh22purTM+FDB5CsyxtQJYeKq83arPe5wgbNmcFXGqiSH2XR8dT/fJISVA1r/zQ=="
      crossorigin=""/>
    <!--Make sure you put this AFTER Leaflet's CSS -->
    <script src="https://unpkg.com/leaflet@1.2.0/dist/leaflet.js"
      integrity="sha512-lInM/apFSqyy1o6s89K4iQUKg6ppXEgsVxT35HbzUupEVRh2Eu9Wdl4tHj7dZO0s1uvplcYGmt3498TtHq+log=="
      crossorigin=""></script>
```
Also the jQuery document for downloading and cleaning your converted geojson file

```
<!--And add this jquery documentation for downloading and parsing data-->
    <script
      src="https://code.jquery.com/jquery-2.2.4.min.js"
      integrity="sha256-BbhdlvQf/xTY9gja0Dq3HiwQF8LaCRTXxZKRutelT44="
      crossorigin="anonymous"></script>

```
Here the web content starts. First we set up the map by creating a HTML \<div>\ element for the map. We design it as full screen wide (100%) and takes 84% of the height of the screen.
```
<!--The mapping portal here starts from the top edge of your screen, takes the full width 100%, the height 84%-->
    <div id="map" style="top:0; width:100%; height:84%; z-index:20;"></div>
    <!--We can add the title of your webmap here-->
```
Now use this second \<div>\ to name your web application

```
    <div>
      <h2 id = "title"> Change your title here</h2>
    </div>
    <!--usually put the request for javascript files here, it controls the operations of the application-->
```
Don't forget to call for the javascript file that controls the back-end operation of the web application
```
  <script src="js/js.js"></script>
```
<br>
Now, the HTML file is set up. Let's look at the CSS file.

``CSS
/*This '#' calls the id of the HTML element you wanna control style for*/
#title {
  position:relative;
  left:2%;
  top:3%;
  font-size:24px;
  font-family:Roboto;
}
```


### Step 4
Now open the js.js in the js folder

``Javascript
///This is a 3-STEP process
/// 1. Setting up the Basemap
// here this function sets up the name (to match the id of the map div element in the HTML), the center with coordinates(latitude, longitude), and the zoom level(larger level, more zoom-in) for the map.
var map = L.map('map', {
  center: [-23.817, -55.731],
  zoom: 6.5
});

// here we set up the basemap style
// we can also set it as var Style = 'dark';
// other styles are also available to choose from
// here maybe: http://leaflet-extras.github.io/leaflet-providers/preview/
var Style = 'light';

// this code constructs the map object
L.tileLayer('http://{s}.basemaps.cartocdn.com/'+ Style + '_all/{z}/{x}/{y}@2x.png', {
  maxZoom: 18,
  attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>, &copy; <a href="https://carto.com/attribution">CARTO</a>',
  subdomains: 'abcd'
}).addTo(map);


///2. Adding the markers
// now add the marker here, with a popup text explaining the marker
L.marker([-25.262, -57.581]).addTo(map)
    .bindPopup('Asuncion, Paraguay')
    .addTo(map);

///3. Adding the layer data to be mapped
// calling the data to be mapped, that is in this case, stored within the Github repo data folder
var Paraguay_Department = "https://raw.githubusercontent.com/GeoAdaptive/Resources_library/master/Example_Paraguay/data/Paraguay_Department.json?token=AgSQK7cMaK3qDRhxjeQ47_XUpK3jfPppks5aKXmowA%3D%3D";

//use this function to download and create mappable objects
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

```


#### Step 4

Source code are here:
<a href= https://github.com/GeoAdaptive/Resources_library/blob/master/Example_Paraguay/index.html>HTML</a>
<a href= https://github.com/GeoAdaptive/Resources_library/blob/master/Example_Paraguay/css/style.css >CSS</a>
<a href= https://github.com/GeoAdaptive/Resources_library/blob/master/Example_Paraguay/js/js.js>JS</a>

Now, make some changes to adjust the website to your preference.

Bravo! Good job! You've known how to set-up the web-map from desktop GIS files!

Cheers,

<br>
<br>
###Tutorial 02

```
//4. Tutorial 02: Details of mapping Points, Lines and Polygons
//4.1 Mapping Multiple Points
var PointsUrl = "https://raw.githubusercontent.com/GeoAdaptive/Tutorial_02/master/data/INFR_middleschool_Paraguay.geojson";
$(document).ready(function(){
  //this ajax() function does the download, or obtain data from the API.
  $.ajax(PointsUrl).done(function(data){
    //data needs to be parsed or cleaned for use.
    var parsedData = JSON.parse(data);
    //create geojson objects using the parsed or cleaned data.
    var MappedObjects = L.geoJSON(parsedData,
      {
        //define the style of the objects.
        style: {opacity:1,radius:1,width:0.5,color:'#85C1E9'},
        //this function runs through all the features in the parsed dataset and create circle markers.
        pointToLayer: function (feature, latlng) {
        return new L.circleMarker(latlng, {
        });
      },
    //append the text to the marker.
    }).bindPopup('I\'m a point!')
    //add the mapped objects to the map.
    .addTo(map);
  });
});

//4.2 Mapping Lines
var LinesUrl = "https://raw.githubusercontent.com/GeoAdaptive/Tutorial_02/master/data/primaryroads.geojson";
$(document).ready(function(){
  $.ajax(LinesUrl).done(function(data){
    var parsedData = JSON.parse(data);
    var MappedObjects = L.geoJSON(parsedData,
      {
        style: {opacity:1,width:0.5,color:'#D35400'},
        pointToLayer: function (feature, latlng) {
        return new L.Polyline(latlng, {
        });
      },
    }).bindPopup('I\'m a polyline!')
    .addTo(map);
  });
});

//4.3 Mapping Polygons
var PolygonsUrl = "https://raw.githubusercontent.com/GeoAdaptive/Tutorial_02/master/data/ADM_PRY_DEP.geojson";
$(document).ready(function(){
  $.ajax(PolygonsUrl).done(function(data){
    var parsedData = JSON.parse(data);
    var MappedObjects = L.geoJSON(parsedData,
      {
        style: {opacity:1,width:0.5,color:'#F9E79F'},
        pointToLayer: function (feature, latlng) {
        return new L.Polygon(latlng, {
        });
      },
    }).bindPopup('I\'m a polygon!')
    .addTo(map);
  });
});
```
