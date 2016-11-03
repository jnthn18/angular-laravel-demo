(function() {
  'use strict';

  angular
    .module('app')
    .factory('multiplySv', multiplyService);

  function multiplyService($http, $q) {

    var service = {
      multiply: multiply
    }

    return service;
    /////////////////

    function multiply(numbers) {
      var q = $q.defer();

      $http.post("/multiply", numbers).then(function(resp) {
        q.resolve(resp.data);
      });

      return q.promise;
    }
  }
})();