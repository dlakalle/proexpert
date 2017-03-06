(function(){
  angular.module('appModule').component('perfiles', {
    templateUrl: 'perfiles.component.html',
    controller: function PerfilesController($mdDialog){
      var self = this;
      
      self.perfiles = [
        {
          id: 1,
          grupo: 1,
          imagen: "static/img/perfiles/1.png",
          nombre: "Chico PUC recien titulado",
          cargo: "Ingeniero Junior",
          area: "Proyectos / Operaciones /TI",
          universidad: "Tradicionales (UChile, UTFSM, PUC, USACH)",
          carrera: "Civil industrial",
          genero: "79% Hombres",
          edad: "27 Años",
          tamano_empresa: "Grande / MiPyme",
          nivel_ingles: "Nulo, Básico, Medio",
          estudios_adicionales: "No",
          experiencia: "1 a 2 Años",
          sueldo: "$1.100.000",
          representado_en: "14%"
        },
        {
          id: 2,
          grupo: 5,
          imagen: "static/img/perfiles/2.png",
          nombre: 'Jefe TI "Pablo Dinamarca"',
          cargo: "Ingeniero Junior / Jefe",
          area: "TI / Proyectos / Operaciones",
          universidad: "Técnicas (Inacap, Usach, Duoc, UTSFM)",
          carrera: "Eje Computación, Comercial, Eje Industrial",
          genero: "81% Hombres",
          edad: "35 Años",
          tamano_empresa: "Grande / MiPyme",
          nivel_ingles: "Nulo, Básico, Medio",
          estudios_adicionales: "Diplomado",
          experiencia: "10 Años",
          sueldo: "$1.625.000",
          representado_en: "12%"
        },
        {
          id: 3,
          grupo: 1,
          imagen: "static/img/perfiles/3.png",
          nombre: "Ingeniero Senior Técnico",
          cargo: "Ingeniero Junior / Senior",
          area: "Proyectos / TI / Operaciones / Comercial",
          universidad: "Tradicionales Tec (UChile, UTSFM, USACH)",
          carrera: "Civil Industrial, Civil Comput., Civil Civil, Comercial",
          genero: "80% Hombres",
          edad: "29 Años",
          tamano_empresa: "Grande / MiPyme",
          nivel_ingles: "Nulo, Básico, Medio",
          estudios_adicionales: "No",
          experiencia: "3 a 5 Años",
          sueldo: "$1.530.000",
          representado_en: "11%"
        },
        {
          id: 4,
          grupo: 3,
          imagen: "static/img/perfiles/4.png",
          nombre: "Chico LAN",
          cargo: "Ingeniero Senior / Jefe",
          area: "Proyectos / Operaciones / TI",
          universidad: "Tradicionales Tec (UChile, UTSFM, USACH)",
          carrera: "Civil Industrial, Civil Civil, Civil Elec., Civil Compu",
          genero: "83% Hombres",
          edad: "34 Años",
          tamano_empresa: "Grande ",
          nivel_ingles: "Nulo, Básico, Medio",
          estudios_adicionales: "Diplomado / Magíster",
          experiencia: "6 a 10 Años",
          sueldo: "$2.360.000",
          representado_en: "9%"
        },
        {
          id: 5,
          grupo: 1,
          imagen: "static/img/perfiles/5.png",
          nombre: "Ingeniero senior en empresa grande (proyectos)",
          cargo: "Ingeniero Senior / Jefe",
          area: "Proyectos / Operaciones / Comercial - Ventas",
          universidad: "Tradicionales Tec (UChile, PUC, UTSFM)",
          carrera: "Civil Industrial, Civil Civil, Comercial",
          genero: "80% Hombres",
          edad: "30 Años",
          tamano_empresa: "Grande ",
          nivel_ingles: "Nulo, Básico, Medio, Alto, Nativo",
          estudios_adicionales: "Diplomado /",
          experiencia: "3 a 5 Años",
          sueldo: "$1.840.000",
          representado_en: "7%"

        },
        {
          id: 6,
          grupo: 1,
          imagen: "static/img/perfiles/6.png",
          nombre: "Ingeniero en empresa grande antes de ascenso",
          cargo: "Ingeniero Junior / Senior",
          area: "Proyectos / TI / Operaciones",
          universidad: "Tradicionales (UChile, USACH, Bio Bio, UTSFM)",
          carrera: "Civil Industrial, Civil Comput., Civil Civil",
          genero: "78% Hombres",
          edad: "33 Años",
          tamano_empresa: "Grande / MiPyme",
          nivel_ingles: "Nulo, Básico, Medio",
          estudios_adicionales: "Diplomado /",
          experiencia: "6 a 10 Años",
          sueldo: "$1.840.000",
          representado_en: "6%"
        },
        {
          id: 7,
          grupo: 5,
          imagen: "static/img/perfiles/7.png",
          nombre: "Pablo Valenzuela, Jefe TI Empresa Grande",
          cargo: "Ingeniero Senior / Jefe",
          area: "TI / Proyectos / Operaciones",
          universidad: "Tradicionales (UChile, USACH, Bio Bio, UTSFM)",
          carrera: "Civil Industrial, Civil Comput., Comercial, Eje Comput",
          genero: "83% Hombres",
          edad: "39 Años",
          tamano_empresa: "Grande",
          nivel_ingles: "Nulo, Básico, Medio, Alto, Nativo",
          estudios_adicionales: "Diplomado ",
          experiencia: "11 a 16 Años",
          sueldo: "$2.210.000",
          representado_en: "7%"
        },
        {
          id: 8,
          grupo: 2,
          imagen: "static/img/perfiles/8.png",
          nombre: "Edgardo, el Ingeniero Novato",
          cargo: "Ingeniero Junior",
          area: "TI / Operaciones / Proyectos",
          universidad: "Técnicas (Inacap, Usach, Duoc, Unab, Utsfm)",
          carrera: "Eje Comput., Construcción",
          genero: "78% Hombres",
          edad: "27 Años",
          tamano_empresa: "MiPyme",
          nivel_ingles: "Nulo, Básico, Medio",
          estudios_adicionales: "No",
          experiencia: "1 a 2 Años",
          sueldo: "$800.000",
          representado_en: "4%"
        },
        {
          id: 9,
          grupo: 2,
          imagen: "static/img/perfiles/9.png",
          nombre: "Sergio, Ingeniero Experto en Sistemas",
          cargo: "Ingeniero Junior",
          area: "TI / Operaciones / Proyectos",
          universidad: "Técnicas (Inacap, Usach, Duoc, Unab, Utsfm)",
          carrera: "Eje Computación, Civil Computación",
          genero: "78% Hombres",
          edad: "29 Años",
          tamano_empresa: "Grande",
          nivel_ingles: "Nulo, Básico, Medio",
          estudios_adicionales: "No",
          experiencia: "3 a 5 Años",
          sueldo: "$1.100.000",
          representado_en: "5%"
        },
        {
          id: 10,
          grupo: 3,
          imagen: "static/img/perfiles/10.png",
          nombre: "Jefe en Empresa Grande con Diplomado - Señor LAN",
          cargo: "Ingeniero Junior / Jefe",
          area: "Proyectos / Operaciones",
          universidad: "Tradicionales (UChile, Usach, PUC, U Conce)",
          carrera: "Civil Civil, Civil Mec., Civil Elec., Civil Industrial",
          genero: "85% Hombres",
          edad: "40 Años",
          tamano_empresa: "Grande",
          nivel_ingles: "Nulo, Básico, Medio, Alto, Nativo",
          estudios_adicionales: "Diplomado / Magíster",
          experiencia: "11 a 16 Años",
          sueldo: "$3.030.000",
          representado_en: "4%"
        },
        {
          id: 11,
          grupo: 4,
          imagen: "static/img/perfiles/11.png",
          nombre: "Gerente Start-Up",
          cargo: "Gerente / Sub Gerente / Gerente General",
          area: "Comercial / Administración / Finanzas / Operaciones",
          universidad: "Tradicionales (UChile, UTSFM, PUC, USACH)",
          carrera: "Civil Industrial, Comercial, Civil Computación",
          genero: "89% Hombres",
          edad: "28 Años",
          tamano_empresa: "MiPyme",
          nivel_ingles: "Nulo, Básico, Medio, Alto, Nativo",
          estudios_adicionales: "Diplomado / Magíster",
          experiencia: "1 a 3 Años",
          sueldo: "$1.500.000",
          representado_en: "0,6%"
        },
        {
          id: 12,
          grupo: 2,
          imagen: "static/img/perfiles/12.png",
          nombre: "Raulito Segura, a sus órdenes!",
          cargo: "Ingeniero Junior",
          area: "TI / Operaciones / Administración",
          universidad: "Técnicas (Inacap, Duoc, Usach, Utem, Utsfm)",
          carrera: "Eje Computación, Eje Adminstración, Comercial",
          genero: "77% Hombres",
          edad: "33 Años",
          tamano_empresa: "Grande",
          nivel_ingles: "Nulo, Básico, Medio",
          estudios_adicionales: "No",
          experiencia: "7 a 10 Años",
          sueldo: "$1.100.000",
          representado_en: "2%"
        },
        {
          id: 13,
          grupo: 3,
          imagen: "static/img/perfiles/13.png",
          nombre: "Juan Pablo Undurraga, Gerente General",
          cargo: "Gerente General",
          area: "Gerencia General / Administración / Comercial",
          universidad: "Mejores (PUC, UChile)",
          carrera: "Civil Industrial, Comercial",
          genero: "100% Hombres",
          edad: "40 Años",
          tamano_empresa: "Grande",
          nivel_ingles: "Alto, Nativo",
          estudios_adicionales: "Diplomado / MBA",
          experiencia: "10 a 20 Años",
          sueldo: "$6.150.000",
          representado_en: "0,2%"
        },
        {
          id: 14,
          grupo: 4,
          imagen: "static/img/perfiles/14.png",
          nombre: "Gerente PYME exitosa",
          cargo: "Gerente / Gerente General / Sub Gerente",
          area: "Comercial / Gerencia General / Proyectos",
          universidad: "Tradicionales (UChile, PUC, USACH)",
          carrera: "Civil Industrial, Comercial, Civil Civil",
          genero: "89% Hombres",
          edad: "39 Años",
          tamano_empresa: "MiPyme",
          nivel_ingles: "Alto, Nativo",
          estudios_adicionales: "Diplomado / Magíster / MBA",
          experiencia: "9 a 20 Años",
          sueldo: "$3.820.000",
          representado_en: "3%"
        }
      ];

      self.colores = {
        1: 'blue',
        2: 'red',
        3: 'yellow',
        4: 'green',
        5: 'purple'
      };

      for(i in [1, 3, 6, 5, 8, 9, 12, 4, 10 ])

      self.showPopup = function($event, perfil){
        var ev = $event;

        var config = {
          locals: {
            perfil: perfil 
          },
          controller: PerfilController,
          templateUrl: 'perfil.component.html',
          parent: angular.element(document.body),
          targetEvent: ev,
          clickOutsideToClose: true
        };

        $mdDialog.show(config);
      };

      function PerfilController($scope, $mdDialog, perfil){
        var self = $scope;

        self.perfil = perfil;

        self.cancelar = function(){
          $mdDialog.hide();
        };
      }

    }
  });
})();

