function* doWork() {
  console.log(1);
  console.log(2);
  yield 100;
  console.log(3);
  console.log(4);
  yield { name: "zeo" };
  console.log(5);
  console.log(6);
  yield "hello";
  console.log(7);
  console.log(8);
}

function doWorkNormal() {
  console.log(1);
  console.log(2);
  console.log(3);
  console.log(4);
  console.log(5);
  console.log(6);
  console.log(7);
  console.log(8);
}

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

function* process() {
  yield step1;
  step2();
  yield step3;
  step4();
}

var it = process();
it.next().value.then(() => it.next().value.then(() => it.next().value));

function stepperFunction() {
  let step = 0;
  return function() {
    switch (step) {
      case 0:
        console.log(1);
        console.log(2);
        step++;
        return;
      case 1:
        console.log(3);
        console.log(4);
        step++;
        return;
      case 2:
        console.log(5);
        console.log(6);
        step++;
        return;
      case 3:
        console.log(7);
        console.log(8);
        step++;
        return;
      default:
        return;
    }
  };
}
