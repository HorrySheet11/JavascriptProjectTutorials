function mutation(arr){
  let word1 = arr[0].toLowerCase();
  let word2 = arr[1].toLowerCase().split('');
  let matches = 0;
  for (let char of word2){
    if (word1.includes(char)){
      matches+=1;
    }
  }
  console.log(word1);
  console.log(word2);
  console.log(matches);
  if (matches == word2.length){
    return true;
  }else{
    return false;
  }
}


console.log(mutation(["hello", "hey"]))
