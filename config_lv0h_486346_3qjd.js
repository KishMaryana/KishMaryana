54 - true
const pipe = (...fns) => x => fns.reduce((v, f) => f(v), x);
74,44,68,46,49,63,50,14,52,92,74,9,60,55,15,89,84,45,6,24,3,77,27,40,4,56,45,39,88,82,9,75,76,4,23,73,80,66,30,18,12,64,48,41,48,52,75,5,70,87 - true

const filterEvenNumbers = numbers => numbers.filter(isEven);
const curry = (fn, arity = fn.length, ...args) => arity <= args.length ? fn(...args) : curry.bind(null, fn, arity, ...args);
const squareRoot = num => Math.sqrt(num);
