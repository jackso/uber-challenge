'use strict';

window.SearchControl = function(controlDiv) {
  var movieClicked = function(item) {
    window.map.clearMarkers();
    window.map.setOptions({ streetViewControl: false, zoomControl: true });
    document.getElementById('films_results').innerHTML = '';
    document.getElementById('q').value = item.title;
    window.showMovieDetail(item);
  };

  var searchInput = document.createElement('input');
  searchInput.type = 'search';
  searchInput.name = 'q';
  searchInput.id = 'q';
  searchInput.placeholder = 'Enter film title...';
  controlDiv.appendChild(searchInput);

  jQuery(searchInput).autocomplete({
    
    source: function( request, response ) {
      $.ajax( {
        url: 'https://data.sfgov.org/resource/wwmu-gmzc.json',
        dataType: 'json',
        data: {
          title: request.term
        },
        beforeSend: function () {},
        success: function( data ) {
          response( data );
        }
      } );
    },
    select: function (event, ui) {
        event.preventDefault();
        this.value = ui.item.title;
        $(this).next().val(ui.item.title);
        movieClicked(ui.item);
    }
  }).data( 'ui-autocomplete' )._renderItem = function( ul, item ) {
    return $( '<li></li>' )
      .data( 'item.autocomplete', item )
      .append( '<a>' + item.title + ' {' + item.locations + '}</a>' )
      .appendTo( ul );
  };
  
  var resultsData = document.createElement('div');
  resultsData.id = 'films_results';
  controlDiv.appendChild(resultsData);
};