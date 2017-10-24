angular.module('appModule').component('todoList', {
	templateUrl : 'app/appModule/todoList.component.html',

	controller : function(todoService) {
		// 1
		var vm = this;

		vm.selected = null;

		vm.todos = [];
		vm.todos = todoService.index();

		vm.addTodo = function(todo) {
			todoService.create(todo);
			vm.todos = todoService.index();
		};

		vm.getNumTodos = function() {
			return vm.todos.length;
		};

		vm.displayTable = function() {
			vm.selected = null;
		};

		vm.setEditTodo = function() {
			vm.editTodo = angular.copy(vm.selected);
		};

		vm.updateTodo = function(todo) {
			console.log(todo)
			todoService.update(todo);
			vm.todos = todoService.index();
			vm.editTodo = null;
			vm.displayTable();
		};

		vm.addTodo = function(todo) {
			var copy = angular.copy(todo);
			todoService.create(copy);
		}

		vm.deleteTodo = function(id) {
			console.log('clicked')
			todoService.destroy(id);
			vm.todos = todoService.index();
		};

		vm.displayTodo = function(todo) {
			vm.selected = todo;
			console.log("displayed" + todo)
		}

	},
	// 3
	controllerAs : 'vm'

})