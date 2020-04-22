Command for use timezone functions in SQL

```sql
--SET TIME ZONE 'UTC';
--SHOW time zone;

select date, ((date AT TIME ZONE 'UTC') AT TIME ZONE 'America/Sao_Paulo')
  from calls
 where id = 113441
 ```

 PS: In Rails App the date fields are stored in UTC Time
 