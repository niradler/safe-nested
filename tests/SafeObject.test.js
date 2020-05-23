const { SafeObject } = require('../index')
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
