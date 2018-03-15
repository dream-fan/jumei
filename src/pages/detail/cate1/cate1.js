angular.module("CateaPage",[])
.config(function ($stateProvider) {
	$stateProvider
	.state({
		name:"cate1",
		url:"/cate1/:id",
		templateUrl:"src/pages/detail/cate1/cate1.html",
		css:{
			href:"src/pages/detail/cate1/cate1.css",
			persist:true
		},
		controller:function ($scope,$stateParams,$http) {
			var id = $stateParams.id;
			$scope.catea = {};
			$http.get("src/data/a.json").success(function (res) {
				var catea = res.catea;
				for (var i = 0; i < catea.length; i++) {
					if (id == catea[i].id) {
						$scope.catea = catea[i]
					}
				}
			})
		}
	})
})
