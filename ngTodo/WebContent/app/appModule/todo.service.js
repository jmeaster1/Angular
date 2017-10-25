	angular.module('appModule')
	.factory('todoService', function($http) {
	  var service = {};

	  var BASE_URL = 'rest/users';

	  service.index = function(uid) {
		  uid = 1;
	    return $http({
	      method : 'GET',
	      url : `${BASE_URL}/${uid}/todo`
	    })
	  };

	  service.show = function(uid, tid) {
		  uid = 1;
	    return $http({
	      method : 'GET',
	      url : `${BASE_URL}/${uid}/todo/${tid}`
	    })
	  }

	  service.create = function(uid, todo) {
		  uid = 1;
		  var newObj = {
				  
					task : todo.task,
					description : '',
					completed : false
				};
		  
	    return $http({
	      method : 'POST',
	      url : `${BASE_URL}/${uid}/todo`,
	      headers : {
	        'Content-Type' : 'application/json'
	      },
	      data : newObj
	    })
	    
	  };

	  service.update = function(uid, tid, todo) {
		  uid = 1;
			
	    return $http({
	      method : 'PUT',
	      url : `${BASE_URL}/${uid}/todo/${tid}`,
	      headers : {
	        'Content-Type' : 'application/json'
	      },
	      data : todo
	    })
	  };

	  service.destroy = function(uid, tid) {
		  uid = 1;
			
	    return $http({
	      method : 'DELETE',
	      url : `${BASE_URL}/${uid}/todo/${tid}`
	    })
	  };

	  return service;
	})

	