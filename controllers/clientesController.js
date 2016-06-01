(function(){
    var mundial = angular.module("mundial");
    
    mundial.controller("ClientesController",['$scope','$cookies', 'ClientesService','uiGridConstants', 'uiGridGroupingConstants', function($scope,$cookies, ClientesService,uiGridConstants,uiGridGroupingConstants){
        
        debugger;
        $scope.title = "Clientes";
        
        var arrayClientes = ClientesService.query();
        
        $scope.gridClientes = {
            data : arrayClientes,
            enableColumnResizing : true,
            enableFiltering : true,
            enableGridMenu : true,
            showGridFooter : true,
            paginationPageSizes: [10, 25, 50, 75, 100, 200],
            paginationPageSize: 10,
            //showColumnFooter : true,
            fastWatch : true,
            
            columnDefs: [
              {field: 'cod_cliente', displayName: 'Código', enableCellEdit:false, aggregationType: uiGridConstants.aggregationTypes.max},
              {field: 'nom_cliente', displayName: 'Nome', enableCellEdit:true},
              {field: 'nom_apelido_cliente', enableCellEdit:true, displayName: 'Apelido'},
              //{name: 'edit', displayName: 'Editar', cellTemplate: '<button id="editBtn" type="button" class="btn-small" ng-click="editar(row.entity)" >Editar</button> '}
            ],
            enableSelectAll: true,
            exporterCsvFilename: 'myFile.csv',
            exporterPdfDefaultStyle: {fontSize: 9},
            exporterPdfTableStyle: {margin: [30, 30, 30, 30]},
            exporterPdfTableHeaderStyle: {fontSize: 10, bold: true, italics: true, color: 'red'},
            exporterPdfHeader: { text: "My Header", style: 'headerStyle' },
            exporterPdfFooter: function ( currentPage, pageCount ) {
              return { text: currentPage.toString() + ' of ' + pageCount.toString(), style: 'footerStyle' };
            },
            exporterPdfCustomFormatter: function ( docDefinition ) {
              docDefinition.styles.headerStyle = { fontSize: 22, bold: true };
              docDefinition.styles.footerStyle = { fontSize: 10, bold: true };
              return docDefinition;
            },
            exporterPdfOrientation: 'portrait',
            exporterPdfPageSize: 'LETTER',
            exporterPdfMaxGridWidth: 500,
            exporterCsvLinkElement: angular.element(document.querySelectorAll(".custom-csv-link-location")),
            onRegisterApi: function(gridApi){
              $scope.gridApi = gridApi;
            }
        };
        
        debugger;
        // recuperando o valor de um cookie
        
        var usuario = $cookies.getObject('usuario');
        
        
        
    }]); //fim da definição do controller
    
})();