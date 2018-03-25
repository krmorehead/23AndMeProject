(function () {
  'use strict';

  var sideBarComponent = {
    templateUrl: 'components/sideBar/sideBar.template.html',
    controller: SideBarController,
    bindings: {},
    controllerAs: 'vm'
  };

  angular
    .module('23AndMeProject')
    .component('sideBarComponent', sideBarComponent);

  SideBarController.$inject = [];

  function SideBarController() {
    var vm = this;
    vm.message = 'Hello World'

    function initialize() {}

    initialize();
  }
})();
