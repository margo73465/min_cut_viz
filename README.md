# Visualization of the Karger Minimum Cut Algorithm

---

The [Karger Minimum Cut Algorithm](http://en.wikipedia.org/wiki/Karger%27s_algorithm) is a randomized algorithm for finding the minimum cut of a connected graph. I encountered it in the [Coursera Algorithms](https://www.coursera.org/course/algo) course and thought that it would be a good candidate for visualization using the force layout in [D3.js](http://d3js.org/). 

In fact, visualizing the homework assignment graph allowed me to find a minimum cut using the classic algorithmic technique of "just looking at it." Nonetheless, being of the opinion that seeing things makes them unbelievably easier to understand, and inspired by [this work](http://bost.ocks.org/mike/algorithms/) by Mike Bostock, I was hooked on the idea of actually showing the how the process worked. 

### The Algorithm

While there are more than 2 nodes:

1. Choose a random edge
2. Merge the two nodes on either end of it (any edges connected to either node are now connected to the merged node)
3. Remove self-loops

In the end you will have two nodes with a lot of edges between them. These edges represent a cut of the graph (not necessarily the minimum cut). You then repeat this simple algorithm until you have a sufficiently high probability that one of your cuts is a minimum cut. 

For instance, if n = number of nodes then running the algorithm n^2 times will reduce your probability of failure to 1/n. This is a probabilistic algorithm, so you can't ever be totally sure that you have found it.  

##### Why/How is this method better than just choosing random cuts?

The improvements that come from this algorithm primarily come from the simple fact of choosing an edge. You are more likely to contract two nodes that are highly connected because there simply are more edges between them. The number of possible cuts in a graph with is 2^n, so your probability of getting a minimum cut is roughly 1/2^n (depending on how many min cuts there are). Whereas, with this contraction algorithm, your probability of finding a minimum cut is roughly 1/n^2 -- much better!
  

### The Visualization

The visualization is only intended to show a single iteration of the algorithm (basically one random contraction), and not the probabilistic justification for the algorithm (though that may come later). I currently have a random graph generator to give us something to work with. I also have a visualization set up to show any random graph input as a force layout. And finally, I have implemented the algorithm, and you can watch it progress in a random graph.

##### Still to do: 
* Color the randomly selected edge, and the nodes that are about to be contracted
* Use a D3 transition to show the contraction
* Have self-loop edges curve around and stay attached to the nodes as they merge (non-trivial)
* Show the self-loops being removed (another D3 transition)
* Once the graph has been reduced to two nodes, allow the user to click on the nodes, and have them expand back out to the original graph, nodes grouped by the cut (to be honest, I don't know how to do this yet, and I think it will be hard, but there has to be a way!)



