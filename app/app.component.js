(function(){
  angular.module('appModule').component('app', {
    templateUrl: 'app.component.html',
    controller: function AppController($mdSidenav){
      var self = this;
      self.openLeftMenu = function() {
        $mdSidenav('left-sidenav').toggle();
      };
    }
  });
})();
