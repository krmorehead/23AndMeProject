(function(){
	angular.module('23AndMeProject',[])
	 .controller('BestSellerController', BestSellerController) 

  BestSellerController.$inject = ['$scope', 'BestsellerService'];

	function BestSellerController ($scope, BestsellerService) {
		var vm = this;
    vm.selectList = selectList;
    vm.selectBook = selectBook;

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

    /**
      Description;
        Reformats the genres into a way that can be consumed by child components.

      Param {Object} bestSellerData - The best seller data from the service layer

      Returns {Array} An array of objecs with name and index properties.
    */
    function buildGenres(bestSellerData) {
      vm.genres = _.map(bestSellerData.lists, function (list, index) {
        return {
          display_name: list.display_name,
          index: index
        }
      })
    }

    /**
      Description;
        Changes the currently selected list to the passed in index.
        Also resets the selected book to the first one in the new list.

      Param {Number} Index - the index of the list being slected
    */
    function selectList(index) {
      vm.selectedList = vm.bestSellerData.lists[index];
      vm.selectBook(0)
    }

    /**
      Description;
        Changes the currently selected book to the passed in index.

      Param {Number} Index - the index of the book being slected
    */
    function selectBook(bookIndex) {
      vm.selectedBook = vm.selectedList.books[bookIndex]
    }

    initialize();
	}
})()