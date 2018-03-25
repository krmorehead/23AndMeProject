'use strict';

(function () {
  angular
    .module('23AndMeProject')
    .factory('BestsellerService', BestsellerService);

  BestsellerService.$inject = ['$http'];

  function BestsellerService($http) {
    var service = {
      getBestSellers: getBestSellers
    };

    return service;

    function getBestSellers() {
      return $http({
        method: 'GET',
        url: '/bestSellers',
      }).then(function (data) {
        console.log(data);
      });
    }
  }
})();
