function chunkArrayInGroups(arr,num){
  let length = arr.length;  
  let arr1 = [];
  let newArr = [];
  for(let i = 1; i <= length +3;i++){
    if(arr1.length == num){
      newArr.push(arr1);
      console.log(`newArr: ${newArr}`)
      arr1 = [];
      if(arr.length <= num){
        console.log('poop')
        newArr.push(arr)
        console.log('other return')
        return newArr;
        break;
      }else{
        
      }
    }else{
      let elem = arr.shift();
      arr1.push(elem);
      console.log(`arr1: ${arr1}`)
    }
  console.log(`arr1 length: ${arr1.length}`)  
  }
  newArr.push(arr)
  return newArr;
}

console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 2));
