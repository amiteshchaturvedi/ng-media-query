// ng-media-query v1.0.1
// @params: xs, sm, md, lg, set key value pair according to the break points
// Created date: 13th Dec, 2015
// Last edited date: 13th Dec, 2015
// Contributors: Amitesh, Sumit


var ngMediaQuery = angular.module('ngMediaQuery', []);

ngMediaQuery.value('media', {  // to change the media values set query params below, -1 is used for no minimum or maximum limit, use pixel values 
    'xs': [-1, 767],
    'sm': [768, 991],
    'md': [992, 1199],
    'lg': [1200, -1]
});

ngMediaQuery.factory('NgMediaQuery', ['$rootScope', '$window', '$log', 'media', '$q',
    function ($rootScope, $window, $log, media, $q) {

        var ngMediaQuery = {};
        var windowWidth = $window.innerWidth;

        var setMedia = function () {
            angular.forEach(media, function (value, key) {
                if ((windowWidth > value[0] || value[0] < 0) && (windowWidth < value[1] || value[1] < 0)) {
                    $rootScope.$broadcast('MediaChange', key);
                }
            });
        };
        setMedia();

        ngMediaQuery.getMedia = function () {
            var defer = $q.defer();
            angular.forEach(media, function (value, key) {
                if ((windowWidth > value[0] || value[0] < 0) && (windowWidth < value[1] || value[1] < 0)) {
                    defer.resolve(key);
                }
            });
            return defer.promise;
        };
        //  Browser resize check: use this for when browser resize check
        angular.element($window).bind('resize', function () {
            windowWidth = $window.innerWidth;
            setMedia();
        });
        // Orientation change check: use this for orientationchange check
        angular.element($window).bind('orientationchange', function () {
            windowWidth = $window.innerWidth;
            setMedia();
        });

        return ngMediaQuery;

    }]);
