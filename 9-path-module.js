const path = require('path')

console.log(path.sep)

//to join the paths of the file
const filePath = path.join('./Content','subfolder','text.txt')

console.log(filePath)

//to know the base file path in the folder
const base = path.basename(filePath)
console.log(base)

//to know the absolute path address

const absolute = path.resolve(__dirname,'Content','subfloder','text.txt')
console.log(absolute)
