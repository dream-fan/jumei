angular.module("Shoua2Page",[])
.config(function ($stateProvider) {
	$stateProvider
	.state({
		name:"shoua2",
		url:"/shoua2/:id",
		templateUrl:"src/pages/detail/shoua2/shoua2.html",
		css:{
			href:"src/pages/detail/shoua2/shoua2.css",
			persist:true
		},
		controller:function($scope,$stateParams,$http){
			var id = $stateParams.id;
			$scope.shoua2 = {};
			$http.get("src/data/a.json").success(function (res) {
				var shoua2 = res.a1;
				for (var i = 0; i < shoua2.length; i++) {
					if (id == shoua2[i].id) {
						$scope.shoua2 = shoua2[i]
					}
				}
			})
		}
	})
})
