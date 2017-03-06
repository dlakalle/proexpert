(function(){
  angular.module('appModule').
    config(['$urlRouterProvider', '$locationProvider', '$stateProvider',
      function config($urlRouterProvider, $locationProvider, $stateProvider) {
        $locationProvider.hashPrefix('!');

        $urlRouterProvider.otherwise('/informe/');

        $stateProvider.state('informe', {
          url: '/informe/',
          template: '<layout></layout>'
        });


      }
    ]);

})();
