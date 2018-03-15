angular.module("HomePage",[])
.config(function ($stateProvider) {
	
	$stateProvider
	.state({
		name:"index.home",
//		url:"home/:num/:score",
//		url:"home/{num}{score}",
//		url:"home/{num}/{score}",
 		url:"/home",
		templateUrl:"src/pages/home/home.html",
		css:{
			href:"src/pages/home/home.css",
			persist:true
		},
		controller:function ($stateParams,$state) {
			$state.go("index.home.shou")
			
		}
	})
	.state({
		name:"index.home.ji",
		url:"/ji",
		templateUrl:"src/pages/home/homea/ji.html",
		css:{
			href:"src/pages/home/homea/ji.css",
			persist:true
		}
	})
	.state({
		name:"index.home.ming",
		url:"/ming",
		templateUrl:"src/pages/home/homea/ming.html",
		css:{
			href:"src/pages/home/homea/ming.css",
			persist:true
		}
	})
	.state({
		name:"index.home.mu",
		url:"/mu",
		templateUrl:"src/pages/home/homea/mu.html",
		css:{
			href:"src/pages/home/homea/mu.css",
			persist:true
		}
	})
	.state({
		name:"index.home.qing",
		url:"/qing",
		templateUrl:"src/pages/home/homea/qing.html",
		css:{
			href:"src/pages/home/homea/qing.css",
			persist:true
		}
	})
	.state({
		name:"index.home.shou",
		url:"/shou",
		templateUrl:"src/pages/home/homea/shou.html",
		css:{
			href:"src/pages/home/homea/shou.css",
			persist:true
		},
		controller:function($state){
			$state.go("index.home.shou.a")
		}
	})
	.state({
		name:"index.home.shou.a",
		url:"/a",
		templateUrl:"src/pages/home/homea/shou/a.html",
		css:{
			href:"src/pages/home/homea/shou/a.css",
			persist:true
		},
		controller:function ($scope,$http,$css) {
			$scope.a1 = [];
			var getJob = $http.get("src/data/a.json");
			getJob.success(function (res) {
				$scope.a1 = res.a1;
			})
//			$css.add('src/pages/home/home.css')
		}
	})
	.state({
		name:"index.home.shou.b",
		url:"/b",
		templateUrl:"src/pages/home/homea/shou/b.html",
		css:{
			href:"src/pages/home/homea/shou/b.css",
			persist:true
		},
		controller:function ($scope,$http) {
			$scope.b1 = [];
			var getJob = $http.get("src/data/a.json");
			getJob.success(function (res) {
				$scope.b1 = res.b1;
			})
		}
	})
})

