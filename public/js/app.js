(function() {
  'use strict';

  angular
    .module('app', ['ui.router'])
    .config(config);

    function config($stateProvider, $urlRouterProvider) {

      $urlRouterProvider.otherwise("/");

      $stateProvider
        .state('root', {
          url: '/',
          templateUrl: 'views/root.html',
          controller: 'root',
          controllerAs: 'vm'
        });
    }

})();