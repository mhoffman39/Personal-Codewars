// You are given an integer n, the number of teams in a tournament that has strange rules:

// If the current number of teams is even, each team gets paired with another team. A total of n / 2 matches are played, and n / 2 teams advance to the next round.
// If the current number of teams is odd, one team randomly advances in the tournament, and the rest gets paired. A total of (n - 1) / 2 matches are played, and (n - 1) / 2 + 1 teams advance to the next round.
// Return the number of matches played in the tournament until a winner is decided.

var numberOfMatches = function(n) {
//I: integer representing number of teams
//O: integer representing number of rounds
  //create a teams variable equal to n
  let teams = n;
  //create a matches variable
  let matches = 0;
  //while teams is > 1
  while (teams > 1) {
    //if teams is even
    if (teams % 2 === 0) {
      //teams = teams / 2
      //matches equals matches + teams
      teams = teams / 2;
      matches = matches + teams
    }
    //otherwise
    else {
      //matches equals matches + (teams - 1) / 2
      //teams = (teams - 1) / 2 + 1
      matches = matches + (teams - 1) / 2;
      teams = (teams - 1) / 2 + 1;
    }

  }

  return matches
};

console.log(numberOfMatches(7)) //6
console.log(numberOfMatches(14)) //13