### Commands for MongoDB Shell

Access the MongoDB Shell:

```sh
mongo
```

Databases and collections:

```
show databases
use DATABASE_NAME
show collections
db.customers.find()        # COLLECTION_NAME=customers
```

Insert:

```
db.customers.insert({ name: "john", age: 29 })
db.customers.insert({ name: "john", age: 10, address: {city: "new york", country: "usa"}})
```

Update:

```
db.collection_name.update(criteria, update_data)
db.customers.update({"_id": ObjectId("5e792d543473cb4f0968b11b")}, {$set: {age: 30}})
db.customers.update({name: "john"}, {$set: {age: 31}})
```

Delete:

```
db.customers.remove({"_id": ObjectId("5e792d543473cb4f0968b11b")})
```

Filters:

```
db.customers.find({name: "john"})
db.customers.find({age: {$gt: 30}})
db.customers.find({age: {$lt: 30}})
db.customers.find({name: /john/})
db.customers.find({address: {city: "new york", country: "usa"}})   # Whole nested object
db.customers.find({"address.city": "new york"})
db.customers.find({$or: [{name: "john"},{name: "paul"}]})
db.customers.aggregate({$match: {name: "john"}})
```

Select fields:

```
db.customers.find({}, {name: 1})
db.customers.find({}, {age: 1})
db.customers.find({}, {name: 1, age: 1})
db.customers.find({}, {_id: 0})
db.customers.find({}, {address: 1})
db.customers.find({}, {"address.city": 1})
```

Sort:

```
db.customers.find().sort({name: 1})
db.customers.find().sort({name: -1})
db.customers.aggregate({$sort: {name: 1}})
db.customers.aggregate({$sort: {name: -1}})
```

Limit and Skip:

```
db.customers.find().limit(1)
db.customers.find().skip(0)
db.customers.find().limit(1).skip(0)
db.customers.aggregate({$limit: 2})
db.customers.aggregate({$skip: 0})
db.customers.aggregate([{$skip: 0}, {$limit: 1}])
```

Important links:

- https://www.luiztools.com.br/post/tutorial-mongodb-para-iniciantes-em-nosql/
- https://beginnersbook.com/2017/09/mongodb-tutorial/
- http://docs.mongodb.com/compass/master/query/filter/
- https://docs.mongodb.com/manual/reference/operator/query-comparison/
- https://docs.mongodb.com/manual/reference/operator/aggregation/limit
- https://docs.mongodb.com/manual/reference/method/js-collection/
- https://docs.mongodb.com/manual/reference/method/js-cursor/
- https://docs.mongodb.com/manual/tutorial/query-embedded-documents/
