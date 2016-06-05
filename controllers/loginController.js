(function(){
    var mundial = angular.module("mundial");
    
    mundial.controller("LoginController",['$scope', '$cookies','$location', function($scope, $cookies,$location){
        debugger;
        $scope.mensagem = "Bem Vindo";
        
        $scope.usuario = {};
        
        $scope.autenticar = function(){
            debugger;
            if($scope.login === "admin" && $scope.senha === "admin"){
            
                $scope.usuario = {
                    cod_usuario : 3,
                    nom_usuario : "Gilberto Martini",
                    autenticado : true
                };
                // Definindo um cookie
                $cookies.putObject('usuario', $scope.usuario);
                
                $location.url('/home');
            }else{
                alert("Usuário não autorizado");
                $cookies.remove('usuario');
                $location.url('/');
            }    
        };
        
        
        
        
        
        
        
    }]);
})();