(function(){
    /*global angular*/
    
    var mundial = angular.module('mundial');
   
    mundial.factory('LoginService',['$resource', function ($resource){
      
      /*
      return $resource("https://mundialerp.gear.host/api/clientes/:id", null, {
            'update': { method:'PUT' }
      });
      */
                  
      return $resource("https://mundialerp.gear.host/api/usuarios/:id", { id: "@cod_usuario" }, {        
        'update': { method:'PUT' },
        'save': {
            method :'POST',
            headers: {
            'Content-Type': 'application/json'
            }
        },
        'autenticar': { 
            url: 'https://mundialerp.gear.host/api/usuarios/', 
            method: 'GET', 
            params:{ 
                dsc_login_usuario: '@dsc_login_usuario', 
                dsc_senha_usuario: '@dsc_senha_usuario'
            }
        }  
      });
      
        
      
      
    }]); //fim da factory.              
})();