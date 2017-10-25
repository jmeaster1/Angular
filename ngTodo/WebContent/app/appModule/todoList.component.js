angular.module('appModule').component('todoList', {
	templateUrl : 'app/appModule/todoList.component.html',

	controller : function(todoService) {
		// 1
		var vm = this;
		
		vm.todos = [];
		vm.selected = null;
		
		vm.displayTable = function() {
			vm.selected = null; 
		 };
		 
		 vm.displayTodo = function(thing) {
			 vm.selected = thing;
		 };
		 
		 vm.getNumTodos = function() {
				return vm.todos.length;
			};
		
		vm.setEditTodo = function() {
			 vm.editTodo = angular.copy(vm.selected);
		 };
		 
		 vm.addTask = function(todo) {
				todoService.create(1,todo).then(
						function(result) {
							vm.reload();
						})
			 };
			 
		 vm.deleteTodo = function(id) {
			 var sure =	confirm('Are you sure?')
			 	if (sure == true) {
	    	  		todoService.destroy(1,id)
		 		    .then(function(result) {
		 		    		vm.reload();
		 		    });
	    	  	} 
			else {
	    	  	    console.log('user canceled');
	    	  	}
		 };

		 vm.updateTodo = function(todo, change) {
				todoService.update(1,todo.id,todo).then(function(result) {
					
						vm.selected = result.data;
					vm.reload();
				})
				vm.editTodo = null;
			 };
			 

			 vm.reload = function() {
				todoService.index().then(function(result) {
					vm.todos = result.data;
				}); 
				
			 };
			 
			 vm.reload();
			 
		 	},
		 	
		 	controllerAs : "vm"
	  });
			
