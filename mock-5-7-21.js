const arr1 = [1,3,5];
const arr2 = [2,4,6,7,8];

const mergeArrays = (arr1, arr2) => {
  const result = [];
  let arr1pointer = 0;
  let arr2pointer = 0;

  while (arr1pointer < arr1.length && arr2pointer < arr2.length) {
    if (arr1[arr1pointer] < arr2[arr2pointer]) {
      result.push(arr1[arr1pointer]);
      arr1pointer++;

    } else {
      result.push(arr2[arr2pointer]);
      arr2pointer++;
    }
  }
  if (arr1pointer < arr1.length) {
    for (let i = arr1pointer; i < arr1.length; i ++) {
      result.push(arr1[i]);
    }
  } else {
    for (let i = arr2pointer; i < arr2.length; i ++) {
      result.push(arr2[i]);
    }
  }
  return result;
}

console.log(mergeArrays(arr1, arr2)) //[1,2,3,4,5,6,7,8]

//feedback: constraint: in optimal time o(n)
//use const when appropriate (vice let)

//sorting n log n