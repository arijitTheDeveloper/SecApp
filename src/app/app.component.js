var sliderApp=angular.module('app', []);
sliderApp.directive('slider',function($timeout){
    return{
        retrict:'AE',
        replace:true,
        scope:{
            images:'='
        },
        link: function(scope,elem,attrs){
            scope.currentIndex = 0; // Initially the index is at the first image

            scope.next = function() {
              scope.currentIndex < scope.images.length - 1 ? scope.currentIndex++ : scope.currentIndex = 0;
            };
            
            scope.prev = function() {
              scope.currentIndex > 0 ? scope.currentIndex-- : scope.currentIndex = scope.images.length - 1;
            };
            scope.$watch('currentIndex', function() {
                scope.images.forEach(function(image) {
                  image.visible = false; // make every image invisible
                });
              
                scope.images[scope.currentIndex].visible = true; // make the current image visible
              });

        },
        templateUrl:'./app.component.html'
    }
})
sliderApp.controller('SliderController', function($scope) {
    $scope.images = [{
      src: "../assets/1.jpeg",
      title: 'Pic 1'
    }, {
      src: "../assets/2.jpeg",
      title: 'Pic 2'
    }, {
      src: "../assets/1.jpeg",
      title: 'Pic 3'
    }, {
      src: "../assets/2.jpeg",
      title: 'Pic 4'
    }, {
      src: "../assets/1.jpeg",
      title: 'Pic 5'
    }];
    
});
