const guests = ["ANTONY", "CICERO", "CASSIUS", "CLEOPATRA"];
guests.unshift('BRUTUS');
console.log(guests);
// Question 1: guests[0]
guests.push("AUGUSTUS", "LUCIA");
console.log(guests);
const spartacusIndex = guests.indexOf("SPARTACUS");
console.log(spartacusIndex);
// Question 2: -1
const indexToRemove = guests.indexOf("CASSIUS");
guests.splice(indexToRemove, 1);
console.log(guests);
const firstThreeGuests = guests.slice(0, 3);
console.log(firstThreeGuests);
const regularGuests = guests.slice(3).sort();
console.log(regularGuests);
const sortedGuests = firstThreeGuests.concat(regularGuests);
console.log(sortedGuests);