class HashTable {
  constructor(size = 97) {
    this.keyMap = Array.from({ length: size }, () => []);
  }

  // SET WITH SEPARATE CHAINING AS COLLISION STRATEGIES...
  set(key, value) {
    const index = this._hash(key);

    if (this.get(key)) {
      // in case that the key is already exist...
      for (let i = 0; i < this.keyMap[index].length; i++) {
        if (this.keyMap[index][i][0] === key) {
          this.keyMap[index][i][1] = value;
          return;
        }
      }
    }
    this.keyMap[index].push([key, value]);
  }

  get(key) {
    const index = this._hash(key);
    if (this.keyMap[index].length === 0) return undefined;
    const nestedArr = this.keyMap[index].find(
      (nestedArr) => nestedArr[0] === key
    );
    if (nestedArr === undefined) return undefined;
    return nestedArr[1];
  }

  values() {
    const values = [];
    for (const nestedArray of this.keyMap)
      if (nestedArray.length > 0)
        for (let i = 0; i < nestedArray.length; i++)
          values.push(nestedArray[i][1]);

    return values;
  }

  keys() {
    const keys = [];
    for (const nestedArray of this.keyMap)
      if (nestedArray.length > 0)
        for (let i = 0; i < nestedArray.length; i++)
          keys.push(nestedArray[i][0]);
    return keys;
  }

  _hash(key) {
    let total = 0;
    let WEIRD_PRIME = 31;
    for (let i = 0; i < Math.min(key.length, 100); i++) {
      let char = key[i];
      let value = char.charCodeAt(0) - 96;
      total = (total * WEIRD_PRIME + value) % this.keyMap.length;
    }
    return total;
  }
}
