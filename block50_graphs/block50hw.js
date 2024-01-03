/* 
You are a network designer entrusted with the responsibility of designing a computer network for a small office. 
The office consists of multiple rooms, and your goal is to connect them using the least amount of cable, ensuring that each room is connected to the network. 
You need to analyze the office layout, identify the rooms, and plan the most efficient way to connect them with cables. 
The objective is to minimize the required cable length while ensuring every room is connected to the network.

Your task is to apply Prim's graph-based algorithm, which starts with an initial room and progressively adds neighboring 
rooms with the shortest cable connections. By iteratively expanding the network, you will create a minimum-cost spanning 
tree that connects all the rooms in the office. Take on the role of the network designer, employ Prim's algorithm, and 
determine the minimum cost of connecting all the rooms in the office using the provided scenario.

Sample Input:- new Edge(0, 1, 4),   new Edge(0, 7, 8),   new Edge(1, 2, 8),   new Edge(1, 7, 11),   new Edge(2, 3, 7),   
new Edge(2, 8, 2),   new Edge(2, 5, 4),   new Edge(3, 4, 9),   new Edge(3, 5, 14),   new Edge(4, 5, 10),   
new Edge(5, 6, 2),   new Edge(6, 7, 1),   new Edge(6, 8, 6),   new Edge(7, 8, 7) 
in the format of (edge pairs, weights) with a total number of 9 vertices.

Sample Output: Minimum cost to connect all rooms: 37 */

class Edge {
    constructor(src, dest, weight) {
        this.src = src;
        this.dest = dest;
        this.weight = weight;
    }
}

class Prim {
    static primMinimumCost(edges, vertices) {
        let totalCost = 0;
        const selectedVertices = new Set();
        const priorityQueue = [];

        // Start with the first vertex (0)
        const startVertex = 0;
        selectedVertices.add(startVertex);

        // Add all edges connected to the start vertex to the priority queue
        priorityQueue.push(...Prim.getEdges(edges, startVertex));

        while (priorityQueue.length > 0) {
            // Get the edge with the smallest weight
            priorityQueue.sort((a, b) => a.weight - b.weight);
            const currentEdge = priorityQueue.shift();

            // Check if adding this edge forms a cycle
            if (!selectedVertices.has(currentEdge.dest)) {
                // Add the edge to the minimum spanning tree
                totalCost += currentEdge.weight;

                // Add the destination vertex to the selected set
                selectedVertices.add(currentEdge.dest);

                // Add all edges connected to the destination vertex to the priority queue
                priorityQueue.push(...Prim.getEdges(edges, currentEdge.dest));
            }
        }

        return totalCost;
    }

    static getEdges(edges, vertex) {
        return edges.filter(edge => edge.src === vertex || edge.dest === vertex);
    }
}

// Sample input
const edges = [
    new Edge(0, 1, 4),   new Edge(0, 7, 8),   new Edge(1, 2, 8),
    new Edge(1, 7, 11),  new Edge(2, 3, 7),   new Edge(2, 8, 2),
    new Edge(2, 5, 4),   new Edge(3, 4, 9),   new Edge(3, 5, 14),
    new Edge(4, 5, 10),  new Edge(5, 6, 2),   new Edge(6, 7, 1),
    new Edge(6, 8, 6),   new Edge(7, 8, 7)
];

const vertices = 9;

const minimumCost = Prim.primMinimumCost(edges, vertices);

console.log("Minimum cost to connect all rooms:", minimumCost);

/*
You are an aspiring computer scientist tasked with creating a function that can find the shortest path between two locations in a graph. 
The graph represents various locations and the roads connecting them, with each road having a specific distance associated with it. 
Your goal is to create a function called bfsShortestPath (graph, source, target) that takes in the graph, 
the source node (representing the traveler's current location), and the target node (representing the traveler's destination). 
The function should return an array representing the shortest path from the source to the target.

The graph is represented using an adjacency list. This means that each location in the graph is a node, and the roads connecting 
them are represented as edges. The adjacency list stores the neighboring nodes for each node, allowing you to traverse the graph 
efficiently. Your task is to create a bfsShortestPath function, utilizing the Breadth-First Search (BFS) algorithm to find the shortest 
path from the source to the target. The function should return an array that represents the shortest path, starting from the source and 
ending at the target.

Sample Input: A: ['B', 'C'],   B: ['A', 'D', 'E'],   C: ['A', 'F'],   D: ['B'],   E: ['B', 'F'],   F: ['C', 'E'], 
in the format of Vertices: (neighboring nodes) and source node will be A and Destination node will be F

Sample Output: Shortest path from A to F: [ 'A', 'C', 'F' ] */

function bfsShortestPath(graph, source, target) {
    const visited = new Set();
    const queue = [[source, [source]]];

    while (queue.length > 0) {
        const [currentNode, currentPath] = queue.shift();

        if (currentNode === target) {
            return currentPath;
        }

        if (!visited.has(currentNode)) {
            visited.add(currentNode);

            for (const neighbor of graph[currentNode]) {
                if (!visited.has(neighbor)) {
                    queue.push([neighbor, [...currentPath, neighbor]]);
                }
            }
        }
    }

    // If no path is found
    return null;
}

// Sample input
const graph = {
    A: ['B', 'C'],
    B: ['A', 'D', 'E'],
    C: ['A', 'F'],
    D: ['B'],
    E: ['B', 'F'],
    F: ['C', 'E']
};

const sourceNode = 'A';
const targetNode = 'F';

// Find the shortest path
const shortestPath = bfsShortestPath(graph, sourceNode, targetNode);


console.log("Shortest path from", sourceNode, "to", targetNode + ":", shortestPath);


/* You are a cab driver in Boston, and you receive a request to pick up a passenger from a specific location.
Your task is to find all possible routes to reach the passenger's location using the Depth First Search (DFS) algorithm in JavaScript. 
You need to implement the Depth First Search algorithm to find all possible routes from your current location (the starting node) 
to the passenger's location (the target node). Your goal is to provide a list of all possible routes. 
Implement the dfsAllRoutes(graph, source, target) function in JavaScript that takes the graph, the source node (your current location), 
and the target node (the passenger's location) as input. The function should return an array of all possible routes from the source 
to the target.

Sample Input:  A: ["B", "C"],   B: ["A", "D", "E"],   C: ["A", "F"],   D: ["B"],   E: ["B", "F"],   F: ["C", "E"],  
in the format of Vertices: (neighboring nodes) and source node will be A and Destination node will be F.

Sample Output: All possible routes from A to F: [ [ 'A', 'B', 'E', 'F' ], [ 'A', 'C', 'F' ] ] */

function bfsShortestPath(graph, source, target) {
    const visited = new Set();
    const queue = [[source, [source]]];

    while (queue.length > 0) {
        const [currentNode, currentPath] = queue.shift();

        if (currentNode === target) {
            return currentPath;
        }

        if (!visited.has(currentNode)) {
            visited.add(currentNode);

            for (const neighbor of graph[currentNode]) {
                if (!visited.has(neighbor)) {
                    queue.push([neighbor, [...currentPath, neighbor]]);
                }
            }
        }
    }

    // If no path is found
    return null;
}

// Sample input
const graph1 = {
    A: ['B', 'C'],
    B: ['A', 'D', 'E'],
    C: ['A', 'F'],
    D: ['B'],
    E: ['B', 'F'],
    F: ['C', 'E']
};

const sourceNode1 = 'A';
const targetNode1 = 'F';

// Find the shortest path
const shortestPath1 = bfsShortestPath(graph1, sourceNode1, targetNode1);


console.log("Shortest path from", sourceNode1, "to", targetNod1e + ":", shortestPath1);


/* Imagine you are developing a navigation system for a delivery robot that needs to navigate through a city to deliver packages efficiently. 
The city is represented as a graph, where each point is a location, and the edges between points represent the routes that the robot can take. 
Each edge has a weight associated with it, representing the distance or time required to travel from one point to another. The goal is to use Dijkstra's algorithm in 
JavaScript to calculate the shortest path for the robot, optimizing package delivery.

In this scenario, the graph representing the city is as follows:

Point A connects to Point B with a weight of 5.

Point A connects to Point C with a weight of 2.

Point B connects to Point D with a weight of 4.

Point B connects to Point E with a weight of 2.

Point C connects to Point B with a weight of 8.

Point C connects to Point E with a weight of 7.

Point D connects to Point E with a weight of 6.

Point D connects to Point F with a weight of 3.

Point E connects to Point F with a weight of 1.

 

Sample Input:  A: { B: 5, C: 2 },   B: { D: 4, E: 2 },   C: { B: 8, E: 7 },   D: { E: 6, F: 3 },   E: { F: 1 },   F: {}, const startNode = "A"; const endNode = "F";

Sample Output: Shortest path: A -> B -> E -> F and Distance: 8 */


class Graph {
    constructor() {
        this.nodes = {};
    }

    addNode(name, neighbors) {
        this.nodes[name] = neighbors;
    }

    dijkstra(startNode, endNode) {
        const distances = {};
        const previous = {};
        const priorityQueue = new PriorityQueue();

        // Initialize distances and queue
        for (const node in this.nodes) {
            distances[node] = node === startNode ? 0 : Infinity;
            priorityQueue.enqueue(node, distances[node]);
            previous[node] = null;
        }

        while (!priorityQueue.isEmpty()) {
            const current = priorityQueue.dequeue();

            if (current === endNode) {
                // Reconstruct the path
                const path = [];
                let node = endNode;
                while (node !== null) {
                    path.unshift(node);
                    node = previous[node];
                }

                // Calculate distance
                const distance = distances[endNode];

                return { path, distance };
            }

            for (const neighbor in this.nodes[current]) {
                const newDistance = distances[current] + this.nodes[current][neighbor];

                if (newDistance < distances[neighbor]) {
                    distances[neighbor] = newDistance;
                    previous[neighbor] = current;
                    priorityQueue.enqueue(neighbor, newDistance);
                }
            }
        }

        // If no path is found
        return null;
    }
}

class PriorityQueue {
    constructor() {
        this.queue = [];
    }

    enqueue(node, distance) {
        this.queue.push({ node, distance });
        this.sort();
    }

    dequeue() {
        return this.queue.shift().node;
    }

    isEmpty() {
        return this.queue.length === 0;
    }

    sort() {
        this.queue.sort((a, b) => a.distance - b.distance);
    }
}

// Sample input
const graph2 = new Graph();

graph2.addNode("A", { B: 5, C: 2 });
graph2.addNode("B", { D: 4, E: 2 });
graph2.addNode("C", { B: 8, E: 7 });
graph2.addNode("D", { E: 6, F: 3 });
graph2.addNode("E", { F: 1 });
graph2.addNode("F", {});

const startNode = "A";
const endNode = "F";

// Calculate the shortest path using Dijkstra's algorithm
const result = graph2.dijkstra(startNode, endNode);

// Output the result
if (result) {
    const { path, distance } = result;
    console.log("Shortest path:", path.join(" -> "), "and Distance:", distance);
} else {
    console.log("No path found.");
}
