
const fs = require('fs')

function clearFile() {
    fs.readFile('new.txt', 'utf-8', (err, data) => {
        if (err) {
            console.log(err)
            return
        }
        data = data.replace(/\s+/g, ' ')
        fs.writeFile('new.txt', data, 'utf-8', (err) => {
            if (err) {
                console.log(err)
                return
            }
            console.log("File Written Successful")
        })
    })
}
clearFile()