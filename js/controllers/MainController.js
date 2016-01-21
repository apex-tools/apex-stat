app.controller('MainController', ['$scope', function ($scope) {

	$scope.clientcards = [
		{
			name: 'Аррива',
			visits: 15,
			lids: 5,
			sales: 2,
			income: 55000,

  	},
		{
			name: 'Летний сад',
			visits: 35,
			lids: 12,
			sales: 4,
			income: 123000,

  	},
		{
			name: 'Синдик',
			visits: 20,
			lids: 8,
			sales: 1,
			income: 8000,

  	},

  ];




	$scope.param = "visits";

	$scope.plus = function(index,param) {
    return this.clientcards[index][param];

	};

}]);
