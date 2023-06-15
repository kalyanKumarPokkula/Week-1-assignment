/*
 * Write 3 different functions that return promises that resolve after 1, 2, and 3 seconds respectively.
 * Write a function that sequentially calls all 3 of these functions in order.
 * Print out the time it takes to complete the entire operation.
 * Compare it with the results from 3-promise-all.js
 */
const Time = require('./3-promise-all');
function waitOneSecond() {
    return new Promise(function (resolve ,reject){
        setTimeout(function(){
            resolve('Promise 1')
        },1000)
    })

}

function waitTwoSecond() {
    return new Promise(function (resolve ,reject){
        setTimeout(function(){
            resolve('Promise 2')
        },2000)
    })
}

function waitThreeSecond() {
    return new Promise(function (resolve ,reject){
        setTimeout(function(){
            resolve('Promise 3')
        },3000)
    })
}

async function calculateTime() {
    var promise_All = await Time.calculateTime();
    
    var start = Date.now();

    var promise1 = await waitOneSecond();
    var promise2 = await waitTwoSecond();
    var promise3 = await waitThreeSecond();

    var end = Date.now();

    var totalTime = (end - start)/10000;

    var Difference_Between_All_Promise_And_Chain_Promises = totalTime - promise_All; 

    return Difference_Between_All_Promise_And_Chain_Promises;

}

calculateTime().then(function (response){
    console.log(response);
})






// Other way to do it
  // waitOneSecond().then(function (response){
    //     console.log(response);
    //     return waitTwoSecond();
    // }).then(function (response){
    //     console.log(response);
    //     return waitThreeSecond()
    // }).then(function (response){
    //     console.log(response);
    //     var end = Date.now();
    //     var chainded_Promises = (end -start) / 10000;
    //     console.log(promise_All);
    //     console.log(chainded_Promises);
    //     console.log(chainded_Promises - promise_All);
    // })