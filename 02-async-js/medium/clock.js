
function clock(){
    var date = new Date();
    var hours = date.getHours();
    var min = date.getMinutes();
    var seconds = date.getSeconds();

    console.clear();
    if(hours % 12 ==0){
        console.log(`${12}:${min}:${seconds}`);
    }else{
        console.log(`${hours%12}:${min}:${seconds}`);
    }
    console.log(`${hours}:${min}:${seconds}`);
}



setInterval(clock, 1000);
