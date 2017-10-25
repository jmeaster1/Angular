angular.module("appModule")
	   .factory("pokeService", function($http) {
		  var service = {};
		  
		  var BASE_URL = 'http://52.25.225.137:8080/pokemon/data/poke'
		  
		  service.index = function() {
			  return $http({
				  method : "GET",
				  url : BASE_URL
			  });
		  };
		  
		  service.create = function(newPokemon) {
			  return $http({
				  method  : "POST",
				  url     : BASE_URL,
				  headers : {
				        'Content-Type' : 'application/json'
				      },
				  data    : newPokemon
			  })
		  };
		  
		  service.show = function(id) {
			  return $http({
				  method  : "GET",
				  url     : `${BASE_URL}/${id}`
			  })
		  }
		  
		  service.update = function(id, pokemon) {
			    return $http({
			      method : 'PUT',
			      url : `${BASE_URL}/${id}`,
			      headers : {
			        'Content-Type' : 'application/json'
			      },
			      data : pokemon
			    })
			  };
		  
		  service.destroy = function(id) {
			  return $http({
				  method  : "DELETE",
				  url     : `${BASE_URL}/${id}`
			  });
		  }
		  
		  return service;
	   });