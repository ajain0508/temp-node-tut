const {readFileSync,writeFileSync} = require('fs')

console.log('start')
const first = readFileSync('./content/first.txt','utf-8')
const second = readFileSync('./content/second.txt','utf-8')

console.log(first)
console.log(second)

const value = 'this is third text file'
writeFileSync('./content/third.txt',value,{flag:'a'})

console.log('done')