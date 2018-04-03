function outer(a) {
  return function inner(b) {
    return a + b;
  };
}
