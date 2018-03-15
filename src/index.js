angular.module("app",["ui.router","angularCSS","angularFormCheckModule","ngAnimate","HomePage","CatePage","CartPage","MinePage","CateaPage","Shoua1Page","Shoua2Page","Register","Login"])
.config(function ($stateProvider,$urlRouterProvider,$httpProvider) {

	$httpProvider.interceptors.push("authInterceptor")
	$httpProvider.interceptors.push("accessTokenInterceptor")


	$urlRouterProvider.when("","/index/home")
	$urlRouterProvider.when("/index","/index/home")
	
	
	$stateProvider
	.state({
		name:"index",
		url:"/index",
		templateUrl:"src/component/footer/footer.html",
		controller: function(){
			console.log('index....')
		}
	})
	
	
})
.directive("mySwiper",function () {
	return {
		restrict: "E",
		replace: true,
		transclude: true,
		scope: {},
		template: `
			<div class="swiper-container">
				<div class="swiper-wrapper">
					<div class="swiper-slide"><img ng-src="src/image/b1.jpg"/></div>
					<div class="swiper-slide"><img ng-src="src/image/b2.jpg"/></div>
					<div class="swiper-slide"><img ng-src="src/image/b3.jpg"/></div>
					<div class="swiper-slide"><img ng-src="src/image/b6.jpg"/></div>
				</div>
				<div class="swiper-pagination"></div>
		    </div>
		`,
		link: function() {
//			setTimeout(function () {
				var swiper = new Swiper('.swiper-container', {
			      spaceBetween: 30,
			      centeredSlides: true,
				    autoplay: {
				    delay: 2500,
				    disableOnInteraction: false,
	     		  },
			      pagination: {
			        el: '.swiper-pagination',
			        clickable: true,
			      }
				})
//			},1000)
		}					
	}
})



.factory('authInterceptor', function($rootScope) {

        return {
            responseError: function(error) {
				if(error.status == 401){
					$rootScope.$broadcast("authInterceptor")
				}
            }
        }
})
//为请求添加accessToken
.factory('accessTokenInterceptor', function ($injector) {
    return {
        request: function (config) {
            var authService = $injector.get('accessTokenService');
			 config.params = angular.extend({}, config.params, {
                accessToken: authService.accessToken
            });
            return config;
        }
    }
})
.run(function($state,$rootScope){
	
	
	$rootScope.$on('authInterceptor',function(){
		$state.go('login')
	})
})

.service("accessTokenService",function(){
	
	this.accessToken = null;
})





























//.directive("myHeader",function () {
//	return{
//		restrict: "E",
//		replace: true,
//		transclude: true,
//		scope: {},
//		template:`
//			<header>
//				<a href="#"><</a>
//				<p>购物车</p>
//				<a href="#"><img src="src/image/shou.png"/></a>
//			</header>
//		`
//	}
//})




