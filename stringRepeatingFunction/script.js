function repeatStringNumTimes(str,num){
  let string='';
  for (let i=1;i<=num;i++){
    string+=str;
  }
  return string;
}

console.log(repeatStringNumTimes("*", 3));