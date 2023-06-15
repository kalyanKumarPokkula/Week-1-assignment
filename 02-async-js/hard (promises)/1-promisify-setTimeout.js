/*
    Write a function that returns a promise that resolves after n seconds have passed, where n is passed as an argument to the function.
*/

function wait(n) {
    return new Promise(function(resolve , reject){
        setTimeout(function (){
            resolve("Successfully resolved promise");
        }, n);
    })
}

var promise = wait(9000);
promise.then(function (response){
  console.log(response);
})
