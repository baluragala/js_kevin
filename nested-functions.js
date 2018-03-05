function foo() {
  var a = 1;
  function bar() {
    var b = 2;
    function xyz() {
      var c = 3;
      console.log(a, b, c);
    }
    xyz();
    console.log(a, b, c);
  }
  bar();
  console.log(a, b, c);
}
