angular.module("CartPage",[])
.config(function ($stateProvider) {
	$stateProvider
	.state({
		name:"index.cart",
		url:"/cart",
		templateUrl:"src/pages/cart/cart.html",
		css:{
			href:"src/pages/cart/cart.css",
			persist:true
		},
		controller:function ($scope,$http) {
			$http.get('http://localhost:3000/cart')
			.success(function(res){
				console.log(res)
				$scope.cartData = res.cart;
				
				$scope.qing = function () {
					$http.get("http://localhost:3000/qing").success(function (res) {
						$scope.cartData = res.cart;
					})
				}
				$scope.allCheck = false;
				$scope.updateAllCheck = function (bool) {
					$scope.allCheck = bool;
					$scope.$apply()
				}
				$scope.totalPrice = function () {
					var count = 0
					angular.forEach($scope.cartData,function (item,index,arr) {
						var  price = item.num*item.oneprice;
						if (item.Bol == true) {
							count += price;
						}
					})
					return count;
				}
			})
		}
	})
})
.directive("oneCheck",function () {
	return {
		restrict:"A",
		link:function (scope,elem,attrs) {
			elem.on("click",function () {
				scope.updateAllCheck(true)
				angular.forEach(scope.cartData,function (data) {
					if (!data.Bol) {
						scope.updateAllCheck(false)
					}
				})
			})
		}
	}
})


.directive("allCheck",function () {
	return {
		restrict:"A",
		link:function (scope,elem,attrs) {
			elem.on("click",function () {
				angular.forEach(scope.cartData,function (data) {
					data.Bol = scope.allCheck;
				})
				scope.$apply()
			})
		}
	}
})

//添加按钮

.directive("addBtn",function () {
	return{
		restrict:"A",
		link:function (scope,elem,attrs) {
			console.log(scope)
			console.log(elem)
			console.log(attrs)
			elem.on("click",function () {
				var id  = attrs.dataid;
				angular.forEach(scope.cartData,function (data) {
					if (id == data.id) {
						data.num = parseInt(data.num)+1
					}
				})
				scope.$apply()
			})
		}
	}
})
.directive("addMin",function () {
	return{
		restrict:"A",
		link:function (scope,elem,attrs) {
			elem.on("click",function () {
				var id  = attrs.dataid;
				angular.forEach(scope.cartData,function (data,elem,arr) {
						if (data.num >= 1) {
							if (id == data.id) {
								data.num = parseInt(data.num)-1
							}
						}else{
							if (confirm("是否删除")) {
								arr.splice(elem,1)
							}
						}
				})
				scope.$apply()
			})
		}
	}
})
