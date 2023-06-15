let counter = 0;
  
function increment() {
    console.clear();
    counter++;
    console.log(counter);
    if(counter > -1) {
      setTimeout(increment, 1000);
    }
}
  
increment();