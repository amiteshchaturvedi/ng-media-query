# ng-media-query v1.0.1

#### Running media queries in Angularjs

## Installation

**(1)** node(npm)

>
```html
npm install ng-media-query
```

**(2)** Bower

>
```html
bower install ng-media-query
```

**(3)** Manual

>
```html
Download ng-media-query.js
or       ng-media-query.min.js
```

## Dependencies

>
```html
angular.js
```

## Inject as dependency

>
```html
angular.module('yourApp', ['ngMediaQuery']);
```

## Define query parameters

>
```html
angular.module('yourApp').value('media', {
    'xs': [-1, 767],
    'sm': [768, 991],
    'md': [992, 1199],
    'lg': [1200, -1]
});
```

#### Set 'device key':[minwidth, maxwidth]
#### Use -1 for no limit.
#### The key value for media can be changed as per the requirement.
#### The response will be the provided key (eg. xs).

## Usage:
#### use below methods in your controller, refer example

### Get current media

>
```html
var getMedia = NgMediaQuery.getMedia();        
getMedia.then(function(data){
    $scope.media = data;
}, function(status){
    //  this returns the current media value, initial setting can be set here
   });
```

### Get media on change

>
```html
$scope.$on('MediaChange', function(event, media){
    $scope.media = media;
    //this is the onchage media, whenever browser is resized or orientation is changed this function is called, set media change functionalities here
});
```


#### Feel free for your suggestions and comments. 
#### Please let us know if you need any extra functionalities to be added, we will keep providing examples.
