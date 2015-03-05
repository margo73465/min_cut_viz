// Generates a random connected graph by first creating a minimum spanning tree
// and then adding edges until the desired density is reached.
// See http://stackoverflow.com/questions/2041517/random-simple-connected-graph-generation-with-given-sparseness
var fs = require('fs');

var num_nodes = 15;
var density = 0.50;

var low_bound = num_nodes - 1;
var high_bound = num_nodes * (num_nodes - 1) / 2;
var num_edges = low_bound + Math.floor(density * (high_bound - low_bound));


var nodes = [];
for (var i = 0; i < num_nodes; i++) {
	nodes.push({
		name: "test" + i
	// 	id: i,
	// 	selected: false
	});
	// nodes.push(i);
}
var edges = [];

var S = nodes.slice(0);
var T = [];

var current = S[Math.floor(Math.random() * S.length)];
T.push(current);
S.splice(S.indexOf(current),1);

var i = 0;
while (S.length > 0) {
	var neighbor = S[Math.floor(Math.random() * S.length)];
	edges.push({
		edge_id: i,
		source: nodes.indexOf(current),
		target: nodes.indexOf(neighbor),
		linknum: 1,
		selected: false
	});
	S.splice(S.indexOf(neighbor), 1);
	T.push(neighbor);
	current = neighbor;
	i++;
}

while (edges.length < num_edges) {
	var node1 = nodes[Math.floor(Math.random() * nodes.length)];
	var node2 = nodes[Math.floor(Math.random() * nodes.length)];

	if (node1 !== node2) {
		edges.push({
			edge_id: i,
			source: nodes.indexOf(node1),
			target: nodes.indexOf(node2),
			linknum: 1,
			selected: false
		});
		i++;
	}
}

console.log(nodes);
console.log(edges);

var graph = {
	nodes: nodes,
	links: edges
};

// var graph = [[]];

// for (var i = 0; i < num_edges; i++) {
// 	// Pick a random node from the nodes array to attach our new node to
// 	var attach_node_index = Math.floor(Math.random() * graph.length);
	
// 	if (i < num_nodes - 1) {
// 		// Add our new node
// 		graph.push([i + 1]);
// 		// Add an edge that connects this node to our attach_node
// 		graph[attach_node_index].push(i + 1);
// 	} else {
// 		// Choose another random node
// 		var random_node_index = Math.floor(Math.random() * graph.length)
// 		if (random_node_index != attach_node_index) {
// 			graph[attach_node_index].push(random_node_index);
// 		}
// 	}
// }
// console.log(graph);

fs.writeFileSync('random_graph2.json', JSON.stringify(graph));
