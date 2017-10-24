angular.module('appModule')
  .component('productList', {
	  templateUrl : 'app/appModule/productList/productList.component.html',
	  controller : function(productService) {
		    // 1
		    var vm = this;

		    // 2
		    vm.list = [];
		    vm.list = productService.index();
		    
		    vm.addProduct = function(prod) {
		        productService.create(prod);
		        vm.products = productService.index();
		      };
		    
		    vm.getNumItemsInProductList = function() {
		        return vm.list.length;
		      }
		    
		    vm.log = function(message) {
		        console.log(message);
		      }
		    vm.addToList = function(prod){
		    	var copy = angular.copy(prod)
		    	console.log(prod);
		    	console.log(copy);
		    	vm.list.push(copy);
		    }

		  },
		  // 3
		  controllerAs: 'vm'
		})