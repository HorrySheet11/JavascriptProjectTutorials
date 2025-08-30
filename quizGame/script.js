let questions = [
  {
    category:"Color",
    question:"Favorite color?",
    choices:["Red", "Blue", "Yellow"],
    answer:"Blue"
  },
  {
    category:"Animal",
    question:"Favorite animal?",
    choices:["Owl", "Dog", "Cat"],
    answer:"Dog"
  },
  {
    category:"Movies",
    question:"Favorite movie?",
    choices:["The Book of Life", "Pacific Rim", "Hotel Transilvania"],
    answer:"The Book of Life"
  },
  {
    category:"Tech",
    question:"One gigabyte is equal to how many megabytes?",
    choices:["1000", "10", "1"],
    answer:"1000"
  },
  {
    category:"Age",
    question:"How old are you?",
    choices:["1", "2","3"],
    answer:"3"
  }
];

let randomQuestionNum = Math.floor(Math.random() * 5);
let randomChoiceNum = Math.floor(Math.random() * 3);


function getRandomQuestion(arr){
  if (arr === undefined){
    return 'No array given.'
  }else{
     return arr[randomQuestionNum];
  }
}

function getRandomComputerChoice(arr){ 
 return arr[randomChoiceNum];;
}


function getResults(randomQuest,randomChoice){
  if (randomQuest.answer == randomChoice){
    return "The computer's choice is correct!"
  }else{
    return `The computer's choice is wrong. The correct answer is: ${randomQuest.answer}`
  }
}

