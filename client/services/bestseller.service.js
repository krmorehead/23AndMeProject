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

    /**
      Description:
        Does a request to the backend for the best sellers data.

      Returns {Promise} A promise that resolves with the extracted Best Seller data.
    */
    function getBestSellers() {
      return $http({
        method: 'GET',
        url: '/bestSellers',
      })
      .then(extractBestSellerData)
      .catch(console.error);
    }

    /**
      Description:
        Extracts the Best Seller Data returned from the backend

      Param {Object} The raw response from the bestSeller api

      Returns {Object} The best seller data parsed and extracted
    */
    function extractBestSellerData(data) {
      return JSON.parse(data.data.data).results;
    }
  }
})();
