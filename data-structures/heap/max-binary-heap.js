class MaxBinaryHeap {
    
    constructor() {
        this.values = [];
    }

    insert(element) {
        this.values.push(element);
        this.bubbleUpLastElement();
    }

    bubbleUpLastElement() {
        let newElementIdx = this.values.length - 1;

        while(true) {
            let parentIdx = Math.floor((newElementIdx - 1) / 2);
    
            if(this.values[newElementIdx] <= this.values[parentIdx] || parentIdx < 0) return;
            [this.values[newElementIdx], this.values[parentIdx]] = [this.values[parentIdx], this.values[newElementIdx]];
            newElementIdx = parentIdx;
        }

    }

    // remove and return the root value then adjust your heap...
    extractMax() {
        if(this.values.length === 0) return null;
        if(this.values.length === 1) return this.values.pop();

        const max = this.values[0];
        this.values[0] = this.values.pop();
        // bubble-down the new root element...
        this.bubbleDownFirstElement();
        return max;
    }

    bubbleDownFirstElement() {
        let idx = 0;
        let idxLeftChild = 2 * idx + 1;
        let idxRightChild = 2 * idx + 2;
        let idxBiggerChild = this.values[idxLeftChild] > this.values[idxRightChild] ? idxLeftChild : idxRightChild;

        while(this.values[idxBiggerChild] && this.values[idx] < this.values[idxBiggerChild]) {
            [this.values[idx], this.values[idxBiggerChild]] = [this.values[idxBiggerChild], this.values[idx]];
            idx = idxBiggerChild;
            idxLeftChild = 2 * idx + 1;
            idxRightChild = 2 * idx + 2;
            idxBiggerChild = this.values[idxLeftChild] > this.values[idxRightChild] ? idxLeftChild : idxRightChild;
        }
    }

}