'use strict';

(function () {
  angular
    .module('23AndMeProject')
    .factory('BestsellerService', BestsellerService);

  BestsellerService.$inject = [];

  function BestsellerService() {
    var service = {
      getBestSellers: getBestSellers
    };

    return service;

    function getBestSellers() {
      console.log('get the best sellers!!');
    }
  }
})();
