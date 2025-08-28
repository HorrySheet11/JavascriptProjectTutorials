function addLunchToEnd(arr, str){
  arr.push(str);
  console.log(`${str} added to the end of the lunch menu.`)
  return arr;
}

function addLunchToStart(arr,str){
  arr.unshift(str);
  console.log(`${str} added to the start of the lunch menu.`)
  return arr;
}

function removeLastLunch(arr){
  if (arr == 0){
    console.log("No lunches to remove.");
  }else{
    let remove = arr.pop();
  console.log(`${remove} removed from the end of the lunch menu.`)
  return arr;
    }
  }

function removeFirstLunch(arr){
  if (arr == 0){
    console.log("No lunches to remove.");
  }else{
    let remove = arr.shift();
  console.log(`${remove} removed from the start of the lunch menu.`)
  return arr;
    }
}

function getRandomLunch(arr){
  if (arr.length == 0){
   console.log("No lunches available.");
  }else{
    let random = Math.floor(Math.random() * arr.length);
    let randomLunch=arr[random];
    console.log(`Randomly selected lunch: ${randomLunch}`) ;
  }
}

function showLunchMenu(arr){
  if (arr  == 0){
    console.log("The menu is empty.");
  }else{
    let joined = arr.join(", ");
    console.log(`Menu items: ${joined}`);
  }
}


let lunches = ["Sushi", "Pizza", "Burger"];
getRandomLunch(lunches);
