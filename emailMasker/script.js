function maskEmail(arg){
  
  let index=arg.indexOf("@") - 1;
  let cut=arg.slice(1, index);
  let asterisk="*";
  let asteriskRepeat= asterisk.repeat(cut.length);
  let newStr = arg.slice(0, 1) + asteriskRepeat + arg.slice(index);
  return newStr;
}

let email="example@email.com"

console.log(maskEmail(email));
