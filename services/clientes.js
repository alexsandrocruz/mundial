(function(){
    var mundial = angular.module('mundial');
   
    mundial.factory('ClientesService',['$resource', function ($resource){
      
      //return $resource("https://api.github.com/users");
      return $resource("https://mundialerp.gear.host/api/clientes");
      
      
    }]); //fim da factory.              
})();