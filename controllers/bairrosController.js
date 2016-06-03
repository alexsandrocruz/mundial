(function(){
    /*global angular*/
    var mundial = angular.module("mundial");
    
    mundial.controller("BairrosController",['$scope','$log','$uibModal', 'BairrosService', function($scope,$log, $uibModal, BairrosService){
        
        $scope.title = "Bairros";
        $scope.arrayBairros = BairrosService.query();
        
        $scope.bairro = {}; ////////////////////////////////
        
        var appScopeModal = {
            showInfo : function(row) {
                
                var modalInstance = $uibModal.open({
                    controller: 'DetalheBairroController',
                    templateUrl: 'ngTemplate/detalheBairro.html',
                    resolve: {
                        selectedRow: function () {        
                        debugger;
                        $scope.bairro = row.entity; //////////////////////////////
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
        
        $scope.gridBairros = angular.defaultGridConfig;
        $scope.gridBairros.appScopeProvider = appScopeModal;
        $scope.gridBairros.data = $scope.arrayBairros;
        $scope.gridBairros.columnDefs = [
          {field: 'cod_bairro', displayName: 'Código'},
          {field: 'nom_bairro', displayName: 'Nome', enableCellEdit:true },
          {field: 'cod_estado', displayName: 'Estado'},
          {field: 'cod_municipio', displayName: 'Município'},
          
          //{name: 'edit', displayName: 'Editar', cellTemplate: '<button id="editBtn" type="button" class="btn-small" ng-click="edit(row.entity)" >Editar</button> '}
        ];
        
        //eventos da página
        $scope.ok = function(){
            alert("OK");  
        };
        
        $scope.salvar = function(){
            debugger;    
            //ADICIONAR A VALIDAÇÃO
    
            BairrosService.save(function(){
                
                // INCLUIR O NOVO OBJETO NO ARRAY DO GRID
                $scope.arrayBairros.push(bairro);
                
                // LIMPAR OS TEXTBOXES 
            });
        }; // fim do salvar
        
        $scope.atualizar = function(){
            debugger;
            BairrosService.update({ id : bairro.cod_bairro }, bairro);    
        };// fim do atualizar
        
    }]); //fim do Controller
    
     mundial.controller('DetalheBairroController', 
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
            
            $scope.salvar = function(c){
                debugger;
                ClientesService.save(c, function(){
                    console.log('salvo');
                    alert(c.nom_cliente);
                });
            
            };
        }
    ]); // fim da definição do controller de detalhe
    
})();
/*

*/