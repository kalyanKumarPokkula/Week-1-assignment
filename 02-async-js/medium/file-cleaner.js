const fs = require('fs');

var path = './02-async-js/medium/data.txt'
function removeSpaces(str){
  str= str.trim();
      var result = [];
      var arr = str.split(" ");
      for(var i=0;i<arr.length;i++){
        if(arr[i] != ''){
          result.push(arr[i]);
          
        }
      }
      return result.join(" ");
}

fs.readFile(path , 'utf-8' , (err ,data) => {
    if(err) throw err;
    var NewData = removeSpaces(data)
    console.log(NewData);
    console.log("Successfully read a file");

    fs.writeFile(path , NewData , (err) => {
        if(err) throw err;
        console.log("Successfully writed a file");
        
    })

})

