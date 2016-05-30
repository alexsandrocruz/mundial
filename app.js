(function(){
    var mundial = angular.module('mundial', ['ngRoute','ui.grid','ngAnimate']);
   
    mundial.config(['$routeProvider', function($routeProvider){
       
        mundial.rotas = [
            { caminho:'/', controller:'HomeController', URL:'views/home.html' },
            { caminho:'/clientes', controller:'ClienteController', URL:'views/cadastro/clientes.html' },
            { caminho:'/fornecedores', controller:'FornecedorController', URL:'views/cadastro/fornecedores.html' },
            { caminho:'/fabricantes', controller:'FabricanteController', URL:'views/cadastro/fabricantes.html' },
            
            { caminho:'/continentes', controller:'ContinenteController', URL:'views/cadastro/localizacao/continentes.html' },
            { caminho:'/paises', controller:'PaisController', URL:'views/cadastro/localizacao/paises.html' },
            { caminho:'/estados', controller:'EstadoController', URL:'views/cadastro/localizacao/estados.html' },
            { caminho:'/municipios', controller:'MunicipioController', URL:'views/cadastro/localizacao/municipios.html' },
            { caminho:'/bairros', controller:'BairroController', URL:'views/cadastro/localizacao/bairros.html' },
            { caminho:'/regioes', controller:'RegiaoController', URL:'views/cadastro/localizacao/regioes.html' },
            { caminho:'/tipo-logradouros', controller:'TipoDeLogradouroController', URL:'views/cadastro/localizacao/tipos-logradouros.html' },
            
            { caminho:'/transportadoras', controller:'TransportadoraController', URL:'views/cadastro/frotas/transportadoras.html' },
            { caminho:'/veiculos', controller:'VeiculoController', URL:'views/cadastro/frotas/veiculos.html' },
            { caminho:'/tipos-veiculos', controller:'TipoDeVeiculoController', URL:'views/cadastro/frotas/tipos-veiculos.html' },
            { caminho:'/propriatarios', controller:'PropriatarioController', URL:'views/cadastro/frotas/propriatarios.html' },
            { caminho:'/tipos-combustiveis', controller:'TipoDeCombustivelController', URL:'views/cadastro/frotas/tipos-combustiveis.html' },
        ];
        
        configurarRotas($routeProvider, mundial.rotas);    
    }]);                  
    
    
    
    function configurarRotas($routeProvider, rotas){
        rotas.forEach((r) =>{
            $routeProvider.when( r.caminho, { controller:r.controller, templateUrl:r.URL });
        });
    }
})();