(function () {
  'use strict';

  var bookEntryComponent = {
    templateUrl: 'components/bookEntry/bookEntry.template.html',
    controller: BookEntryController,
    bindings: {
      book: '<'
    },
    controllerAs: 'vm'
  };

  angular
    .module('23AndMeProject')
    .component('bookEntryComponent', bookEntryComponent);

  BookEntryController.$inject = [];

  function BookEntryController() {
    var vm = this;

    function initialize() {
      console.log(vm);
    }

    initialize();
  }
})();
