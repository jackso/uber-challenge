'use strict';

var plotLocations = function(item) {

  var xhr = new XMLHttpRequest();
  xhr.onload = function() {
    var response = this.response;
    for (var i = 0; i < response.length; i++) {
      var address = response[i].locations + ', San Francisco, CA 94111, USA';
      var google = window.google;
      var geocoder = new google.maps.Geocoder();
      var locationData = '';

      geocoder.geocode( {address:address}, function(results, status) 
      {
        if (status === google.maps.GeocoderStatus.OK) 
        {
          locationData = results[0].geometry.location;
          window.map.plotLocation(
            locationData.lat(), 
            locationData.lng(), 
            window.showLocation(response, locationData));
        } else {
          window.alert('Geocode for the following reason: ' + status);
       }
      });
    }
  };

  xhr.open('GET', 'https://data.sfgov.org/resource/wwmu-gmzc.json?title=' + 
    encodeURIComponent(item.title) + 
    '&director=' + 
    encodeURIComponent(item.director));
  xhr.responseType = 'json';
  xhr.send();
};

var displayLoadingPanel = function(response) {
  var locationDiv = document.getElementById('location_detail');
  if (locationDiv) {
    locationDiv.style.display = 'none';
  }

  var dashboard = document.getElementById('dashboard');
  if (dashboard) {
    dashboard.style.display = 'none';
  }
  
  var controlText;

  if (!document.getElementById('film_detail')) {

    controlText = document.createElement('div');
    controlText.id = 'film_detail';
    controlText.className = 'film_detail';
    controlText.innerHTML = window.templates.loading(response);

    document.getElementById('bottom_panel').appendChild(controlText);

  } else {

    controlText = document.getElementById('film_detail');
    controlText.innerHTML = window.templates.loading(response);
    controlText.style.display = '';

  }
};

var getMoveDetail = function(title, director) {
  var xhr = new XMLHttpRequest();
  xhr.onload = function() {
    var detail = this.response[0];
    var template = window.templates.movie(detail);
    document.getElementById('film_detail').innerHTML = template;
  };
  xhr.open('GET', 'https://data.sfgov.org/resource/wwmu-gmzc.json?title=' + 
    encodeURIComponent(title) + 
    '&director=' + 
    encodeURIComponent(director));
  xhr.responseType = 'json';
  xhr.send();
};

window.showMovieDetail = function(item, map) {
  displayLoadingPanel(item.title);
  getMoveDetail(item.title, item.director);
  plotLocations(item, map);
};