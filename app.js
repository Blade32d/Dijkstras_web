let V = 5;
function minDistance(dist,sptSet)
{
	let min = Number.MAX_VALUE;
	let min_index = -1;
	
	for(let v = 0; v < V; v++)
	{
		if (sptSet[v] == false && dist[v] <= min)
		{
			min = dist[v];
			min_index = v;
		}
	}
	return min_index;
}
function printSolution(dist)
{
	for(let i = 0; i < V; i++)
	{
		const item = document.createElement("h2");
    	item.textContent = "Disatance from the selected node is :-"+dist[i];
    	document.getElementById("result").appendChild(item);
	}
}
function dijkstra(graph, src)
{
	let dist = new Array(V);
	let sptSet = new Array(V);
	for(let i = 0; i < V; i++)
	{
		dist[i] = Number.MAX_VALUE;
		sptSet[i] = false;
	}
	dist[src] = 0;
	for(let count = 0; count < V - 1; count++)
	{
		let u = minDistance(dist, sptSet);
		sptSet[u] = true;
		for(let v = 0; v < V; v++)
		{
			if (!sptSet[v] && graph[u][v] != 0 &&
				dist[u] != Number.MAX_VALUE &&
				dist[u] + graph[u][v] < dist[v])
			{
				dist[v] = dist[u] + graph[u][v];
			}
		}
	}
	printSolution(dist);
}

const graph = [
    [0, 4, 2, 0, 0],
    [4, 0, 1, 1, 0],
    [2, 1, 0, 0, 3],
    [0, 1, 0, 0, 6],
    [0, 0, 3, 6, 0]
  ];
  
  document.getElementById('node0').addEventListener('click', () => selectNode(0));
  document.getElementById('node1').addEventListener('click', () => selectNode(1));
  document.getElementById('node2').addEventListener('click', () => selectNode(2));
  document.getElementById('node3').addEventListener('click', () => selectNode(3));
  document.getElementById('node4').addEventListener('click', () => selectNode(4));
  
//   function selectNode(node) {
//     dijkstra(graph,node)
//   }

function selectNode(node) {
	
	const resultDiv = document.getElementById("result");
	while (resultDiv.firstChild) {
	  resultDiv.removeChild(resultDiv.firstChild);
	}
	dijkstra(graph, node);
  }
  
  


  