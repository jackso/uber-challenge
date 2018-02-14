'use strict';

var templates = {};

templates.mapCanvas = function mapCanvasTemplate() {
  return document.getElementById('map-canvas');
};

templates.home = function homeTemplate() {
  var htmltemplates = [];
  htmltemplates.push('<h2>Movie Detail</h2>');
  htmltemplates.push('<div>Search movie locations in San Fransisco.'); 
  htmltemplates.push('</div>');
  return htmltemplates.join('');
};

templates.loading = function loadingTemplate(response) {
  var htmltemplates = [];
  htmltemplates.push('<h2>');
  htmltemplates.push(response);
  htmltemplates.push('</h2><br><em>Loading location</em>');
  return htmltemplates.join('');
};

templates.movie = function movieTemplate(detail) {
  var htmltemplates = [];
  htmltemplates.push('<div class="movie_detail">');
  htmltemplates.push('<h2>Movie Name : '); 
  htmltemplates.push(detail.title);
  htmltemplates.push('</h2>');
  htmltemplates.push('<b> Release Year :  </b>', detail.release_year);
  htmltemplates.push('<br><br>');
  htmltemplates.push('<b> Director:  </b>');
  htmltemplates.push('<em>');
  htmltemplates.push(detail.director);
  htmltemplates.push('</em><br><br>');
  htmltemplates.push('<b>Cast: </b>');
  htmltemplates.push(detail.actor_1);
  htmltemplates.push(', ');
  htmltemplates.push(detail.actor_2);
  htmltemplates.push(', ');
  htmltemplates.push(detail.actor_3);
  htmltemplates.push('<br><br>');
  htmltemplates.push('<b>Writer: </b>');
  htmltemplates.push(detail.writer);
  htmltemplates.push('<br><br></div>');
  return htmltemplates.join('');
};

templates.location = function locationTemplate(location) {
  var htmltemplates = [];
  htmltemplates.push('<h2>');
  htmltemplates.push(location.location);
  htmltemplates.push('</h2>');
  htmltemplates.push('<img src="https://maps.googleapis.com/maps/api/streetview?size=120x120&location='); // jshint ignore:line
  htmltemplates.push(location.lat());
  htmltemplates.push(',');
  htmltemplates.push(location.lng());
  htmltemplates.push('" align="right">');
  return htmltemplates.join('');
};
