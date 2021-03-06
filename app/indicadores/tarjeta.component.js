(function(){
  angular.module('appModule').component('tarjeta', {
    templateUrl: 'indicadores/tarjeta.component.html',
    bindings: {
    	config: '<'
    },
    controller: function TarjetaController(){
      var self = this;
      
      self.$onInit = function(){
      	if(self.config.percent > 50){
      		self.pass = "check";
      		self.passColor = "#77B346";
      	}
      	else{
      		self.pass = "close";
      		self.passColor = "#EF5350";
      	}
      };
    }
  });
})();
