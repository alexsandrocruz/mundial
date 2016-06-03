(function(){
    
    /*global angular*/
    
    var mundial = angular.module("mundial");
    
    mundial.controller("ContinentesController",['$scope','$cookies','$log','$uibModal', 'ContinentesService','uiGridConstants', 'uiGridGroupingConstants', function($scope, $cookies, $log, $uibModal, ContinentesService,uiGridConstants,uiGridGroupingConstants){
        debugger;
        
        $scope.title = "Continentes";
        
        var arrayClientes = ContinentesService.query();
        
        //var umContinente = ContinentesService.get({ id: 1 }, function() {
        //    debugger;
        //    console.log(umContinente);
        //}); // get() returns a single entry
        
         var appScopeModal = {

            showInfo : function(row) {
                
                var modalInstance = $uibModal.open({
                    controller: 'DetalheContinenteController',
                    templateUrl: 'ngTemplate/detalheContinente.html',
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
        
        $scope.gridContinentes = angular.defaultGridConfig;
        $scope.gridContinentes.appScopeProvider = appScopeModal;
        $scope.gridContinentes.data = arrayClientes;
        $scope.gridContinentes.columnDefs =  [
              //{field: 'cod_cliente', displayName: 'Código', enableCellEdit:false, aggregationType: uiGridConstants.aggregationTypes.max, hidden:true},
              {field: 'nom_continente', displayName: 'Continente'},
              {field: 'sit_continente', enableCellEdit:true, displayName: 'Situação'},
              //{name: 'edit', displayName: 'Editar', cellTemplate: '<button id="editBtn" type="button" class="btn-small" ng-click="editar(row.entity)" >Editar</button> '}
        ];
        
        // recuperando o valor de um cookie
        var usuario = $cookies.getObject('usuario');

    }]); //fim da definição do controller
    
    mundial.controller('DetalheContinenteController', 
    ['$scope', '$uibModal', '$uibModalInstance', '$filter', '$interval', 'selectedRow', 'ContinentesService',
        function ($scope, $uibModal, $uibModalInstance, $filter, $interval, selectedRow, ContinentesService) {
    
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