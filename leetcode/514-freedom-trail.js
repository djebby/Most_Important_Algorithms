// https://leetcode.com/problems/freedom-trail/

/**
 * @param {string} ring
 * @param {string} key
 * @return {number}
 */
var findRotateSteps = function(ring, key) {

  const cache = {};

  const dfs = (r, k) => {
    if (k === key.length) return 0;
    const hash = `${r},${k}`;

    if (Object.hasOwn(cache, hash)) return cache[hash];

    res = Infinity;

    for (let i = 0; i < ring.length; i += 1) {
      if (ring[i] !== key[k]) continue;

      let minDist = Math.min(Math.abs(r - i), ring.length - Math.abs(r - i));
      res = Math.min(res, minDist + 1 + dfs(i, k+1));
    }

    cache[hash] = res;
    return res;
  }

  return dfs(0, 0);
};

