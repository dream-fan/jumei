angular.module("Login",[])
.config(function($stateProvider){
	
	$stateProvider
	.state({
		name:"login",
		url:"/login",
		templateUrl:"src/pages/detail/login/login.html",
		css:{
			href:"src/pages/detail/login/login.css",
			persist:true
		},
		controller:"ctr1"
	})
	
})
.controller('ctr1',function($scope,accessTokenService,$state,$http){
	
	
	$scope.login = function(){
		console.log('login....')
		
		$http.get('http://localhost:3000/login')
		.then(function(res){
			
			if(res.data.msg == 'success'){
				accessTokenService.accessToken = res.data.token;
				$state.go('index.cart')
			}
		})
	}
	
})
