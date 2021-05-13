// On a 2D plane, there are n points with integer coordinates points[i] = [xi, yi]. Return the minimum time in seconds to visit all the points in the order given by points.

// You can move according to these rules:

// In 1 second, you can either:
// move vertically by one unit,
// move horizontally by one unit, or
// move diagonally sqrt(2) units (in other words, move one unit vertically then one unit horizontally in 1 second).
// You have to visit the points in the same order as they appear in the array.
// You are allowed to pass through points that appear later in the order, but these do not count as visits.

var minTimeToVisitAllPoints = function(points) {
  let time = 0;
  let current = points[0];

  for (let i = 0; i < points.length - 1; i ++) {
    while (current[0] !== points[i + 1][0] || current[1] !== points[i + 1][1]) {
      if (current[0] !== points[i + 1][0] && current[1] !== points[i + 1][1]) {
        if (current[0] < points[i + 1][0] && current[1] < points[i + 1][1]) {
          current[0] ++;
          current[1] ++;
          time ++;
        } else if (current[0] < points[i + 1][0] && current[1] > points[i + 1][1]) {
          current[0] ++;
          current[1] --;
          time ++;
        } else if (current[0] > points[i + 1][0] && current[1] < points[i + 1][1]) {
          current[0] --;
          current[1] ++;
          time ++;
        } else {
          current[0] --;
          current[1] --;
          time ++;
        }
      } else if (current[0] !== points[i + 1][0]) {
        if (points[i + 1][0] < current[0]) {
          current[0] --;
          time ++;
        } else {
          current[0] ++;
          time ++;
        }
      } else {
        if (points[i + 1][1] < current[1]) {
          current[1] --;
          time ++;
        } else {
          current[1] ++;
          time ++;
        }
      }
    }
  }
  return time
};

console.log(minTimeToVisitAllPoints([[1,1],[3,4],[-1,0]])) //7