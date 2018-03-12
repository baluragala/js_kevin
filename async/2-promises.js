/*
1. pending
2. resolved
3. rejected
*/

var step1 = new Promise(function(resolve, reject) {
  setTimeout(() => {
    console.log(1);
    console.log(2);
    resolve();
  }, 10000);
});

function step2() {
  console.log(3);
  console.log(4);
}

var step3 = new Promise(function(resolve, reject) {
  setTimeout(function() {
    console.log(5);
    console.log(6);
    resolve();
  }, 20000);
});

function step4() {
  console.log(7);
  console.log(8);
}

setInterval(function() {
  console.log(new Date());
}, 1000);

step1
  .then(step2)
  .then(() => step3)
  .then(step4)
  .catch(err => console.log(err));
