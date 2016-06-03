(function(){
    
    /*global angular*/
    
    var mundial = angular.module("mundial");
    
    mundial.controller("ClientesController",['$scope','$cookies','$log','$uibModal', 'ClientesService','uiGridConstants', 'uiGridGroupingConstants', function($scope, $cookies, $log, $uibModal, ClientesService,uiGridConstants,uiGridGroupingConstants){
        debugger;
        
        $scope.title = "Clientes";
        
        var arrayClientes = ClientesService.query();
        
        var umCliente = ClientesService.get({ id: 1 }, function() {
            debugger;
            console.log(umCliente);
        }); // get() returns a single entry
        
         var appScopeModal = {

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
        $scope.gridClientes.data = arrayClientes;
        $scope.gridClientes.columnDefs =  [
              //{field: 'cod_cliente', displayName: 'Código', enableCellEdit:false, aggregationType: uiGridConstants.aggregationTypes.max, hidden:true},
              {field: 'nom_cliente', displayName: 'Nome'},
              {field: 'num_telefone1', displayName: 'Telefone'},
              {field: 'nom_municipio', enableCellEdit:true, displayName: 'Município'},
              {field: 'dsc_sigla_estado', enableCellEdit:true, displayName: 'UF'},
              {field: 'sit_cliente', enableCellEdit:true, displayName: 'Situação'},
              //{name: 'edit', displayName: 'Editar', cellTemplate: '<button id="editBtn" type="button" class="btn-small" ng-click="editar(row.entity)" >Editar</button> '}
        ];
        
/*
                                    cod_cliente = c.cod_cliente,
                                    nom_cliente = c.nom_cliente,
                                    num_telefone1 = c.num_telefone1,
                                    nom_municipio = m.nom_municipio,
                                    dsc_sigla_estado = es.dsc_sigla_estado,
                                    sit_cliente = c.sit_cliente
*/        
        
        
        // recuperando o valor de um cookie
        var usuario = $cookies.getObject('usuario');
        
        
    }]); //fim da definição do controller
    
    mundial.controller('DetalheClienteController', 
    ['$scope', '$uibModal', '$uibModalInstance', '$filter', '$interval', 'selectedRow', 'ClientesService',
        function ($scope, $uibModal, $uibModalInstance, $filter, $interval, selectedRow, ClientesService) {
    
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
    
})();