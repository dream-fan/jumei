angular.module("Register",[])
.config(function($stateProvider){
	
	$stateProvider
	.state({
		name:"register",
		url:"/register",
		css:{
			href:"src/pages/detail/register/register.css",
			persist:true
		},
		templateUrl:"src/pages/detail/register/register.html"
	})
	
})