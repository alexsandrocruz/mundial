(function(){
    var mundial = angular.module("mundial");
    
    mundial.controller("HomeController",['$scope', '$cookies','$location', function($scope, $cookies,$location){
        
        var usuario = $cookies.getObject('usuario');
        if (!usuario.autenticado) {
            $location.url('/');
        }
        
        $scope.mensagem = "Bem Vindo " + usuario.nom_usuario;
        
        
    }]);
})();