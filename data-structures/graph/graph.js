class Graph {
  // Undirected Graph
  constructor() {
    this.vertices = {};
    this.adjacencyList = {};
  }

  addVertex(key, value) {
    if (this.vertices[key])
        throw new Error("Vertex with this key already exist");
    this.vertices[key] = value;
    this.adjacencyList[key] = new Set();
  }

  addEdge(firstVertexKey, secondVertexKey) {
    // to add a new edge between two vetices we need first to check if the
    // firstVertexKey and the secondVertexKey are already exist in our graph
    if (!this.vertices[firstVertexKey] || !this.vertices[secondVertexKey])
      throw new Error("key of one vertex or both does not exist!");

    this.adjacencyList[firstVertexKey].add(secondVertexKey);
    this.adjacencyList[secondVertexKey].add(firstVertexKey);
  }

  removeVertex(key) {
    if (!this.vertices[key])
      throw new Error("key of the vertex does not exist!");

    for (const vertexKey of this.adjacencyList[key])
      this.adjacencyList[vertexKey].delete(key);

    Reflect.deleteProperty(this.adjacencyList, key);
    Reflect.deleteProperty(this.vertices, key);
  }

  removeEdge(firstVertexKey, secondVertexKey) {
    // to remove an edge between two vetices we need first to check if the
    // firstVertexKey and the secondVertexKey are already exist in our graph
    if (!this.vertices[firstVertexKey] || !this.vertices[secondVertexKey])
      throw new Error("key of one vertex or both does not exist!");

    this.adjacencyList[firstVertexKey].delete(secondVertexKey);
    this.adjacencyList[secondVertexKey].delete(firstVertexKey);
  }
  
  depthFirstTraverse(startingVtxKey) {
    if(!this.vertices[startingVtxKey])
        throw new Error("key of the vertex does not exist!");
    
    let result = [], visitedVertices = {};

    (function dfsRecursive(vtxKey, adjList) {
        
        if(!adjList[vtxKey]) return;

        result.push(vtxKey);
        visitedVertices[vtxKey] = true;

        for(const neighbor of adjList[vtxKey])
            if(!visitedVertices[neighbor])
                dfsRecursive(neighbor, adjList);
        
    })(startingVtxKey, this.adjacencyList);

    return result;
  }
}
