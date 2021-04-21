// You are given an array of positive integers. While the array has more than one element you can choose two elements and replace them with their sum or product.

// Your task is to find the maximum possible number that can remain in the array after multiple such operations.

// Example

// For arr = [1, 3, 2], the result should be 9.

// in order to maximize the answer the first operation will be 1 + 2 (the array changes into [3, 3]) and the next 3 * 3 (the array changes into [9]), so the final result is 9.
function sumOrProduct(arr) {
  //I: array of positive integers
  //O: integer representing the largest value made my the array
  //C:
  //E: less than 1 element, ignore for now

  //sort the input array in ascending value
  arr.sort(function(a, b) {
    return a - b;
  });

  //iterate over the array
  while (arr.length > 1) {
    let added = arr[0] + arr[1];
    let multiplied = arr[0] * arr[1];
    //compare value of adding vs multiplying current value and next value
    let larger = added;
    if (added >= multiplied) {
      larger = added;
    } else {
      larger = multiplied
    }
    //replace current and next value with result (splice)
    arr.splice(0, 2, larger)
  }
  return arr[0];
}

console.log(sumOrProduct([1, 2, 1, 4, 5]))