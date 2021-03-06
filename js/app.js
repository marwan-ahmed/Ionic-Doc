// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})


.config(function($ionicConfigProvider) {
  $ionicConfigProvider.scrolling.jsScrolling(false);
 
  // Or for only a single platform, use
  // if( ionic.Platform.isAndroid() ) {
    // $ionicConfigProvider.scrolling.jsScrolling(false);
  // }
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

    .state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'templates/menu.html',
    controller: 'AppCtrl'
  })

  .state('app.css', {
    url: '/css',
    views: {
      'menuContent': {
        templateUrl: 'templates/css.html'
      }
    }
  })
   .state('app.html', {
    url: '/html',
    views: {
      'menuContent': {
        templateUrl: 'templates/html.html'
      }
    }
  })

  .state('app.utilities', {
      url: '/utilities',
      views: {
        'menuContent': {
          templateUrl: 'templates/utilities.html'
        }
      }
    })
  .state('app.home', {
      url: '/home',
      views: {
        'menuContent': {
          templateUrl: 'templates/home.html'
        }
      }
    })
   .state('app.javascript', {
      url: '/javascript',
      views: {
        'menuContent': {
          templateUrl: 'templates/javascript.html'
        }
      }
    })
   .state('app.getstarted', {
      url: '/getstarted',
      views: {
        'menuContent': {
          templateUrl: 'templates/getstarted.html'
        }
      }
    })
    

  
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/home');
});
