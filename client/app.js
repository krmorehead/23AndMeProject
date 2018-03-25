(function(){
	angular.module('23AndMeProject',[])
	 .controller('BestSellerController', BestSellerController) 

  BestSellerController.$inject = ['$scope', 'BestsellerService'];

	function BestSellerController ($scope, BestsellerService) {
		var vm = this

    function initialize() {
      BestsellerService.getBestSellers()
        .then(function (bestSellerData) {
          vm.bestSellerData = bestSellerData;
          selectList(0);
        });
    }

    function selectList(index) {
      vm.selectedList = vm.bestSellerData.lists[index];
    }

    initialize();
	}
})()