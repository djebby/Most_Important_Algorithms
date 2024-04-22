// https://leetcode.com/problems/open-the-lock/

/**
 * @param {string[]} deadends
 * @param {string} target
 * @return {number}
 */
var openLock = function(deadends, target) {

  target = Number(target);
  const source = 0;
  const deadendsVtx = new Set(deadends.map(deadend => Number(deadend)));
  // base cases
  if (deadendsVtx.has(source) || getNeighboors(source, deadendsVtx).length === 0 || getNeighboors(target, deadendsVtx).length === 0) {
    return -1;
  }
  const queue = [source];

  let length = 0;
  const visited = new Set([0]);
  while (queue.length > 0) {
    let layerLength = queue.length;
    while (layerLength > 0) {
      const node = queue.shift();
      if (node === target) return length;
      const neighboors = getNeighboors(node, deadendsVtx);
      for (const neighboor of neighboors) {
        if (!visited.has(neighboor)) {
          visited.add(neighboor);
          queue.push(neighboor);
        }
      }
      layerLength -= 1;
    }
    length += 1;
  }


  return -1;
};


const getNeighboors = (vertex, deadendSet) => {
  const digits = [
    Math.floor(vertex / 1000),
    Math.floor((vertex % 1000) / 100),
    Math.floor((vertex % 100) / 10),
    vertex % 10
  ];
  const neighboors = [];

  
  for (let i = 0; i < 4; i += 1) {

    let up = digits.slice();
    let down = digits.slice();

    if (digits[i] === 0) {
      up[i] = 9;
      down[i] = 1;
    } else if (digits[i] === 9) {
      up[i] = 8;
      down[i] = 0;
    } else {
      up[i] -= 1;
      down[i] += 1;
    }

    const upNeighboor = (1000 * up[0] + 100 * up[1] + 10 * up[2] + up[3]);
    const downNeighboor = (1000 * down[0] + 100 * down[1] + 10 * down[2] + down[3]);
    
    if (!deadendSet.has(upNeighboor)) neighboors.push(upNeighboor);
    if (!deadendSet.has(downNeighboor)) neighboors.push(downNeighboor);
  }


  return neighboors;
}
