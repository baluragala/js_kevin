//rest - always at receving end
function sum(...args,skip) {
  let total = 0;
  for (let n of args) {
    total += n;
  }
  return total;
}


//spread - always giving end
let sentence = new String("Rest and spread are new syntax in ES6");
function wordIterator() {
    let words = sentence.split(" ");
    let index = 0;
    return {
      next () {
        if (index < words.length) {
          return { value: words[index++], done: false };
        } else {
          return { value: undefined, done: true };
        }
      }
    };
}

sentence[Symbol.iterator] = wordIterator;
//let words = [...sentence]
let [first,second,...rest] =[...sentence];