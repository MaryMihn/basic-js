const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth( arr ) {
    // throw new CustomError('Not implemented');
    let count = 1;
    if(arr.length===0){
      return 1
    }
    else {
        for (let i=0; i < arr.length;  i++) {
          if (arr[i].constructor === Array) {
            count++
            let b = arr.flat(1)
            if (b.constructor === Array) {
              calculateDepth( b )
            }
          }
        }
        }
       return count;
    }
}