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

//access the api - for the saved searches page
$.ajax({
  method: 'GET',
  url: '/api/search'

})
