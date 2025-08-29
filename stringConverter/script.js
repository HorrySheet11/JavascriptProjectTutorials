function reverseString(str){
  let splited = str.split("");
  let reversed = splited.reverse();
  let joined = reversed.join("");
  return joined;
}

console.log(reverseString("what"));