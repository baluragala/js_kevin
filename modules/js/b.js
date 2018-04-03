// (function(__bModule__) {
//   function test() {
//     let b = document.createElement("div");
//     b.innerHTML = "<h1>This is B</h1>";
//     document.body.appendChild(b);
//   }
//   __bModule__.test = test;
// })(__bModule__);

// var __bModule__ = (function() {
//   return {
//     test: function test() {
//       let a = document.createElement("div");
//       a.innerHTML = "<h1>This is B</h1>";
//       document.body.appendChild(a);
//     }
//   };
// })();

var __bModule__ = (function() {
  test: function test() {
    testPrivate();
  }
  testPrivate: function test() {
    let a = document.createElement("div");
    a.innerHTML = "<h1>This is B</h1>";
    document.body.appendChild(a);
  }
  return { addHeading: test };
})();
