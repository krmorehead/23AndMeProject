(function () {
  'use strict';

  var sideBarComponent = {
    templateUrl: 'components/sideBar/sideBar.template.html',
    controller: SideBarController,
    bindings: {
      selectedList: '<',
      genres: '<',
      selectList: '<',
      selectBook: '<'
    },
    controllerAs: 'vm'
  };

  angular
    .module('23AndMeProject')
    .component('sideBarComponent', sideBarComponent);

  SideBarController.$inject = [];

  function SideBarController() {
    var vm = this;

    vm.$onInit = function () {
      vm.selectedGenre = JSON.stringify(vm.genres[0])
    }

    vm.selectGenre = function() {
      var selectedGenre = JSON.parse(vm.selectedGenre);
      vm.selectList(selectedGenre.index);
    }
  }
})();
