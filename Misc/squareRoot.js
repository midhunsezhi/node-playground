function sqrt(num) {
  // Create an initial guess by simply dividing by 3.
  var lastGuess, guess = num/3;
 
  // Loop until a good enough approximation is found.
  do {
    lastGuess = guess;  // store the previous guess
 
    // find a new guess by averaging the old one with
    // the original number divided by the old guess.
    guess = (num / guess + guess) / 2;
 
  // Loop again if the product isn't close enough to
  // the original number.
  } while(Math.abs(lastGuess - guess) > 5e-15);
 
  return guess;  // return the approximate square root
};

console.log(sqrt(2.25)); //1.5
console.log(sqrt(133558.087936)); //365.456
