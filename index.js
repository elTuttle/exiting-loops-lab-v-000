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
