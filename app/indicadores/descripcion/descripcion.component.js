(function(){
  angular.module('appModule').component('descripcion', {
    templateUrl: 'indicadores/descripcion/descripcion.component.html',
    bindings: {
    	text: '<'
    },
    controller: function DescripcionController(){
      var self = this;
      
    }
  });
})();
