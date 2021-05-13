//Mock Interview


const computeNFibonnacci = (n) => {
  if (n === 0) {
    return 0;
  }
  if (n === 1) {
    return 1;
  }
  //create an array with the first two numbers already added
  let array = [0, 1];
  //create an index starting with 2
  let i = 2;

  //while    //index <= n
  while(i <= n) {
    //add array[i - 1] and array[i - 2]
    //push result to array
    array.push(array[0] + array[1])
    array = array.slice(1, 3);
    //increment i
    i++;
  }

  //return the last element in the array
  return array.pop();
}

console.log(computeNFibonnacci(6)) //5

//Feedback:
  //IOCE forgot
  //initially solved using O(n) space complexity; could be solved for O(1) later solved

