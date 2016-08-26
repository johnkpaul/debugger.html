
console.log('starting fib');

let fib = (x) => {
  if(x === 0 || x === 1){
    return 1;
  }
  else{
    return fib(x-1) + fib(x-2);
  }
}

let res = fib(10);

console.log(res);
