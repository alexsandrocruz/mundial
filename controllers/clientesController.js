(function(){
    var mundial = angular.module("mundial");
    
    mundial.controller("ClientesController",['$scope', 'ClientesService','uiGridConstants', function($scope, ClientesService,uiGridConstants){
        
        $scope.title = "Clientes";
        var arrayClientes = ClientesService.query();
        
        $scope.gridClientes = {  
            enableFiltering:true,
            enableSorting:true,
            showGridFooter: true,
            showColumnFooter: true,
            columnDefs: [
              {field: 'cod_cliente', displayName: 'Código',aggregationType: uiGridConstants.aggregationTypes.max},
              {field: 'nom_cliente', displayName: 'Nome', enableCellEdit:true},
              {field: 'nom_apelido_cliente', displayName: 'Apelido'},
              //{name: 'edit', displayName: 'Editar', cellTemplate: '<button id="editBtn" type="button" class="btn-small" ng-click="editar(row.entity)" >Editar</button> '}
            ],
            data : arrayClientes        
        };
        
        $scope.editar = (d) => {
            debugger;
            alert(d);
        };
    }]); //fim da definição do controller
    
})();