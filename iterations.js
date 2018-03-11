/*

for(init;cond;expr)

for( ... in ... )

for( ... of ... )

*/

var products = [{ name: "p1" }, { name: "p2" }, { name: "p3" }];
for (let i = 0; i < products.length; i++) {
  console.log(products[i]);
}

var product = {
  name: "p1",
  price: 2000,
  stock: 20
};
var properties = Object.keys(product);
for (let p = 0; p < properties.length; p++) {
  console.log(product[properties[p]]);
}

for (let p in product) {
  console.log(product[p]);
}

for (let p of products) {
  console.log(p);
}

function MyArrayIterator(iterable) {
  var iterator = iterable[Symbol.iterator](); //get iterator
  do {
    var iteratorValue = iterator.next();
    if (iteratorValue.done) {
      return;
    }
    console.log(iteratorValue.value);
  } while (1);
}

var product = {
  name: "p1",
  price: 2000,
  stock: 20,
  [Symbol.iterator]: function() {
    let keys = Object.keys(this);
    let index = 0;
    return {
      next() {
        if (index < keys.length) {
          return { value: product[keys[index++]], done: false };
        } else {
          return { value: undefined, done: true };
        }
      }
    };
  }
};
