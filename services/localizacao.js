(function(){
    var mundial = angular.module('mundial');
   
    mundial.factory('Bairros',['$http', function ($http){
      return $http({
          method: "GET",
          url: "http://portal.frescatto.com/wspg/api/bairros/"
      });
    }]);              
})();