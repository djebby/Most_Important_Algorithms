// https://leetcode.com/problems/sleep/ (30-day-javascript-challenge)

/**
 * @param {number} millis
 * @return {Promise}
 */
async function sleep(millis) {
  return new Promise((resolve) => setTimeout(resolve.bind(null, Math.random()), millis));
}

/** 
 * let t = Date.now()
 * sleep(100).then(() => console.log(Date.now() - t)) // 100
 */
