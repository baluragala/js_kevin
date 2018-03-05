//named function
function greet(name) {
  if (typeof name != "string") {
    throw new Error("name must be string");
  }
  return "Hello , " + name;
}

//function expression
var anotherGreet = function(name) {
  if (typeof name != "string") {
    throw new Error("name must be string");
  }
  //anotherGreet();
  return "Hola , " + name;
};

//function as parameter
function megaGreet(name, gender, greetFn) {
  var message = greetFn(name);
  return gender + " : " + message;
}

//function as return value
function addMaker(initialValue) {
  var newFunction = function(addValue) {
    return initialValue + addValue;
  };
  return newFunction;
}

function logMaker(dateToUse) {
  var dateString = dateToUse.toDateString();
  return function(message) {
    return dateString + " " + message;
  };
}

var todayLogger = logMaker(new Date());
todayLogger("Say hello");
