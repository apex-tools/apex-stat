app.controller('StatController', ['$scope', function ($scope) {

	$scope.ad_systems = [
		{
			name: "Яндекс.Директ",
			camps: [{
				name: "Кампания 1",
				ads: [{
					name: "Объявление 1",
					keywords: [{
						name: "Ключевое слово 1",
						shows: 300,
						clicks: 25,
						cons: 4500,
						lids: 12,
						sales: 5,
						income: 8000,
			},{
						name: "Ключевое слово 2",
						shows: 800,
						clicks: 45,
						cons: 8500,
						lids: 16,
						sales: 2,
						income: 4000,
			}]
		},
					 {
					name: "Объявление 2",
					keywords: [{
						name: "Ключевое слово 1",
						shows: 300,
						clicks: 25,
						cons: 4500,
						lids: 12,
						sales: 5,
						income: 8000,
			},{
						name: "Ключевое слово 2",
						shows: 800,
						clicks: 45,
						cons: 8500,
						lids: 16,
						sales: 2,
						income: 4000,
			}]
		}]

		}]
	}
]

}]);
