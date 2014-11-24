// Creates an adjacency list for a random connected graph with the given number of nodes. Density is random.
var fs = require('fs');

var num_nodes = 15;
//var num_edges = 150; // Must be greater than num_nodes - 1 and less than num_nodes * (num_nodes - 1)/2

var low_bound = num_nodes - 1;
var high_bound = num_nodes * (num_nodes - 1) / 2;
var num_edges = Math.floor(Math.random() * (high_bound - low_bound) + low_bound);
console.log("sparseness: " + num_edges/high_bound);

var graph = [[0]];
//var edges = [];

for (var i = 0; i < num_edges; i++) {
	// Pick a random node from the nodes array to attach our new node to
	var attach_node_index = Math.floor(Math.random() * graph.length);
	
	if (i < num_nodes - 1) {
		// Add our new node
		graph.push([i + 1]);
		// Add an edge that connects this node to our attach_node
		graph[attach_node_index].push(i + 1);
	} else {
		// Choose another random node
		var random_node_index = Math.floor(Math.random() * graph.length)
		if (random_node_index != attach_node_index) {
			graph[attach_node_index].push(random_node_index);
		}
	}
}
//console.log(graph);

fs.writeFileSync('random_graph.json', JSON.stringify(graph));
