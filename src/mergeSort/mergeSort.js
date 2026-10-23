const mergeSort = (arr) => {
  if(arr.length === 0 || arr.length === 1){
    return arr;
  }

  let arrRight = arr.slice(Math.floor(arr.length / 2));
  let arrLeft = arr.slice(0, Math.floor(arr.length / 2));

  arrLeft = mergeSort(arrLeft);
  arrRight = mergeSort(arrRight);

  let sortArr = [];

  for(let i = 0; i < arr.length; i++){
    if(arrRight[0] === undefined){
      sortArr.push(arrLeft[0]);
      arrLeft.splice(0, 1);
    }
    else if(arrLeft[0] === undefined){
      sortArr.push(arrRight[0]);
      arrRight.splice(0, 1);
    }
    else if(arrRight[0] > arrLeft[0]){
      sortArr.push(arrLeft[0]);
      arrLeft.splice(0, 1);
    }
    else if(arrRight[0] < arrLeft[0]){
      sortArr.push(arrRight[0]);
      arrRight.splice(0, 1);
    }
    else if(arrRight[0] == arrLeft[0]){
      sortArr.push(arrRight[0]);
      arrRight.splice(0, 1);

      sortArr.push(arrLeft[0]);
      arrLeft.splice(0, 1);
    }
  }
  return sortArr;
};

export { mergeSort };