console.log('We in this bitch');

<<<<<<< HEAD
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
=======


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
>>>>>>> 285f04b8938c48517d0082583b7b16d21ccce196
})



function getSearches(){
<<<<<<< HEAD
  var searches = $.get('/api/search')
    .done(function(data){
      $.each(data, function(index, search){
        console.log(searches)
        addSearch(search)
      })
    })
}

function addSearch(search){
  $('ul#searchlist').prepend('<li><STRONG>Starting Point: </STRONG>' + search.starting_point + ' ' + '<STRONG>Destination: </STRONG>'+ search.destination +'</li>')
=======
  var searches = $.get('/api/search')
    .done(function(data){
      $.each(data, function(index, search){
        console.log(searches)
        addSearch(search)
      })
    })
}

function addSearch(search){
  $('ul#searchlist').prepend('<li><STRONG>Starting Point: </STRONG>' + search.starting_point + ' ' + '<STRONG>Destination: </STRONG>'+ search.destination +'</li>')
>>>>>>> 285f04b8938c48517d0082583b7b16d21ccce196
}
