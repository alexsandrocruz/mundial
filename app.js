(function(){
    var mundial = angular.module('mundial', ['ngRoute', 'ui.grid', 'ui.grid.edit','ngAnimate','ngResource']);
   
    mundial.config(['$routeProvider', function($routeProvider){
       
        mundial.rotas = [
            { caminho:'/', controller:'HomeController', URL:'views/home.html' },
            
            { caminho:'/clientes', controller:'ClientesController', URL:'views/cadastro/clientes.html' },
            
            { caminho:'/fornecedores', controller:'FornecedoresController', URL:'views/cadastro/fornecedores.html' },
            
            { caminho:'/fabricantes', controller:'FabricantesController', URL:'views/cadastro/fabricantes.html' },
            
            { caminho:'/continentes', controller:'ContinentesController', URL:'views/cadastro/localizacao/continentes.html' },
            { caminho:'/paises', controller:'PaisesController', URL:'views/cadastro/localizacao/paises.html' },
            { caminho:'/estados', controller:'EstadosController', URL:'views/cadastro/localizacao/estados.html' },
            { caminho:'/municipios', controller:'MunicipiosController', URL:'views/cadastro/localizacao/municipios.html' },
            { caminho:'/bairros', controller:'BairrosController', URL:'views/cadastro/localizacao/bairros.html' },
            { caminho:'/regioes', controller:'RegioesController', URL:'views/cadastro/localizacao/regioes.html' },
            { caminho:'/tipo-logradouro', controller:'TiposDeLogradouroController', URL:'views/cadastro/localizacao/tipos-logradouro.html' },
            
            { caminho:'/transportadoras', controller:'TransportadorasController', URL:'views/cadastro/frotas/transportadoras.html' },
            { caminho:'/veiculos', controller:'VeiculosController', URL:'views/cadastro/frotas/veiculos.html' },
            { caminho:'/tipos-veiculo', controller:'TiposDeVeiculosController', URL:'views/cadastro/frotas/tipos-veiculo.html' },
            { caminho:'/proprietarios', controller:'ProprietariosController', URL:'views/cadastro/frotas/proprietarios.html' },
            { caminho:'/tipos-combustivel', controller:'TiposDeCombustivelController', URL:'views/cadastro/frotas/tipos-combustivel.html' },
            { caminho:'/modelos-veiculo', controller:'ModelosDeVeiculoController', URL:'views/cadastro/frotas/modelos-veiculo.html' },
            { caminho:'/cores-veiculo', controller:'CoresDeVeiculoController', URL:'views/cadastro/frotas/cores-veiculo.html' },
            
            { caminho:'/empresas', controller:'EmpresasController', URL:'views/cadastro/organizacoes/empresas.html' },
            { caminho:'/filiais', controller:'FiliaisController', URL:'views/cadastro/organizacoes/filiais.html' },
            { caminho:'/grupos-empresas', controller:'GruposDeEmpresasController', URL:'views/cadastro/organizacoes/grupos-empresas.html' },
            
            { caminho:'/enderecos-entrega', controller:'EnderecosDeEntregaController', URL:'views/cadastro/vendas/enderecos-entrega.html' },
            { caminho:'/representantes', controller:'RepresentantesController', URL:'views/cadastro/vendas/representantes.html' },
            
            { caminho:'/favorecidos', controller:'FavorecidosController', URL:'views/cadastro/contas-pagar/favorecidos.html' },
            
            { caminho:'/fontes-pagadoras', controller:'FontesPagadorasController', URL:'views/cadastro/contas-receber/fontes-pagadoras.html' },
            
            { caminho:'/bancos', controller:'BancosController', URL:'views/cadastro/tesouraria/bancos.html' },
            { caminho:'/tipos-conta', controller:'TiposDeContaController', URL:'views/cadastro/tesouraria/tipos-conta.html' },
            { caminho:'/agencias-bancarias', controller:'AgenciasBancariasController', URL:'views/cadastro/tesouraria/agencias-bancarias.html' },
            { caminho:'/contas-bancarias', controller:'ContasBancariasController', URL:'views/cadastro/tesouraria/contas-bancarias.html' },
            
            { caminho:'/categorias', controller:'CategoriasController', URL:'views/cadastro/diversos/categorias.html' },
            { caminho:'/centros-custos', controller:'CentrosDeCustosController', URL:'views/cadastro/diversos/centroscusto.html' },
            { caminho:'/formas-pagtos-recbtos', controller:'FormasDePagamentosController', URL:'views/cadastro/diversos/formas-pagtos-recbtos.html' },
            { caminho:'/frequencias-pagamentos', controller:'FrequenciasDePagamentosController', URL:'views/cadastro/diversos/frequencias-pagamentos.html' },
            
            { caminho:'/usuarios', controller:'UsuariosController', URL:'views/cadastro/diversos/usuarios.html' },
            
            { caminho:'/grupos-usuarios', controller:'GruposDeUsuariosController', URL:'views/cadastro/diversos/grupos-usuarios.html' },
            
            { caminho:'/produtos', controller:'ProdutosController', URL:'views/estoques/produtos.html' },
            { caminho:'/unidades-medidas', controller:'UnidadesDeMedidasController', URL:'views/estoques/unidades-medidas.html' },
            { caminho:'/marcas', controller:'MarcasController', URL:'views/estoques/marcas.html' },
            { caminho:'/embalagens', controller:'EmbalagensController', URL:'views/estoques/embalagens.html' },
            { caminho:'/depositos', controller:'DepositosController', URL:'views/estoques/depositos.html' },
            { caminho:'/tipos-marcas', controller:'TiposDeMarcasController', URL:'views/estoques/tipos-marcas.html' },
            { caminho:'/tipos-movimentos', controller:'TiposDeMovimentosController', URL:'views/estoques/tipos-movimentos.html' },
            { caminho:'/produtos-fabricantes', controller:'ProdutosPorFabricantesController', URL:'views/estoques/produtos-fabricantes.html' },
            { caminho:'/produtos-fornecedores', controller:'ProdutosPorFornecedoresController', URL:'views/estoques/produtos-fornecedores.html' },
            { caminho:'/produtos-depositos', controller:'ProdutosPorDepositosController', URL:'views/estoques/produtos-depositos.html' },
            { caminho:'/movimentacoes', controller:'MovimentacoesController', URL:'views/estoques/movimentacoes.html' },
            
            { caminho:'/movimentacoes', controller:'MovimentacoesController', URL:'views/vendas/pedidos.html' },
            
            { caminho:'/pagamentos', controller:'ContasPagarController', URL:'views/financeiro/contas-pagar/pagamentos.html' },
            { caminho:'/recebimentos', controller:'ContasReceberController', URL:'views/financeiro/contas-receber/recebimentos.html' },
            { caminho:'/emissoes', controller:'TesourariasController', URL:'views/financeiro/tesouraria/emissoes.html' },
            { caminho:'/extratos', controller:'TesourariasController', URL:'views/financeiro/tesouraria/extratos.html' },
            
            { caminho:'/vistorias', controller:'VistoriasController', URL:'views/veiculos/vistorias.html' },
            { caminho:'/revisoes', controller:'RevisoesController', URL:'views/veiculos/revisoes.html' },
            { caminho:'/multas', controller:'MultasController', URL:'views/veiculos/infracoes/multas.html' },
            { caminho:'/pecas', controller:'PecasController', URL:'views/veiculos/pecas.html' },
        ];
        
        configurarRotas($routeProvider, mundial.rotas);    
    }]);                  
    
    
    
    function configurarRotas($routeProvider, rotas){
        rotas.forEach((r) =>{
            $routeProvider.when( r.caminho, { controller:r.controller, templateUrl:r.URL });
        });
    }
})();