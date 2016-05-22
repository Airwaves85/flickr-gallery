'use strict';

angular.module('flickrGalleryApp').factory('TestService', function ($resource) {
  const apiKey = '&api_key=91bace887faabf57a704cea71a25eaf2';
  const apiUrl = 'https://api.flickr.com/services/rest/?method=';
  const method = 'flickr.photos.search';
  const format = '&format=json';
  const callback = '&nojsoncallback=1';

  return $resource(null,null, {
    query : {url:apiUrl+method+apiKey+format+callback,method: 'GET', isArray: true, transformResponse : function(data){

      data = angular.fromJson(data);

      angular.forEach(data.photos.photo, function(obj){
        var url = 'http://farm' + obj.farm + '.staticflickr.com/' + obj.server + '/' + obj.id + '_' + obj.secret;
        angular.extend(obj, {
          small: url + '_s.jpg',
          medium: url + '_z.jpg',
          large: url + '_b.jpg',
          actualWidth: 200,
          actualHeight: 200
        });
      });
      return data.photos.photo;
    }}
  });
});
