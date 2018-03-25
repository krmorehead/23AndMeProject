(function(){
	angular.module('blankApp',[])
	.controller('helloWorldController', helloWorldController) 

	function helloWorldController ($scope) {
		var vm = this
		vm.displayMessage = 'Hello World'
    vm.messages = [];
    vm.runFunction = runFunction;
    vm.saveMessage = saveMessage;


    function runFunction() {
      console.log('hi')
    }

    function saveMessage() {
      vm.messages.unshift(vm.message);
      vm.message = '';
    }
	}
})()