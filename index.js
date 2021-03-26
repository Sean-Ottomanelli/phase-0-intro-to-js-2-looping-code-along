// Code your solutions in this file
/* 
for (let age = 30; age < 40; age++) {
    console.log(`I'm ${age} years old. Happy birthday to me!`);
    debugger;
  } 


const gifts = ["teddy bear", "drone", "doll"];

function wrapGifts(gifts) {
  for (let i = 0; i < gifts.length; i++) {
    console.log(`Wrapped ${gifts[i]} and added a bow!`);
    debugger;
  }

  return gifts;
}

wrapGifts(gifts); 

*/



function writeCards(people,eventName) {
    let cardArray = []
    {for (let i = 0; i < people.length; i++) 
        cardArray[i] = `Thank you, ${people[i]}, for the wonderful ${eventName} gift!`;
    }   
    return(cardArray)
}

function countDown(n) {
    while (n>=0){
        console.log(n);
        n--;
    }

} 
