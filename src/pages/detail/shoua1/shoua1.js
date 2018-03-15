angular.module("Shoua1Page",[])
.config(function ($stateProvider) {
	$stateProvider
	.state({
		name:"shoua1",
		url:"/shoua1/:id",
		templateUrl:"src/pages/detail/shoua1/shoua1.html",
		css:{
			href:"src/pages/detail/shoua1/shoua1.css",
			persist:true
		},
		controller:function ($scope,$stateParams,$http,$state) {
			var id = $stateParams.id;
			$scope.shoua1 = {};
			$http.get("http://localhost:3000/a").success(function (res) {
				console.log(res)
				var shoua1 = res.a1;
				for (var i = 0; i < shoua1.length; i++) {
					if (id == shoua1[i].id) {
						$scope.shoua1 = shoua1[i]
						console.log($scope.shoua1)
						$scope.buy = function(id){
							console.log(id)
							$http.get('http://localhost:3000/b?id=' + id)
							.success(function(res){
								console.log(">>>>>>",res)
								if(res.msg == "success"){
									$state.go('index.cart')
								}
							})
						}		
					}
				}
			})
		}
	})
})
