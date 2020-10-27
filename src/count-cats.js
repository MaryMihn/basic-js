const CustomError = require("../extensions/custom-error");

module.exports = function countCats(array) {
  throw new CustomError('Not implemented');
  let b = array.flat(Infinity)
  let cats = b.filter(arr => arr==='^^')
  if(cats.length === 0){
    return 0
  } else{
    return cats.length 
  }
};
