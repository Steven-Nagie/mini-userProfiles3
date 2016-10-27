angular.module('userProfiles').service('mainService', function($http, $q) {

  this.getUsers = function() {
    var deferred = $q.defer();
    $http({
        method: 'GET',
        url: 'http://reqres.in/api/users?page=1'
    }).then(function(response) {
      // This line parses our data out, so that when we resolve our deferred object we can do so with easy to read data. This cleans up our code in the controller.
      var parsedResponse = response.data.data;
      for (var i = 0; i < parsedResponse.length; i++) {
        parsedResponse[i].first_name = "Ralf";
      }
      deferred.resolve(parsedResponse);
    });
    return deferred.promise;
  };

});
