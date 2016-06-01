(function(){
    var mundial = angular.module("mundial");
    
    mundial.controller("HomeController",['$scope', '$cookies', function($scope, $cookies){
        
        debugger;
        $scope.mensagem = "Bem Vindo";
        
        var usuario = {
            cod_usuario : 901,
            nom_usuario : "Gilberto Martini"
        };
        
        // Definindo um cookie
        $cookies.putObject('usuario', usuario);
        
        
    }]);
})();