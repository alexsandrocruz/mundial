(function(){
    var mundial = angular.module("mundial");
    
    mundial.controller("BairrosController",['$scope','$log', 'BairrosService', function($scope,$log, BairrosService){
        debugger;
        $scope.title = "Bairros";
        var arrayBairros = BairrosService.query();
        
        var anotherAppScope = {

          showInfo : function(row) {
               var modalInstance = $modal.open({
                    controller: 'InfoController',
                    templateUrl: 'ngTemplate/infoPopup.html',
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
        
        $scope.gridBairros = {  
            enableFiltering:true,
            enableSorting:true,
            appScopeProvider: { 
                onDblClick : function(row) {
                    debugger;
                   var url = '//google.com';
                   $window.open(url, "_blank", "height=600,width=800,toolbar=no,location=no,menubar=no,titlebar=no");
                 }
            },
            rowTemplate: "<div ng-dblclick=\"grid.appScope.onDblClick(row)\" ng-repeat=\"(colRenderIndex, col) in colContainer.renderedColumns track by col.colDef.name\" class=\"ui-grid-cell\" ng-class=\"{ 'ui-grid-row-header-cell': col.isRowHeader }\" ui-grid-cell ></div>",
            columnDefs: [
              {field: 'cod_bairro', displayName: 'Código'},
              {field: 'nom_bairro', displayName: 'Nome', enableCellEdit:true},
              {field: 'cod_estado', displayName: 'Estado'},
              {field: 'cod_municipio', displayName: 'Município'},
              
              //{name: 'edit', displayName: 'Editar', cellTemplate: '<button id="editBtn" type="button" class="btn-small" ng-click="edit(row.entity)" >Editar</button> '}
            ],
            data : arrayBairros        
            
        };
    }]);
})();
/*

*/