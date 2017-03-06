(function(){
  angular.module('appModule').component('layout', {
    templateUrl: 'informe/layout.component.html',
    controller: function LayoutController(){
      var self = this;
      
      self.tarjetas = [
      	{
      		description: "Al realizar una comparación de tu sueldo con otros ingenieros que comparten tu Carrera, Industria y Años de Experiencia, tu sueldo es $255.000 inferior que el promedio. En un ranking de 0 a 100 donde 0 es el menor y 100 es el mayor, tú estás en el lugar:",
      		percent: 32
      	},
      	{
      		description: "Hello World.",
      		percent: 81
      	}
      ];
    }
  });
})();
