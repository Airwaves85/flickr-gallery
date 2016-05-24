'use strict';

angular.module('flickrGalleryApp').directive('favourites', function(){
  return {
    restrict: 'E',
    templateUrl: 'views/views-directives/_favourites.html'
  };
});
