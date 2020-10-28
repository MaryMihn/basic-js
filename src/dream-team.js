const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(array) {
  // throw new CustomError('Not implemented');
  if(Array.isArray(array)===true){
    let arrFilter = array.filter(arr => typeof(arr)==='string')
    let arrUpper = arrFilter.map(arr=>arr.toUpperCase().trim())
    let arrSort = arrUpper.sort();
    return arrSort.map(str=>str[0]).join('')
  }
  else{
    return false
  }
};
