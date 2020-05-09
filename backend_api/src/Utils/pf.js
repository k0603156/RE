const curry = (f) => (a, ...bs) =>
  bs.length ? f(a, ...bs) : (...bs) => f(a, ...bs);
module.exports.curry = curry;

const curryReduce = curry((f, acc, iter) => {
  if (arguments.length === 2) {
    iter = acc[Symbol.iterator]();
    acc = iter.next().value;
  }
  for (const v of iter) {
    acc = f(acc, v);
  }
  return acc;
});
const go = (a, f) => (a instanceof Promise ? a.then(f) : f(a));
exports.go = go;

const go2 = (...as) => curryReduce(go, as);
exports.go2 = go2;

exports.curryReduce = curryReduce;
