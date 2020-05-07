## Pagination

```
http://localhost:1337/person?limit=3&skip=0
```

```
Person.find().limit(3).skip(0).exec((e,r) => console.log(e, r));
```

## Sort

```
http://localhost:1337/person?sort="name desc"
```

```js
Person.find()
  .sort('name DESC')
  .exec((e, r) => console.log(e, r));
```

## Filters

```
http://localhost:1337/person?where={"name":{"contains":"1"}}
```

```js
Person.find()
  .where({ name: { contains: '1' } })
  .exec((e, r) => console.log(e, r));
```

## Query with Relation

```js
Car.find()
  .populate('brand')
  .exec((e, r) => console.log(e, r));
```

```js
Brand.find()
  .populate('cars')
  .exec((e, r) => console.log(e, r));
```

## Query with Plain Text

```js
City.query('select * from cities', null, (e, r) => console.log(e, r));
```

## Command for Update

```js
await User.update({ name: 'JOHN' }).set({ name: 'PAUL' });
```
