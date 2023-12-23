// https://leetcode.com/problems/cache-with-time-limit/ (30-day-javascript-challenge)

var TimeLimitedCache = function() {
  this.cache = new Map();
};

/**
 * @param {number} key 
 * @param {number} value 
 * @param {number} duration until expiration in ms
 * @return {boolean} if un-expired key already existed
 */
TimeLimitedCache.prototype.set = function(key, value, duration) {
  let timeoutId;
  if(!this.cache.has(key)) {
    // key does not exists
    timeoutId = setTimeout(() => this.cache.delete(key), duration);
    this.cache.set(key, [value, timeoutId]);
    return false;
  } else {
    // key does exists already
    clearTimeout(this.cache.get(key)[1]); // clear the old timeout
    timeoutId = setTimeout(() => this.cache.delete(key), duration);
    this.cache.set(key, [value, timeoutId]);
    return true;
  }
};

/**
 * @param {number} key
 * @return {number} value associated with key
 */
TimeLimitedCache.prototype.get = function(key) {
  return this.cache.has(key) ? this.cache.get(key)[0] : -1;
};

/**
 * @return {number} count of non-expired keys
 */
TimeLimitedCache.prototype.count = function() {
  return this.cache.size;
};

/**
 * Your TimeLimitedCache object will be instantiated and called as such:
 * var obj = new TimeLimitedCache()
 * obj.set(1, 42, 1000); // false
 * obj.get(1) // 42
 * obj.count() // 1
 */
