# safe-nested
simple solution to work with objects in a safer way.

```sh
npm i -g safe-nested
```

## SafeNested

```js
const { SafeNested } = require('safe-nested')
const obj = { a: 1, b: { c: 1, d: { e: 1, a: 1 } } };
const safeObj = new SafeNested(obj)
console.log('before', safeObj.obj)
console.assert(safeObj.obj === obj)
console.assert(safeObj.value === undefined)
console.assert(safeObj.get('a.c').value === undefined)
console.assert(safeObj.get('b.c').value === 1)
console.assert(safeObj.set('d.c', 'd').get('d.c').value === 'd')
console.log('after', safeObj.obj)
```

## SafeObject

```js
const { SafeObject } = require('safe-nested')
const obj = { a: 1, b: { c: 1, d: { e: 1, a: 1 } } };
const safeObj = SafeObject(obj);
console.log("before", safeObj)
console.assert(safeObj['a'] === 1)
console.assert((safeObj['g'] = "g") === "g")
console.assert(safeObj['d'] === undefined)
console.assert(safeObj['c.e.g'] === undefined)
console.assert((safeObj['c.e.g'] = "test") === "test")
console.assert(safeObj['b.d.e'] === 1)
console.log("after", safeObj)
```