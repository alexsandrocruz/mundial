(function(){
    var mundial = angular.module('mundial');
   
    mundial.factory('ClientesService',['$resource', function ($resource){
      
      
      return $resource("https://mundialerp.gear.host/api/clientes/:id", null, {
            'update': { method:'PUT' }
      });
      
      
      
    }]); //fim da factory.              
})();