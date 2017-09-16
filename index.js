function breakOut(array,changeValue,stopValue){
  array.forEach((el, i) => {
    if(array[i] === stopValue){
      break
    }else{
      array[i] = changeValue
    }
  })
}