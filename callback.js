function getCustomersFromDb(callback) {
  //long operation
}

function processCustomerData(customers) {
  //process here
}

console.log(1);
console.log(2);
console.log(3);
setTimeout(delayedPrint, 15000);
console.log(5);

function delayedPrint() {
  console.log(4);
}

var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// var evens = numbers.filter(function(n) {
//   return n % 2 == 0;
// });

function filter(numbers, filterFn) {
  var result = [];
  for (var i = 0; i < numbers.length; i++) {
    var r = filterFn(numbers[i]);
    if (r == true) {
      result.push(numbers[i]);
    }
  }
  return result;
}

//high order function
filter(numbers, function(n) {
  return n % 2 == 0;
});

filter(numbers, function(n) {
  return n % 5 == 0;
});
