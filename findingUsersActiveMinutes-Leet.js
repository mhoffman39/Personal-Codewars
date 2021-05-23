// You are given the logs for users' actions on LeetCode, and an integer k. The logs are represented by a 2D integer array logs where each logs[i] = [IDi, timei] indicates that the user with IDi performed an action at the minute timei.
// Multiple users can perform actions simultaneously, and a single user can perform multiple actions in the same minute.
// The user active minutes (UAM) for a given user is defined as the number of unique minutes in which the user performed an action on LeetCode. A minute can only be counted once, even if multiple actions occur during it.
// You are to calculate a 1-indexed array answer of size k such that, for each j (1 <= j <= k), answer[j] is the number of users whose UAM equals j.
// Return the array answer as described above.

var findingUsersActiveMinutes = function(logs, k) {
  const obj = {};
  for (let i = 0; i < logs.length; i ++) {
    let user = logs[i][0];
    let minute = logs[i][1];
    if (obj[user]) {
      if (obj[user].indexOf(minute) < 0) {
        obj[user].push(minute)
      }
    } else {
      obj[user] = [minute]
    }
  }
  const times = {};
  for (let key in obj) {
    times[key] = obj[key].length
  }
  const result = Object.values(times);
  resultArr = [];
  for (let i = 0; i < k; i ++) {
    if (result.includes(i + 1)) {
      let count = 0;
      for (let j = 0; j < result.length; j ++) {
        if (result[j] === (i + 1)) {
          count++;
        }
      }
      resultArr.push(count);
    } else {
      resultArr.push(0)
    }
  }
  return resultArr;
};

console.log(findingUsersActiveMinutes([[0,5],[1,2],[0,2],[0,5],[1,3]], 5))  //[0,2,0,0,0]