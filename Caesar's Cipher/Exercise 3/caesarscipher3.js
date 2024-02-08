const step1 = Math.random();
console.log(step1);
const range = 33 - 3 + 1;
console.log(range);

// Question 1: Added 1 to the range to make sure both endpoints are included

const randomInRange = step1 * range;
console.log(step1);

// Question 2: Scales the decimal to fall within the range of 0 to range

const randomInt = Math.floor(randomInRange);
console.log(randomInt);

// Question 3: rounds down the decimal to the nearest whole number

const shiftValue = randomInt + 3;

// Question 4: Adds 3 to the random integer to shift the range from 0 to range to 3 to 33