function findLongestWordLength(sentence){
  let arr = sentence.split(' ');
  let longest = arr.reduce( function(a,b){
    return a.length > b.length ? a : b;
  }
  );
  return longest.length;
}

console.log(findLongestWordLength("The quick brown fox jumped over the lazy dog"))