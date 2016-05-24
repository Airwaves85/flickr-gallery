'use strict';

angular.module('flickrGalleryApp').directive('search', function(){
  return {
    restrict: 'E',
    templateUrl: 'views/views-directives/_search-form.html'
  };
});
