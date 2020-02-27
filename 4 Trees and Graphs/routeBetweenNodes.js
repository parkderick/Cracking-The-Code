const {Graph} = require('../Data-Structures/Graphs');

// Route Between Nodes: Given a directed graph, design an algorithm to find out whether there is a route between two nodes.
// O: Boolean
// I: graph, node1, node2
// C: N/A
// E: N/A

4.1
function routeBetweenNodes (graph, node1, node2) {
  if (graph.AdjList[node1].edges[node2] || graph.AdjList[node2].edges[node1]) {
    return true
  } else {
    return false;
  }
}

// Time: O(1)
// Space: O(1)

/* TEST */
var graph = new Graph();
graph.addVertex(1);
graph.addVertex(6);
graph.addVertex(8);
graph.addVertex(10);
graph.addEdge(1, 10);

console.log(routeBetweenNodes(graph, 1, 10));
console.log(routeBetweenNodes(graph, 10, 1));
console.log(routeBetweenNodes(graph, 1, 6));

