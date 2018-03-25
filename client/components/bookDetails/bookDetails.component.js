(function () {
  'use strict';

  var bookDetailsComponent = {
    templateUrl: 'components/bookDetails/bookDetails.template.html',
    controller: BookDetailsController,
    bindings: {
      book: '<'
    },
    controllerAs: 'vm'
  };

  angular
    .module('23AndMeProject')
    .component('bookDetailsComponent', bookDetailsComponent);

  BookDetailsController.$inject = [];

  function BookDetailsController() {
    var vm = this;
  }
})();
