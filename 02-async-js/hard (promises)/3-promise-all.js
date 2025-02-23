/*
 * Write 3 different functions that return promises that resolve after 1, 2, and 3 seconds respectively.
 * Write a function that uses the 3 functions to wait for all 3 promises to resolve using Promise.all,
 * Print how long it took for all 3 promises to resolve.
 */


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
    var start = Date.now();
    // Promise.all([waitOneSecond(),waitTwoSecond(),waitThreeSecond()]).then(function (response){
    //     console.log(response);
    //     var end = Date.now();
    //     console.log((end - start) / 1000);
    // })
    var values = await Promise.all([waitOneSecond(),waitTwoSecond(),waitThreeSecond()]);

    var end = Date.now();
    

    return (end - start) / 10000;

}

// calculateTime().then(function (response){
//     console.log(response);
// })


module.exports = {
    calculateTime
};