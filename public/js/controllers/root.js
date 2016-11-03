(function() {
  'use strict';

  angular
    .module('app')
    .controller('root', Controller);

  function Controller($http, multiplySv) {
    var vm = this;

    vm.num1 = null;
    vm.num2 = null;
    vm.answer = null;

    vm.multiplyNum = multiplyNum;

    function multiplyNum() {
      var data = {
        num1: vm.num1,
        num2: vm.num2
      }
      multiplySv.multiply(data).then(function(resp) {
        vm.answer = resp;
      });
    }

  }

})();