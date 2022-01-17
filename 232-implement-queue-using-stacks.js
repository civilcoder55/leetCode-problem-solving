
var MyQueue = function() {
    this.firstStack = []
    this.secondStack = []
};

/** 
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function(x) {
    
        let temp = this.secondStack.pop()
        
         while(temp){
             this.firstStack.push(temp)
             temp = this.secondStack.pop()
         }
    
        this.firstStack.push(x)
        temp = this.firstStack.pop()
         while(temp){
             this.secondStack.push(temp)
             temp = this.firstStack.pop()
         }
         
};

/**
 * @return {number}
 */
MyQueue.prototype.pop = function() {
     return this.secondStack.pop()
};

/**
 * @return {number}
 */
MyQueue.prototype.peek = function() {
    return this.secondStack[this.secondStack.length - 1 ]
};

/**
 * @return {boolean}
 */
MyQueue.prototype.empty = function() {
    return this.secondStack.length == 0
};

/** 
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */
