-- SABER AONDE OS ARQUIVOS ESTÃO 
GO
EXEC sp_helpfile
GO

-- SABER AONDE OS ARQUIVOS ESTÃO
SELECT * FROM sysfiles
GO

-- COLOCAR O DATABASE ONLINE
ALTER DATABASE teste SET online 
GO

-- COLOCAR O DATABASE OFFLINE
ALTER DATABASE teste SET offline 
GO

-- ALTERAR CAMINHOS/NOME DO ARQUIVO FISICO
ALTER DATABASE teste
MODIFY FILE(NAME=teste,  
FILENAME = 'C:\SQLServer\teste.mdf')
GO

ALTER DATABASE teste
MODIFY FILE(NAME=teste_log, 
FILENAME = 'C:\SQLServer\teste_log.ldf')
GO


/*
*OBSERVAÇÃO: Para alterar os System Databases, não precisa colocar o database offline
*/

/*
*OBSERVAÇÃO: Para alterar o database "master", é necessário alterar dentro do Regedit.

As vezes está neste caminho:
HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\MSSQLServer\MSSQLServer\Parameters

Outras vezes está no caminho: 
HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Microsoft SQL Server\MSSQL10_50.MSSQLSERVER\MSSQLServer\Parameters
*/