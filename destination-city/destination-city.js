/**
 * @param {string[][]} paths
 * @return {string}
 */
var destCity = function(paths) {
  let departure = [];
  let destination = [];
  for (let i = 0; i < paths.length; i ++) {
    departure.push(paths[i][0]);
    destination.push(paths[i][1]);
  }
  console.log(departure);
  console.log(destination)
  for (let i = 0; i < departure.length; i ++) {
    if (departure.indexOf(destination[i]) === -1) {
      return destination[i];
    }
  }
};