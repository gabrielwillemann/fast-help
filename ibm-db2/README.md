### System tables

If you want to list or to filter all tables in IBM DB2, run the following command:

```sql
SELECT * FROM SYSIBM.SYSTABLES
 WHERE TYPE = 'T'
   AND NAME LIKE '%NAME-OF-TABLE%'
```

If you want to list all colums of table, run the following command:

```sql
SELECT * FROM SYSIBM.SYSCOLUMNS
 WHERE TBNAME = 'NAME-OF-TABLE'
 ORDER BY COLNO
```
