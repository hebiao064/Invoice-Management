angular.module('myApp', [])
	.factory('listService', function() {
	  var _list = [];
	  var _userInfo = [];
	  
	  return {
	    getList: function() {
	      return _list;
	    },
	    
	    addItem: function(item) {
	      _list.push(item);
	    },

	    addUser: function(user) {
	    	_userInfo.push(user);
	    },

	    
	    removeItem: function(index) {               
	      var item = _list.splice(index, 1)[0];
	    },

	    totalPrice: function() {
	    	var total = 0;
	    	for(i=0;i<_list.length;i++){
				total += _list[i].price*_list[i].quantity;
			}
			return total;
	    }
	  };
	})
	
	.controller('dataController', function($scope,listService) {
		var DC = this;
		DC.list = listService.getList();
		  
		DC.addItem = function(item) {
			item.quantity = 1;
			listService.addItem(item);
			item = [];
		};

		DC.addUser = function(user) {
			listService.addUser(user);
			user = [];
		};

		DC.removeItem = function(index) {
		    listService.removeItem(index);
		};

		DC.totalPrice = function() {
			var total = 0;
			total = listService.totalPrice();
			return total;
		}

	    $scope.products = [
		{product:'Air Jordan 1',quantity:8,price:170,total:1360},
		{product:'Air Jordan 4',quantity:5,price:190,total:950},
		{product:'Air Jordan 11',quantity:2,price:170,total:340},
		{product:'Air Jordan 13',quantity:3,price:170,total:510},
		{product:'Air Jordan 23',quantity:1,price:200,total:200}
		];	
		
		});



