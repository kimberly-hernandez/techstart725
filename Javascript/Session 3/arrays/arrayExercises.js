let buds = ["Margarita", "Erin", "Kim", "Tatiana", "Clare", "Alex", "Angela", "Monica", "Randi", "Morgan"]

//display array
console.log(buds);

//display index 5
console.log(buds[5]);

//display last 3 values of array, first method

console.log(buds.slice(7, 10))

// second method
let numberOfBuds = buds.length;
console.log(buds.slice(numberOfBuds-3, numberOfBuds))

//display contents in reverse order
console.log(buds.reverse())

//display contents in alphabetical order
console.log(buds.sort())

//display contents in reverse alphabetical order
console.log(buds.sort().reverse())

//Add two items to the end of the array.
buds.push("Chanel", "Amanda")
console.log(buds)

//Add three items to the start of the array.
buds.unshift("Alexa", "Dimitra","Kathy")
console.log(buds)

//Remove half of the items from the array.
let half = buds.length /2;

console.log(buds.slice(0, half))

//Embed the last item in the array in a sentence
console.log(buds[buds.length-1] + " is available to chat next week")

//Split the array into two new arrays that are approximately the same length.

console.log("first half: " + buds.slice(0, half))
console.log("second half:" + buds.slice(half +1, buds.length -1))

//Split the array into four new arrays that are approximately the same length.
console.log("total buds: " + buds.length +"names: " +buds)
console.log("1: "+ buds.slice(0, 3 ))
console.log("2: "+ buds.slice(4, 8 ))
console.log("3: " + buds.slice(8, 11 ))
console.log("4: "+ buds.slice(12, 15 ))

//Recombine the four arrays in the order 3-4-2-1 to create a new array with the original values in a different order.

console.log(buds.slice(8, 11 ) +buds.slice(12, 15 ) +  buds.slice(4, 8 ) + buds.slice(0, 3 ) )

//Create a new array that contains only the items in the original array that have an even index number
let evenBuds;
buds.forEach(function (item, index){
    if(index % 2 ==0){
    console.log(item, index)
    }
})