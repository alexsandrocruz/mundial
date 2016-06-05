(function(){
    var mundial = angular.module("mundial");
    
    mundial.controller("LoginController",['$scope', '$cookies','$location', function($scope, $cookies,$location){
        debugger;
        $scope.mensagem = "Bem Vindo";
        
        $scope.usuario = {};
        
        $scope.autenticar = function(){
            
            // submeter login e senha para a tabela de usuários, e preencher o objeto com o usuário que veio da API
            
            debugger;
            if($scope.login === "admin" && $scope.senha === "admin"){
            
                $scope.usuario = {
                    cod_usuario : 3,
                    nom_usuario : "Gilberto Martini",
                    autenticado : true
                };
                // Definindo um cookie
                $cookies.putObject('usuario', $scope.usuario);
                
                $location.url('/');
                
            }else{
                alert("Usuário não autorizado");
                $cookies.remove('usuario');
                $location.url('/login');
            }    
        };
        
        
        
        
        
        
        
    }]);
})();