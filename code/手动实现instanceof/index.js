const instanceOf = (a, b) => {
  let p = a;
  while (p) {
    if (p === b.prototype) {
      console.log(true)
      return true;
    }
    p = p.__proto__;
  }
  console.log(false)
  return false;
}

instanceOf([], Array);
instanceOf([], Object);
instanceOf(1, Number);
instanceOf(1, String);
instanceOf(1, Object);