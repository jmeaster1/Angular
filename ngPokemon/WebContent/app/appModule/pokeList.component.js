angular.module("appModule")
	   .component("pokeList", {
		   
		   templateUrl : "app/appModule/pokeList.component.html",
		   
		   controller  : function(pokeService) {
			   
			   var vm = this;
			   
			   vm.pokemons = [];
			   
			   vm.selected = null;
			   
			   var loadAllPokes = function() {
				   var result = pokeService.index();
				   result.then(function(result) {
					    console.log(result.data);
				   		vm.pokemons = result.data;
				   });
			   }
			   
			   loadAllPokes();
			   
			   vm.showPokemon = function(id) {
				   pokeService.show(id).then(function(result) {
					   vm.selected = result.data;
				   }).catch(function(errors) {
					   console.log(errors);
				   });
			   }
			   
			   vm.deletePoke = function(id) {
				   pokeService.destroy(id);
				   loadAllPokes();
			   }
			   
			   vm.createPokemon = function(newPokemon) {
				   pokeService.create(newPokemon);
				   loadAllPokes();
			   }
			   
		   },
		   
		   controllerAs : "vm"
		   
	   });
