// Count the number of Duplicates

// Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string. The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.

// "abcde" -> 0 # no characters repeats more than once
// "aabbcde" -> 2 # 'a' and 'b'
// "aabBcde" -> 2 # 'a' occurs twice and 'b' twice (`b` and `B`)
// "indivisibility" -> 1 # 'i' occurs six times
// "Indivisibilities" -> 2 # 'i' occurs seven times and 's' occurs twice
// "aA11" -> 2 # 'a' and '1'
// "ABBA" -> 2 # 'A' and 'B' each occur twice

const duplicateCount = (string) => {
  //I: string
  //O: number representing the number of repeated characters
  //C:
  //E:
  //create a count variable starting at 0
  let count = 0;
  //create an object that will count each character
  let countObj = {};

  //iterate over string
  for (let i = 0; i < string.length; i ++) {
    //convert each char to lowercase
    let current = string[i].toLowerCase()
    //if object doesn't hold character
    if (countObj[current] === undefined) {
      //add it to the object with count 1
      countObj[current] = 1;
    }  else {
      //otherwise increase count
      countObj[current]++;
    }
  }
  //iterate over object
  for (let key in countObj) {
    //if count is greater than 1
    if (countObj[key] > 1) {
      //increase count
      count ++;
    }
  }
  return count
}

console.log(duplicateCount('ABBac'))