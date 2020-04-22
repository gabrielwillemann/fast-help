-- ALTERAR O NOME LÓGICO DO ARQUIVO
ALTER DATABASE teste MODIFY FILE (NAME = teste_antigo, NEWNAME = teste_novo)
GO

ALTER DATABASE teste MODIFY FILE (NAME = teste_antigo_log, NEWNAME = teste_novo_log)
GO



-- MOSTRA SE DEU CERTO
SELECT * FROM sysfiles
GO
