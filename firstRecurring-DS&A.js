// First Recurring Character - from DS&A Course

const firstRecurring = (array) => {
  const hasSeen = [];

  for (let i = 0; i < array.length; i ++) {
    if (hasSeen.indexOf(array[i]) > -1) {
      return array[i];
    } else {
      hasSeen.push(array[i]);
    }
  }
  return undefined
}

let array1 = [2,5,1,2,3,5,1,2,4];  //2
let array2 = [2,1,1,2,3,5,1,2,4];  //1
let array3 = [2,3,4,5]  //undefined

console.log(firstRecurring(array1))
console.log(firstRecurring(array2))
console.log(firstRecurring(array3))