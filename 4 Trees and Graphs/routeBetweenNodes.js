// Route Between Nodes: Given a directed graph, design an algorithm to find out whether there is a route between two nodes.
// O: Boolean
// I: graph, node1, node2
// C: N/A
// E: N/A

4.1
function RouteBetweenNodes (graph, node1, node2) {
  if (graph.AdjList[node1].edges[node2] || graph.AdjList[node2].edges[node1]) {
    return true
  } else {
    return false;
  }
}

// Time: O(1)
// Space: O(1)

