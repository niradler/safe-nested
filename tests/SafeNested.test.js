const { SafeNested } = require('../index')
const obj = { a: 1, b: { c: 1, d: { e: 1, a: 1 } } };
const safeObj = new SafeNested(obj)
console.log('before', safeObj.obj)
console.assert(safeObj.obj === obj)
console.assert(safeObj.value === undefined)
console.assert(safeObj.get('a.c').value === undefined)
console.assert(safeObj.get('b.c').value === 1)
console.assert(safeObj.set('d.c', 'd').get('d.c').value === 'd')
console.log('after', safeObj.obj)