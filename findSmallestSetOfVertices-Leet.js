// Given a directed acyclic graph, with n vertices numbered from 0 to n-1, and an array edges where edges[i] = [fromi, toi] represents a directed edge from node fromi to node toi.

var findSmallestSetOfVertices = function(n, edges) {
  const unique = new Set();
  const result = [];
  for (const e of edges) {
    unique.add(e[1])
  }
  for (let i = 0; i < n; i ++) {
    if (!unique.has(i)) {
      result.push(i)
    }
  }
  return result;
};

console.log(findSmallestSetOfVertices(6, [[0,1],[0,2],[2,5],[3,4],[4,2]]))  //[0,3]