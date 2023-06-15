const fs = require('fs');

const path = './02-async-js/easy/data.txt';
let content = "writing some content in to a file";

fs.writeFile(path , content , (err) => {
    if(err)  throw err;
    console.log("Successfully writed in file");

})