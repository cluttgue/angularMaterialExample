/**
 * @ngdoc function
 * @name Rubick.controller:AppController
 * @description
 * # AppController
 * Controller of the AppController
 */
angular.module('rubick')
	.controller('AppController',
			['$scope', '$window',  '$log', '$cookieStore',
			 function ($scope, $window,  $log, $cookieStore) {
			 	
		$scope.$on('$routeChangeStart',function(angularEvent, next, current) {
			
			
		});

		$scope.init = function(){

		};

}]);