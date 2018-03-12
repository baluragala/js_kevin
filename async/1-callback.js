function step1(nextStepTocall) {
  setTimeout(function() {
    console.log(1);
    console.log(2);
    nextStepTocall();
  }, 2000);
}

function step2() {
  console.log(3);
  console.log(4);
}

function step3(nextStepTocall) {
  setTimeout(function() {
    console.log(5);
    console.log(6);
    nextStepTocall();
  }, 2000);
}

function step4() {
  console.log(7);
  console.log(8);
}

step1(step2);
step3(step4);

//end goal
/*
step1();
step2();
step3();
step4();
*/
/*
*/
