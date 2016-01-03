angular.module('raviModule', [])
	.controller('raviPageController', ['$scope', function($scope){
		$scope.imageMaxShow = function(){

				//var currentImageIndex = $(this).data("imageindex");
			$(".gallery-synopsis").css("display","none");
			$(".gallery-maximize").css("display","block");
			var currentImageURL = $(event).find("img").attr("src");
			$(".gallery-maximize .row").css("background","url("+currentImageURL+")");
			$(".gallery-maximize .row").css("background-size","cover");
		}

		$scope.imageMaxClose = function(){
			
			$(".gallery-synopsis").css("display","table");
			$(".gallery-maximize").css("display","none");
		}
		
	}]);