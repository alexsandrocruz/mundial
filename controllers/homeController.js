(function(){
    var mundial = angular.module("mundial");
    
    mundial.controller("HomeController",['$scope', '$cookies','$location', function($scope, $cookies,$location){
        debugger;
        var usuario = $cookies.getObject('usuario');
        
        if (!usuario) {
            $location.url('/login');
        }else{
            $scope.mensagem = "Bem vindo " + usuario.nom_usuario;    
        }
        
        
        
        
    }]);
})();