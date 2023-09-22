//I want you to use the FS module and print out the file list for your desktop
const fs = require('fs');

// console.log(__dirname);
// console.log(__filename);

fs.readdir('../../../../../../', (err, file) =>{
    console.log(file);
})