'use strict';

angular.module('flickrGalleryApp').config(function($compileProvider){
  $compileProvider.debugInfoEnabled(false);

  Object.defineProperty(Array.prototype, 'filterValue', {
    enumerable: false,
    value : function(itemToRemove) {
      var filteredArray = this.filter(function(item){
        return item !== itemToRemove;
      });
      return filteredArray;
    }
  });

});
