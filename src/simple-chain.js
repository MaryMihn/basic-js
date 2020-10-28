const CustomError = require("../extensions/custom-error");

const chainMaker = {
  getLength() {

    // throw new CustomError('Not implemented');
    // remove line with error and write your code here
    return this.split('~~').length
  },
  addLink(value) {
    // throw new CustomError('Not implemented');
    // remove line with error and write your code here
        if(value == undefined){
           this + '()'
        } else{
           this + value
        }
  },
  removeLink(position) {
    // throw new CustomError('Not implemented');
    // remove line with error and write your code here
  },
  reverseChain() {
    // throw new CustomError('Not implemented');
    // remove line with error and write your code here
    return this.reverse()
  },
  finishChain() {
    // throw new CustomError('Not implemented');
    // remove line with error and write your code here
    return this.join('~~')
  }
};

module.exports = chainMaker;
