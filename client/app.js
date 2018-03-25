(function(){
	angular.module('23AndMeProject',[])
	.controller('BestSellerController', BestSellerController) 

  BestSellerController.$inject = ['$scope', 'BestsellerService'];

	function BestSellerController ($scope, BestsellerService) {
		var vm = this
		vm.displayMessage = 'Hello World'

    function initialize() {
      BestsellerService.getBestSellers();
    }
    initialize();
	}
})()