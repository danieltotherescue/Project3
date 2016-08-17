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
        addSearch(search)
      })
    })
}

function addSearch(search){
  $('tr#start').prepend('<tr>' + search.starting_point + '</tr>')
}
