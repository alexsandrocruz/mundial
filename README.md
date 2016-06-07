fontes de pesquisa

http://plnkr.co/edit/cq7s9lKn90xTVgNxIC6b?p=preview

http://plnkr.co/edit/4KThe4upPwthyf5HhE1c?p=preview

empacotar para windows  -> copy /b nw.exe + app.nw mundial.exe -- 

empacotar para linux    -> cat nw app.nw > mundial && chmod +x mundial 



Resolvendo problemas de caracteres acentuados no MySQL
Antes de importar os dados para a sua base MySQL, defina um collation padrão. No Brasil o Latin1 é o mais utilizado, então o CHARSET (codificação de caracteres) padrão na Locaweb é o Latin1 e o COLLATE (collation) padrão é o latin1_general_ci. Scripts externos podem utilizar UTF8 e geralmente é por causa da diferença de codificação entre Latin1 e UTF8 que ocorrem erros de acentuação.
Verificar o Charset e Collate:
show variables like '%char%';
show variables like '%coll%';
A seguir estão alguns exemplos para definir um collation padrão para a sua base de dados:

ALTER DATABASE <sua_base> CHARSET = Latin1 COLLATE = latin1_swedish_ci;

ou

 ALTER DATABASE <sua_base> CHARSET = UTF8 COLLATE = utf8_general_ci;

CHARSET e COLLATE são coisas distintas, no MySQL, cada CHARSET possui COLLATEs, cada um com sua particularidade. O intuito deste Wiki não é explicar as características de cada um deles, pois pode ser visto da documentação do MySQL, mas daremos um pequeno descritivo entre latin1_general_ci, latin1_general_cs e latin1_swedish_ci.

latin1_general_ci: Não há distinção entre letras maiúsculas e minúsculas. Buscando por “teste”, registros como “Teste” ou “TESTE” serão retornados.
latin1_general_cs: Distingue letras maiúsculas e minúsculas. Buscando por “teste” somente retornará “teste”. Opções como “Teste” e “TESTE” não serão retornadas.
latin1_swedish_ci: Não distingue letras minúsculas e maiúsculas e nem caracteres acentuados e com cedilha, ou seja, o registro que contém a palavra “Intuição” será retornado quando houver uma procura pela palavra “intúicao”.

<add name="MundialDb" connectionString="metadata=res://*/Model.MundialDataModel.csdl|res://*/Model.MundialDataModel.ssdl|res://*/Model.MundialDataModel.msl;provider=MySql.Data.MySqlClient;provider connection string=&quot;server=br-cdbr-azure-south-b.cloudapp.net;user id=****;password=****;persistsecurityinfo=True;database=mundialerp;Convert Zero Datetime=True;Allow Zero Datetime=True&quot;" providerName="System.Data.EntityClient" />

http://stackoverflow.com/questions/27373165/issues-with-cors-in-asp-net/27374066#27374066 --resolvido



DELIMITER $$
CREATE PROCEDURE sp_obter_usuario(in login varchar(255), in senha varchar(255))
BEGIN
	select * from tbl_usuarios where dsc_login_usuario = login and dsc_senha_usuario = md5(senha);
END $$
DELIMITER ;