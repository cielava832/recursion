const fibs = (n) => {
  if(n === 1){
    return [0];
  }
  else if(n === 2){
    return [0, 1];
  }
  
  let fib = 1;
  let temp = 0;
  let prev = 0;
  let fibArray = [0, 1];


  for(let i = 0; i < n - 2; i++){
    prev = temp;
    temp = fib;
    fib = fib + prev;

    fibArray.push(fib);
  }

  return fibArray;
};

const fibsRec = (n) => {
  if(n === 1){
    return [0];
  }
  else if(n === 2){
    return [0, 1];
  }

  let prevArr = fibsRec(n - 1);
  let LastEl = prevArr[prevArr.length - 1];
  let SecondLastEl = prevArr[prevArr.length - 2];

  let newFib = LastEl + SecondLastEl;
  prevArr.push(newFib);
  let newArr = prevArr;

  return newArr;
}

export { fibs, fibsRec };
