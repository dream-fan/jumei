angular.module("MinePage",[])
.config(function ($stateProvider) {
	
	$stateProvider
	.state({
		name:"index.mine",
 		url:"/mine",
		templateUrl:"src/pages/mine/mine.html",
		css:{
			href:"src/pages/mine/mine.css",
			persist:true
		},
		controller:function ($stateParams) {
			
			
		}
	})
	
})	