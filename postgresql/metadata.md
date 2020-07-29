### Select all tables

```sql
select * from pg_catalog.pg_tables
 where tablename like '%cars%'
```

### Select all columns

```sql
select * from information_schema.columns
 where column_name like 'id'
   --and table_name = 'cars'
```
