console.log('We in this bitch');



$(document).ready(function(){
  getSearches();
  // console.log(search)
  $.ajax({
    url: 'http://localhost:3000/api/search',
    method: 'get', // GET by default
    dataType: 'json' // Intelligent Guess by default (xml, json, script, or html)
  }).done(function(data){
    console.log(data);
  });
})



function getSearches(){
  var searches = $.get('/api/search')
    .done(function(data){
      $.each(data, function(index, search){
        $('tbody#start').prepend('<tr><td>' + search.starting_point + '</td>' + '<td>' + search.destination + '</td></tr>');
        console.log(searches)
        // addSearch(search)
      })
    })
}

// function addSearch(search){
//   var searches = $.get('/api/search')
//   for (var i=0; i < searches.length; i++)
//   $('tr#start').append('<tr><td>' + search.starting_point[i] + '</td>')
//   $('tr#end').append('<td>' + search.destination[i] + '</td></tr>');
// }
