console.log('app.js loaded');

// http://stackoverflow.com/questions/25964700/how-can-i-use-a-deferred-object-to-retrieve-a-longitude-and-latitude-with-the-ht
var geoLocation = {
  getLocation: function() {
    var deferred = $.Deferred();
    // if geo location is supported
    if(navigator.geolocation) {
      // get current position and pass the results to getPostalCode or time out after 5 seconds if it fails
      navigator.geolocation.getCurrentPosition(deferred.resolve, this.geoLocationError, {
          timeout: 5000
      });
    } else {
      //geo location isn't supported
      console.log('Your browser does not support Geo Location.');
    }
    return deferred.promise();
  },
  geoLocationError: function() {
    console.log('Geo Location failed.');
  }
};
$.when(geoLocation.getLocation()).then(function(data){
  $('#hiddenLocation').val(data.coords.latitude + ',' + data.coords.longitude)
  console.log(data.coords.longitude, data.coords.latitude);
});

var $form = $('#searchForm')
var $searchList;
// var $searches = {
//   start: $('#startingLoc').val(),
//   end: $('#destination').val()
// }
function createSearchHTML(search) {
  return $('<ul id="Searches">Past Searches <li class="starting">Starting Point'+ $searches.start +'</li> <li class="endP">' + $searches.end '</li></ul>'

$form.on('submit', function(){

  var newSearch = {
  starting_point = $('#startingLoc').val(),
  destination =    $('#destination').val()

}

console.log(newSearch)
  $.ajax({
    method: 'POST',
    url: '/api/search',
    data: newSearch
  }).then(
    function(jsonSearch){

      $('#startingLoc').val('');
      $('destination').val('');

      return jsonSearch;
    },
    function(err){
      console.log('Failure: ', err)
    }
  ).then
})

$.ajax({
  method: 'GET',
  url: '/api/search'
}).then(
  function pastSearches(jsonSearches){
    jsonSearches.forEach(function(jsonSearch){
      var searchHTML = createSearchHTML(jsonSearch)
    })
  }
)
