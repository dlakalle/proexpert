(function(){
  angular.module('appModule').component('indicador', {
    templateUrl: 'indicadores/indicador/indicador.component.html',
    bindings: {
    	value: '<',
    	icon: '<'
    },
    controller: function IndicadorController(){
      var self = this;
      
    }
  });
})();
