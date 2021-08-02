/**
 * initialize your data structure here.
 */
var MinStack = function() {
    this.stack = [];
    this.length = 0;
};

/** 
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function(val) {
    this.stack.push(val);
    this.length ++;
  console.log(this.stack);
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
  this.stack.splice(-1, 1);
  this.length --;
  console.log(this.stack)
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
  return this.stack[this.length-1];
  console.log(this.stack)
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
  let min = this.stack[0];
    for (let i = 1; i < this.stack.length; i++) {
      if (this.stack[i] < min) {
        min = this.stack[i]
      }
    }
  console.log(this.stack)
  return min;
};

/** 
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */