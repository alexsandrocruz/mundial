(function(){
    var mundial = angular.module("mundial");
    
    mundial.controller("BairrosController",['$scope', 'Bairros', function($scope, Bairros){
        
        $scope.title = "Bairros";
        $scope.gridBairros = { };
        
        Bairros.success(function(data, status, headers, config){
            debugger;
            
            $scope.gridBairros.data = data;
            
        }).error(function(data, status){
            debugger;
            
            console.log(data, status);
        });          
    }]);
})();