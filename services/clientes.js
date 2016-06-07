(function(){
    /*global angular*/
    
    var mundial = angular.module('mundial');
   
    mundial.factory('ClientesService',['$resource', function ($resource){
                  
      return $resource("http://mundialerp.gear.host/api/clientes/:id", { id: "@cod_cliente" }, {        
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