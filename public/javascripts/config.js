
/** State management file */
function config($stateProvider, $urlRouterProvider) {

     $urlRouterProvider.otherwise("/");

     $stateProvider
     .state('search', {
          url: "/",
          templateUrl: "/templates/list.html",
          controller : 'listCtrl'
     })
}

angular
.module('testApp')
.config(config);
