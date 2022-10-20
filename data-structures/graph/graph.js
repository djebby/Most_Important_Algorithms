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
  
  depthFirstTraverseRecursively(startingVtxKey) {
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

  depthFirstTraverseIteratively(startingVtxKey) {
    if(!this.vertices[startingVtxKey])
        throw new Error("key of the vertex does not exist!");
    
    const stack = [startingVtxKey], visitedVertices = new Set(startingVtxKey), result = [];    

    while(stack.length > 0) {
      
      const currentVtx = stack.pop();
      result.push(currentVtx);
      
      for(const neighbor of this.adjacencyList[currentVtx]) {
        if(!visitedVertices.has(neighbor)) {
          stack.push(neighbor);
          visitedVertices.add(neighbor);
        }
      }

    }

    return result;
  }

  breadthFirstTraverse(startingVtxKey) {
    const queue = [startingVtxKey], visitedVertices = new Set(startingVtxKey), result = [];

    while(queue.length > 0) {

      const currentVtx = queue.shift();
      result.push(currentVtx);

      for(const neighbor of this.adjacencyList[currentVtx]) {
        if(!visitedVertices.has(neighbor)) {
          queue.push(neighbor);
          visitedVertices.add(neighbor);
        }
      }
    }

    return result;
  }

}
