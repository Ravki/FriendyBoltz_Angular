angular.module('raviModule', [])
	.controller('raviPageController', ['$scope', function($scope){
		$scope.imageMaxShow = function(){

				//var currentImageIndex = $(this).data("imageindex");
			$scope.currentIndexDiv = $($(event.target).parent()).parent();
			$(".gallery-synopsis").css("display","none");
			$(".gallery-maximize").css("display","block");
			var currentImageUrl = $(event.target).attr("src");
			$(".photo-block").css("background","url("+currentImageUrl+")");
			$(".gallery-maximize").attr("tabindex","-1").focus();

		}

		$scope.imageMaxClose = function(){
			
			$(".gallery-synopsis").css("display","table");
			$(".gallery-maximize").css("display","none");
		}
		
	}])
	.directive('smoothScroll',function(){
		return{
			restrict: 'A',
			link:function(scope,$elm,attrs){
				var idToScroll = attrs.href;
				$elm.on('click',function(){
					$target = $(idToScroll);
					$("html, body").animate({scrollTop: $target.offset().top}, "slow");
					
				});
			}
		}
	});