(function(){
	angular.module('23AndMeProject',[])
	 .controller('BestSellerController', BestSellerController) 

  BestSellerController.$inject = ['$scope', 'BestsellerService'];

	function BestSellerController ($scope, BestsellerService) {
		var vm = this;
    vm.selectList = selectList;

    function initialize() {
      vm.loaded = false;
      BestsellerService.getBestSellers()
        .then(function (bestSellerData) {
          vm.bestSellerData = bestSellerData;
          buildGenres(bestSellerData);
          selectList(0);
          vm.loaded = true;
        });
    }

    function buildGenres(bestSellerData) {
      vm.genres = _.map(bestSellerData.lists, function (list, index) {
        return {
          display_name: list.display_name,
          index: index
        }
      })
    }

    function selectList(index) {
      debugger;
      vm.selectedList = vm.bestSellerData.lists[index];
    }

    initialize();
	}
})()