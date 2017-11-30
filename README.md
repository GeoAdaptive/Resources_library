# Readme

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

### Web Mapping Fundamentals
<br>
Here are some good resources of online tutorial courses good to start with.

<ul>
<li> HTML & CSS </li> 
This is the framework for most of the websites nowadays, the front-end design language 
<a href = https://www.codecademy.com/en/tracks/web> here </a>
<li> javascript </li>
This is one of the most popular tools to link back-end operations with front-end reactions, the instrument of web-apps
<a href = https://www.codecademy.com/learn/introduction-to-javascript> here </a>
</ul>
In total, these courses shouldn't take more than three full days to complete

### Putting up a Web-map

#### Social-economic Profile of Paraguay Departments
This is a step-by-step walking through example for, starting with a GIS shapefile, to a simple online webmap-application
The map application you are going to build looks like <a href = >this. </a> 

#### Step 1
First, fork this Resources_library repository to your own Github repo.

#### Step 2
Then open your Atom interface

#### Step 3
Open the HTML, CSS files
```HTML
<!DOCTYPE html>
<html>
  <!--here is where your web page starts to load-->
  <body>
    <!--here add some links to use the default styles-->
    <link rel="stylesheet" href="css/reset.css">
    <link rel="stylesheet" href="css/bootstrap.css"/>
    <link rel="stylesheet" href="css/style.css">
    <!-- This request the usage of the leaflet library, which is a populat web-mapping library for open-source projects
    Make sure you put this AFTER Leaflet's CSS -->
    <link rel="stylesheet" href="https://unpkg.com/leaflet@1.2.0/dist/leaflet.css"
      integrity="sha512-M2wvCLH6DSRazYeZRIm1JnYyh22purTM+FDB5CsyxtQJYeKq83arPe5wgbNmcFXGqiSH2XR8dT/fJISVA1r/zQ=="
      crossorigin=""/>
    <!--Make sure you put this AFTER Leaflet's CSS -->
    <script src="https://unpkg.com/leaflet@1.2.0/dist/leaflet.js"
      integrity="sha512-lInM/apFSqyy1o6s89K4iQUKg6ppXEgsVxT35HbzUupEVRh2Eu9Wdl4tHj7dZO0s1uvplcYGmt3498TtHq+log=="
      crossorigin=""></script>
    <!--And add this jquery documentation for downloading and parsing data-->
    <script
      src="https://code.jquery.com/jquery-2.2.4.min.js"
      integrity="sha256-BbhdlvQf/xTY9gja0Dq3HiwQF8LaCRTXxZKRutelT44="
      crossorigin="anonymous"></script>
    <!--Below starts the content of the webpage-->
    <!--The mapping portal here starts from the top edge of your screen, takes the full width 100%, the height 84%-->
    <div id="map" style="top:0; width:100%; height:84%; z-index:20;"></div>
    <!--We can add the title of your webmap here-->
    <div>
      <h2 id = "title"> Change your title here</h2>
    </div>
    <!--usually put the request for javascript files here, it controls the operations of the application-->
    <script src="js/js.js"></script>
  </body>
  <!--the application ends-->
</html>

```


### Step 4
Now open the index.html
```Javascript
// add basemap.
L.tileLayer.provider('Stamen.Watercolor').addTo(map);
```


#### Step 4

Source code are here:

Now, make some changes to adjust the website to your preference.

Bravo! Good job! You've known how to set-up the web-map from desktop GIS files!

Cheers,

