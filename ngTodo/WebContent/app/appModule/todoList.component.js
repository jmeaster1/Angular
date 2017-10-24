angular.module('appModule').component('todoList', {
	templateUrl : 'app/appModule/todoList.component.html',

	controller : function() {
		// 1
		var vm = this;
		
		vm.selected = null;

		vm.todos = [ {
			id : 1,
			task : 'Go round mums',
			description : '',
			completed : false
		}, {
			id : 2,
			task : 'Get Liz back',
			description : '',
			completed : false
		}, {
			id : 3,
			task : 'Sort life out',
			description : '',
			completed : false
		} ];

		vm.getNumTodos = function() {
			return vm.todos.length;
		}

		vm.displayTable = function() {
			vm.selected = null;
		};

		vm.setEditTodo = function() {
			vm.editTodo = angular.copy(vm.selected);
		};

		vm.updateTodo = function(todo) {
			console.log(todo)
			vm.todos[todo.id - 1] = todo;
			vm.editTodo = null;
			vm.displayTable();
		};

		vm.addTodo = function(todo) {
			var copy = angular.copy(todo);
			var newObj = {

				id : generateId(),
				task : copy.task,
				description : '',
				completed : false

			};

			vm.todos.push(newObj);

		}

		var generateId = function() {
			return vm.todos[vm.todos.length - 1].id + 1;
		}

		
		vm.displayTodo = function(todo) {
			vm.selected = todo;
			console.log("displayed" + todo)
		}

	},
	// 3
	controllerAs : 'vm'

})