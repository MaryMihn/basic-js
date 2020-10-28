const CustomError = require("../extensions/custom-error");

module.exports = function transform( arr) {
  // throw new CustomError('Not implemented');
  if(!Array.isArray(arr)){
    throw new Error()
  }

  if(arr.length===0){
    return arr
  }
  if(arr.includes('--double-prev')===false&& arr.includes('--double-next')===false&&arr.includes('--discard-prev')===false&&arr.includes('--discard-next')===false){
    return arr
  } else {
    let array = []
    Object.assign(array, arr)
  
    let discnext = array.findIndex(ar=> ar ==='--discard-next');
    let discprev= array.findIndex(ar=>ar ==='--discard-prev');
    let doubprev=array.findIndex(ar=>ar==='--double-prev');
    let doubnext=array.findIndex(ar=>ar==='--double-next')
    
  
    if(arr.includes('--discard-next')){
      if (discnext !== array.length-1){
        array.splice(discnext, 2);
      }else {
        array.splice(discnext, 1);
      }
      return array
    }
    if(array.includes('--discard-prev')){
      if (discprev !== 0){
        array.splice(discprev-1, 2);
      }else {
        array.splice(discprev, 1);
      }
      return array
    }
    if(arr.includes('--double-next')){
      if (doubnext === array.length-1){
        array.splice(doubnext, 1);
      }else {
        array.splice(doubnext, 1, array[doubnext+1]);
      }
      return array
    }
    if(array.includes('--double-prev')){
      if (doubprev===0){
        array.splice(doubprev, 1);
      }else {
        array.splice(doubprev, 1, array[doubprev-1]);
      }
      return array
    }
  }
 
  if(array.includes('--double-prev')|| array.includes('--double-next')||array.includes('--discard-prev')||array.includes('--discard-next')){
    transform( array)
  }

};

 
