// npm install xlsx
const reader = require('xlsx')

// Reading our test file
// just ./test.xlsx if you cd into data folder otherwise, just run `npm run data`
const file = reader.readFile('./src/data/test.xlsx')

let data = []

const sheets = file.SheetNames

for (let i = 0; i < sheets.length; i++) {
    const temp = reader.utils.sheet_to_json(
        file.Sheets[file.SheetNames[i]])
    temp.forEach((res) => {
        data.push(res)
    })
}

// Printing data
// console.log(data)

// Mapping Images to data
let mapImageData = data.map((obj) => {
    return {
        name: obj.name,
        imageUrl: `https://github.com/${obj.github}.png`
    }
})

console.log(mapImageData)
