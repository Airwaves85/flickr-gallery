'use strict';

angular.module('flickrGalleryApp').directive('toolbar', function(){
  return {
    restrict: 'E',
    templateUrl: 'views/views-directives/_toolbar.html'
  };
});
