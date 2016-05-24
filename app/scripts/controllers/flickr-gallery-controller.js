angular.module('flickrGalleryApp').controller('GalleryCtrl', function ($scope, $http,  $localStorage, FlickrSearchService) {

  var page = 1;
  const pageItems = 20;
  $scope.items = FlickrSearchService.query({text: 'landscape', per_page: 10, page: 1});
  $scope.favourites = $localStorage.$default({
    images: []
  });

  $scope.angularGridOptions = {
    infiniteScrollDistance: 20
  };

  $scope.searchImages = function () {
    this.page = 1;
    page = 1;
    $scope.items = FlickrSearchService.query({text: $scope.search, per_page: pageItems, page: this.page});
  };

  $scope.loadMore = function () {
    page++;
    $scope.items = $scope.items.concat([]);
    if(!$scope.search){
      return;
    }
    FlickrSearchService.query({text: $scope.search, per_page: pageItems, page: page}).$promise.then(function (nextPageImages) {
      $scope.items = $scope.items.concat(nextPageImages);
    });
  };

  $scope.addToFavourites = function (url) {
    if ($scope.favourites && $scope.favourites.images.indexOf(url) < 0) {
      $scope.favourites.images.push(url);
    }
  };

  $scope.removeFromFavourites = function (favourite) {
    $scope.favourites.images = $scope.favourites.images.filterValue(favourite);
  };

});
