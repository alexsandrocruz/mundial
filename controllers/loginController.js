(function(){
    var mundial = angular.module("mundial");
    
    mundial.controller("LoginController",['$scope', '$cookies','$location','LoginService', function($scope, $cookies,$location,LoginService){
        debugger;
        $scope.mensagem = "Bem Vindo";            
        
        
        
        $scope.autenticar = function() {
            debugger;
            
            // submeter login e senha para a tabela de usuários, e preencher o objeto com o usuário que veio da API
            var loginService = new LoginService({dsc_login_usuario: $scope.login, dsc_senha_usuario:$scope.senha });
            
            loginService.$autenticar((d)=> {
                debugger;
                console.log(d);
                
                if(d.cod_usuario !== undefined && d.nom_usuario !== undefined){
                    $cookies.putObject('usuario', d);
                    $location.url('/');
                }else{
                    $cookies.remove('usuario', d);
                    $location.url('/login');
                }
            });        
        };//fim de $scope.autenticar    
    }]);
})();