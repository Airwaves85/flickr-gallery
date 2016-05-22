'use strict';

angular.module('flickrGalleryApp').config(function ($stateProvider, $urlRouterProvider) {


  $urlRouterProvider.otherwise('/gallery');

  $stateProvider.state('app', {
      abstract: true,
      templateUrl: 'views/layout.html'
    })

    .state('app.gallery', {
      url: '/gallery',
      templateUrl: 'views/gallery.html',
      controller: 'GalleryCtrl'
    });
});
