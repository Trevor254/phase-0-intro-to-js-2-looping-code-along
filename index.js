//code your solutions in this file
// for(let age = 30; age < 40; age++){
//     console.log(`I'm ${age} years old. Happy birthday to me!`)
    
// }

// const gifts = ["teddy bear", "drone", "doll"];

// function wrapGifts(gifts) {
//   for (let i = 0; i < gifts.length; i++) {
//     console.log(`Wrapped ${gifts[i]} and added a bow!`);
    
//   }

//   return gifts;
// }


// function writeCards(cards,event){

//     const messages = []
//     for(let i=0; i<cards.length; i++){
//         const message = `Thank you, ${cards[i]},for the wonderful ${event} gift!`
//         messages.push(message)
//     }
//     return messages
// }
const writeCards = (arr,event) => {
    const messages = []
    for(let i = 0; i < arr.length;i++) {
        
           const greetingMessage = `Thank you, ${arr[i]}, for the wonderful ${event} gift!`
           messages.push(greetingMessage)
           
    }
    return messages
}


// console.log(writeCards(["Guadalupe", "Ollie", "Aki"], "birthday"))

// const gifts = ["teddy bear","drone","doll"]

// //while loops

// function wrapGifts(gifts){
//     let i = 0 // the initialization moves OUTSIDE the body of the loop!
//     while (i < gifts.length){
//         console.log(`Wrapped ${gifts[i]} and added a bow!`)
//         i++ // the iteration moves INSIDE the body of the loop!
//     }
//     return gifts
// }

console.log(wrapGifts(gifts))

function countDown(number){
//     let myNumber = 0
//     while(myNumber >= 10){
//         console.log(myNumber)
//         myNumber = myNumber - 1

//     }

let i = number; // Start from the given number
while (i >= 0) {
    console.log(i); // Log the current value
    i--; // Decrement the counter
}
    
}


console.log(countDown(10))