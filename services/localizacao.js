(function(){
    var mundial = angular.module('mundial');
   
    mundial.factory('BairrosService',['$resource', function ($resource){
      
      //return $resource("https://api.github.com/users");
      //return $resource("https://mundialerp.gear.host/api/bairros");
      
      return $resource('https://mundialerp.gear.host/api/bairros/:id', null, {
            'update': { method:'PUT' }
      });
      
    }]); //fim da factory.              
})();