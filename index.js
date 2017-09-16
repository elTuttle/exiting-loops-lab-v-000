function breakOut(array,changeValue,stopValue){
  for(var i = 0; i < (array.length - 1); i ++){
    if(array[i] === stopValue){
      break;
    }else{
      array[i] = changeValue
    }
  }

  return array
}

function keepGoing(array,changeValue,skipValue){
  for(var i = 0; i < (array.length); i ++){
    if(array[i] === skipValue){
      continue;
    }else{
      array[i] = changeValue
    }
  }

  return array
}

function findBy(array, findFn){
  function value(){
    return findfn
  }
  for(var i = 0; i < (array.length); i ++){
    if(array[i] === value){
      return value
    }
  }

  return null
  
}
