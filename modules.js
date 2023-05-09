// Modules


const name = require('./module1.js')
console.log(name)

const sayHi = require('./module2.js')

const data = require('./module3.js')
console.log(data)

require('./module4.js')


sayHi("Susan")
sayHi(name.john)
sayHi(name.peter)
sayHi(data.singlePerson.name)
sayHi(data.singlePerson.items)