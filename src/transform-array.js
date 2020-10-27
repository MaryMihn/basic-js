const CustomError = require("../extensions/custom-error");

module.exports = function transform( arr) {
  // throw new CustomError('Not implemented');
  if(Array.isArray(arr)===false){
    throw new Error()
  }

  if(arr.length===0){
    return arr
  }

  let array = []
  Object.assign(array, arr)
  if(array.includes('--double-prev')===false&& arr.includes('--double-next')===false&&array.includes('--discard-prev')===false&&arr.includes('--discard-next')===false){
    return arr
  }
  if(arr.includes('--discard-next')){
    let a = array.findIndex(ar=> ar ==='--discard-next')
    if (a !== array.length){
      array.splice(a, 2);
    }else {
      array.splice(a, 1);
    }
    return array
  }
  if(array.includes('--discard-prev')){
    let a = array.findIndex(ar=>ar ==='--discard-prev')
    if (a !== 0){
      array.splice(a-1, 2);
    }else {
      array.splice(a, 1);
    }
    return array
  }
  if(arr.includes('--double-next')){
    let a = array.findIndex(ar=>ar==='--double-next')
    if (a !==array.length){
      array.splice(a, 1, array[a+1]);
    }else {
      array.slice(a, 1);
    }
    return array
  }
  if(array.includes('--double-prev')){
    let a = array.findIndex(ar=>ar==='--double-prev')
    if (a===0){
      array.splice(a, 1);
    }else {
      array.splice(a, 1, array[a-1]);
    }
    return array
  }

};
