//Target-Sum

const targetSumExistsInTwoNumbers = (list, target) => {
  
  for (let i = 0; i < list.length; i++){
    for (let j = i + 1; j < list.length; j++){
      if (list[i] + list[j] === target) {
        return true
      }
    }
  }
  return false
}

//SquareRoot 

const squareRoot = (radicand) => {
  
  const squareRoot = (radicand) => {
    let guess = radicand / 2 - .9; // initial guess 
    let radicandDivideGuess = radicand / guess; // 
    //                    some number
    // guess - answer -- (randicand / guess)
    while (!Number.isInteger(guess)) { // while guess is not an integer
      guess = (guess + radicandDivideGuess) / 2; //average 
      radicandDivideGuess = radicand / guess;
      guess = Number(Number.parseFloat(guess).toFixed(5));
    }
    return guess;
  };
  console.log(squareRoot(4));
 
}

// Recurrent 

const mostRecurrent = (set) => {
  let countMe = {}
  set.forEach((item)=>{
    countMe.hasOwnProperty(item) ? countMe[item]++ : countMe[item] = 1;
  })
  console.log(Object.entries(countMe));
}
mostRecurrent([1, 2, 3, 4, 3])