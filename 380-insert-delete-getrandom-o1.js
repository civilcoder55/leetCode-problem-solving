var RandomizedSet = function () {
    this.hash = {}
    this.arr = []
};

/** 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.insert = function (val) {
    if (this.hash[val] == undefined) {
        this.hash[val] = this.arr.length
        this.arr.push(val)
        return true;
    }
    return false;
};

/** 
 * @param {number} val
 * @return {boolean}
 */


RandomizedSet.prototype.remove = function (val) {
    let idx = this.hash[val]
    if (idx != undefined) {
        let temp = this.arr[this.arr.length - 1]
        this.arr[this.arr.length - 1] = this.arr[idx]
        this.arr[idx] = temp
        this.hash[temp] = idx

        this.arr.pop()
        delete this.hash[val]
        return true;
    }
    return false;
};

/**
 * @return {number}
 */
RandomizedSet.prototype.getRandom = function () {
    return this.arr[this.randomInt(0, this.arr.length - 1)]
};



RandomizedSet.prototype.randomInt = function (min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

/** 
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */
