let year = 1900;


function isLeapYear(yr){
  
  if( ((yr % 4)=== 0) && !((yr % 100)=== 0) ||  ((yr % 400)=== 0) ){
     return `${yr} is a leap year.`;
  }
  
  else{
    return `${yr} is not a leap year.`;
  }
}

let result = isLeapYear(year)
console.log(result);

