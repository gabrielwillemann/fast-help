-- MATA AS CONEXOES e NAO DEIXA CONECTAR
ALTER DATABASE MyDataBase SET SINGLE_USER WITH ROLLBACK IMMEDIATE;


-- VOLTA A CONFIGURAÇÃO NORMAL
ALTER DATABASE MyDataBase SET MULTI_USER;