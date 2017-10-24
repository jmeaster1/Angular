angular.module('appModule').factory('todoService', function() {
	var service = {};

	// private
	var todos = [ {
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

	var generateId = function() {
		return todos[todos.length - 1].id + 1;
	}

	// public
	service.index = function() {
		return todos;
	};

	service.create = function(todo) {

		var newObj = {

			id : generateId(),
			task : todo.task,
			description : '',
			completed : false

		};

		todos.push(newObj);
	};

	service.update = function(todo) {
		vm.todos.forEach(function(val, idx, arr) {
			if (val.id === todo.id) {
				val.task = todo.task;
				val.description = todo.description;
				val.completed = todo.completed;
			}
		})

		vm.editTodo = null;
		vm.displayTable();
	};

	service.destroy = function(id) {
		for (var i = 0; i < todos.length; i++) {
			if (id === todos[i].id) {
				todos.splice(i, 1);
			} else {
				console.log(id)
			}
		}
	};

	return service;
})
