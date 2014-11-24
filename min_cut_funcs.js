function find_and_replace(edges, object, replacement) {

	for (var i = 0; i < edges.length; i++) {
		if (edges[i].source.index == object.index) {
			edges[i].source = replacement;
		} else if (edges[i].target.index == object.index) {
			edges[i].target = replacement;
		}

		if (edges[i].target.index > edges[i].source.index) {
			var temp = edges[i].source;
			edges[i].source = edges[i].target;
			edges[i].target = temp;
		}

	}
	return edges;
}

function remove_self_loops(edges) {
	
	for (var i = edges.length - 1; i >= 0; i--) {
		if (edges[i].source.index == edges[i].target.index) {
			edges.splice(i,1);
		}
	}
	return edges;
}