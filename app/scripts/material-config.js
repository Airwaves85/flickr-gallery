angular.module('flickrGalleryApp')
  .config(function($mdThemingProvider) {
    $mdThemingProvider.theme('default')
      .primaryPalette('blue')
      .accentPalette('orange');
  });
