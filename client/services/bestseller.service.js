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
      }).then(extractBestSellerData);
    }

    function extractBestSellerData(data) {
      return JSON.parse(data.data.data);
    }
  }
})();
