(function () {
    "use strict";
    /*global angular*/
    
    var mundial = angular.module("mundial");
    
    mundial.controller("FornecedoresController", ['$scope', '$cookies', '$log', '$uibModal', 'ClientesService', 'uiGridConstants', 'uiGridGroupingConstants', '$location','$http', function ($scope, $cookies, $log, $uibModal, ClientesService, uiGridConstants, uiGridGroupingConstants, $location, $http) {
        
        debugger;
        var usuario = $cookies.getObject('usuario');
        if (!usuario) {
            $location.url('/login');
        }
        
        $scope.fornecedor = {}; // objeto da tela -> VIEW MODEL
        
        $scope.fornecedores = [];
        
        /* CRUD -----------------------------------------------------------------------------------*/
        /* ----------------------------------------------------------------------------------------*/
        /* ----------------------------------------------------------------------------------------*/
        
        $scope.obterClientePorId = function(item){
            debugger;
            // buscar um cliente
            var partesTextbox = item.split('-');
            var cod_cliente = Number(partesTextbox.reverse()[0].trim());
            
            return $http.get('//mundialerp.gear.host/api/clientes/', {
              params: {
                id: cod_cliente 
              }
            }).then(function(response){ // essa função é invocada quando a resposta da request chega.
                debugger;
                // aqui eu uso o retorno da api para montar um objeto cliente e o angular popula a tela automaticamente.
                $scope.fornecedor = response.data; 
            });
        };
                       
        $scope.salvar = function (cli) {
            
           ClientesService.save(cli, function onSuccess(d){
               debugger;
               $scope.fornecedor = {};
           }, function onError(e){
               console.log(e);
           });
        };
        
        /*FIM DO CRUD -----------------------------------------------------------------------------*/
        /* ----------------------------------------------------------------------------------------*/
        /* ----------------------------------------------------------------------------------------*/
        
        
        /* EVENTOS E COMPONENTES DA TELA ----------------------------------------------------------*/
        /* ----------------------------------------------------------------------------------------*/
        /* ----------------------------------------------------------------------------------------*/
        $scope.formatos = ['dd/MM/yyyy', 'yyyy/MM/dd', 'dd.MM.yyyy', 'shortDate'];
        $scope.formato = $scope.formatos[0];
        
        $scope.dateOptions = {
            //dateDisabled: disabled,
            formatYear: 'yyyy',
            maxDate: new Date(2020, 5, 22),
            //minDate: new Date(),
            startingDay: 1
        };
        // Disable weekend selection
        function disabled(data) {
            var date = data.date, mode = data.mode;
            return mode === 'day' && (date.getDay() === 0 || date.getDay() === 6);
        }
        
        $scope.open1 = function() {
            $scope.popup1.opened = true;
        };
        
        $scope.popup1 = {
            opened: false
        };
        
        $scope.altInputFormats = ['M!/d!/yyyy'];
        
        
        
        // autocompletar (aqui chamado de typeahead)
        $scope.obterClientes = function(val) {
            debugger;
            return $http.get('//mundialerp.gear.host/api/clientes/', {
              params: {
                nom_cliente: val //startswith
              }
            }).then(function(response){
                debugger;
                $scope.fornecedores = response.data;
                
                return response.data.map(function(c){
                    return c.nom_cliente + " - " + c.cod_cliente;
                });
            });
        };
        
        $scope.limpar = function(){
            $scope.fornecedor = {};
        };
    
        
    }]); //fim da definição do controller
    
})();