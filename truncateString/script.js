function truncateString(str,num){
  if(str.length > num){
    let shortString = str.slice(0,num);
    return `${shortString}...`
  }
  else{
    return str;
  }
}

console.log(truncateString("A-tisket a-tasket A green and yellow basket", 8));
