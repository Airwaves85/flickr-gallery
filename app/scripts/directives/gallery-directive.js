'use strict';

angular.module('flickrGalleryApp').directive('gallery', function(){
  return {
    restrict: 'E',
    templateUrl: 'views/views-directives/_gallery.html'
  };
});
