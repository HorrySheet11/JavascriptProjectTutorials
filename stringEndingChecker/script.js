function confirmEnding(str,end){
  let text=str.substring(str.length - end.length);
  console.log(end);
  console.log(text);
  if(end === text){
    return true;
  }
  else{
    return false;
  }
  
}


console.log(confirmEnding("Connor", "n"));

