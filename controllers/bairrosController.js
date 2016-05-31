(function(){
    var mundial = angular.module("mundial");
    
    mundial.controller("BairrosController",['$scope', 'BairrosService', function($scope, BairrosService){
        debugger;
        $scope.title = "Bairros";
        var arrayBairros = BairrosService.query();
        
        $scope.gridBairros = {  
            enableFiltering:true,
            enableSorting:true,
            columnDefs: [
              {field: 'cod_bairro', displayName: 'Código'},
              {field: 'nom_bairro', displayName: 'Nome', enableCellEdit:true},
              {field: 'cod_estado', displayName: 'Estado'},
              {field: 'cod_municipio', displayName: 'Município'},
              {name: 'edit', displayName: 'Editar', cellTemplate: '<button id="editBtn" type="button" class="btn-small" ng-click="edit(row.entity)" >Editar</button> '}
            ],
            data : arrayBairros        
            
        };
    }]);
})();