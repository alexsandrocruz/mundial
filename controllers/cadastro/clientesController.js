(function () {
    "use strict";
    /*global angular*/
    
    var mundial = angular.module("mundial");
    
    mundial.controller("ClientesController", ['$scope', '$cookies', '$log', '$uibModal', 'ClientesService', 'uiGridConstants', 'uiGridGroupingConstants', '$location','$http', function ($scope, $cookies, $log, $uibModal, ClientesService, uiGridConstants, uiGridGroupingConstants, $location, $http) {
        
        debugger;
        var usuario = $cookies.getObject('usuario');
        if (!usuario) {
            $location.url('/login');
        }
        
        $scope.cli = {}; // objeto da tela -> VIEW MODEL
        
        $scope.clientes = [];
        
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
                $scope.cli = response.data; 
            });
        };
                       
        $scope.salvar = function (cli) {
            
           ClientesService.save(cli, function onSuccess(d){
               debugger;
               $scope.cli = {};
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
                $scope.clientes = response.data;
                
                return response.data.map(function(c){
                    return c.nom_cliente + " - " + c.cod_cliente;
                });
            });
        };
        
        $scope.limpar = function(){
            $scope.cli = {};
        };
        
        /* FIM DA DEFINIÇÃO DE EVENTOS E COMPONENTES DA TELA --------------------------------------*/
        /* ----------------------------------------------------------------------------------------*/
        /* ----------------------------------------------------------------------------------------*/
        
        
        
        /*var arrayClientes = ClientesService.query(function(){
            
            console.log("");
        /});
        
        var umCliente = ClientesService.get({ id: 1 }, function() {
            debugger;
            console.log(umCliente);
        }); // get() returns a single entry
        */
        
        /* var appScopeModal = {

            showInfo : function(row) {
                
                var modalInstance = $uibModal.open({
                    controller: 'DetalheClienteController',
                    templateUrl: 'ngTemplate/detalheCliente.html',
                    resolve: {
                      selectedRow: function () {                    
                          return row.entity;
                      }
                    }
                });
            
                modalInstance.result.then(function (selectedItem) {
                    $log.log('modal selected Row: ' + selectedItem);
                }, function () {
                    $log.info('Modal dismissed at: ' + new Date());
                });
            }
        };
        
        $scope.gridClientes = angular.defaultGridConfig;
        $scope.gridClientes.appScopeProvider = appScopeModal;
        //$scope.gridClientes.data = arrayClientes;
        $scope.gridClientes.data = [];
        $scope.gridClientes.columnDefs =  [
              //{field: 'cod_cliente', displayName: 'Código', enableCellEdit:false, aggregationType: uiGridConstants.aggregationTypes.max, hidden:true},
              {field: 'nom_cliente', displayName: 'Nome'},
              {field: 'num_telefone1', displayName: 'Telefone'},
              {field: 'nom_municipio', enableCellEdit:true, displayName: 'Município'},
              {field: 'dsc_sigla_estado', enableCellEdit:true, displayName: 'UF'},
              {field: 'sit_cliente', enableCellEdit:true, displayName: 'Situação'},
              //{name: 'edit', displayName: 'Editar', cellTemplate: '<button id="editBtn" type="button" class="btn-small" ng-click="editar(row.entity)" >Editar</button> '}
        ];
        */
        
/*
                                    cod_cliente = c.cod_cliente,
                                    nom_cliente = c.nom_cliente,
                                    num_telefone1 = c.num_telefone1,
                                    nom_municipio = m.nom_municipio,
                                    dsc_sigla_estado = es.dsc_sigla_estado,
                                    sit_cliente = c.sit_cliente
*/        
        
        
        // recuperando o valor de um cookie
        
        
        
    }]); //fim da definição do controller
    /*
    mundial.controller('DetalheClienteController', ['$scope', '$uibModal', '$uibModalInstance', '$filter', '$interval', 'selectedRow', 'ClientesService', function ($scope, $uibModal, $uibModalInstance, $filter, $interval, selectedRow, ClientesService) {
    
            $scope.selectedRow = selectedRow;
    
           $scope.ok = function () {
                $scope.selectedRow = null;
                $uibModalInstance.close();
            };
    
            $scope.cancel = function () {
                $scope.selectedRow = null;
                $uibModalInstance.dismiss('cancel');
            };
            
            $scope.atualizar = function(c){
                debugger;
                ClientesService.update({id: c.cod_cliente},c , function(){
                    debugger;
                    console.log('salvo');
                    alert(c.nom_cliente);
                });
            
            };
        }
    ]); // fim da definição do controller de detalhe
    */
})();