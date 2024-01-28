// https://leetcode.com/problems/event-emitter/

class EventEmitter {
  constructor() {
    this.eventSubs = {};
  }

  subscribe(event, cb) {
    if(!this.eventSubs.hasOwnProperty(event)) {
      this.eventSubs[event] = new Set();
    }
    this.eventSubs[event].add(cb);
    return {
        unsubscribe: () => {
          this.eventSubs[event].delete(cb);
        }
    };
  }

  emit(event, args = []) {
    const results = [];
    
    // Set.prototype.forEach()
    // The forEach() method executes a provided function once for each value in the Set object, IN INSERTION order.

    // The nullish coalescing (??) operator is a logical operator that 
    // returns its right-hand side operand when its left-hand side operand is null or undefined,
    // and otherwise returns its left-hand side operand.
    (this.eventSubs[event] ?? [])
      .forEach(cb => results.push(cb(...args)));
    return results;
  }
}

/**
 * const emitter = new EventEmitter();
 *
 * // Subscribe to the onClick event with onClickCallback
 * function onClickCallback() { return 99 }
 * const sub = emitter.subscribe('onClick', onClickCallback);
 *
 * emitter.emit('onClick'); // [99]
 * sub.unsubscribe(); // undefined
 * emitter.emit('onClick'); // []
 */