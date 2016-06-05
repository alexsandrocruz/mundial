(function(){
    /*global angular*/
    
    var mundial = angular.module('mundial');
   
    mundial.factory('LoginService',['$resource', function ($resource){
      
      /*
      return $resource("https://mundialerp.gear.host/api/clientes/:id", null, {
            'update': { method:'PUT' }
      });
      */
                  
      return $resource("http://localhost:55432/api/usuarios/:id", { id: "@cod_cliente" }, {        
        'update': { method:'PUT' },
        'save': {
            method :'POST',
            headers: {
            'Content-Type': 'application/json'
            }
        }  
      });
      
        
      
      
    }]); //fim da factory.              
})();