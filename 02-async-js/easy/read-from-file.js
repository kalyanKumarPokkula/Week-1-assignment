const fs = require('fs');


// asynchronous
fs.readFile('./02-async-js/easy/data.txt' , 'utf-8' , (err , data) => {
    if(err) throw err;
    console.log(data);
})

// synchronous
// try {
//     const data = fs.readFileSync('./02-async-js/easy/data.txt' , 'utf-8');
//     console.log(data);
// } catch (error) {
//     throw error;
// }