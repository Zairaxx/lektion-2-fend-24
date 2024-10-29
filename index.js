//Functions

function multiplyBy3(num){
    let value = num * 3;
    return value
}

console.log(multiplyBy3(10));

function addNumbers(a,b){
    let answer = a+b;
    return answer;
}

function createArray(a,b,c){
    return [a,b,c]
}

let fruits = createArray("Banan","Äpple","Mango");

console.log(fruits);
console.log(addNumbers("6",14));

// If /else if/ else


function checkLength(length){
    if(length === 177){
        console.log("Du är exakt 177cm lång!");
    } else if(length > 195) {
        console.log("You're a giant amongst ants!")
    } else if (length < 195 && length > 145) {
        console.log("Du är förmodligen normallång!");
    } else {
        console.log("Du är nog kortare än genomsnittet!")
    }
}

checkLength(168);

// Exempel på loop

// for (startvärde, villkor, öka värde efter kod körs)
for(let x=0;x<5;x++){
    console.log("Loopen körs!", x);
}

//En array som vi kan kolla längden på
let foods = ["Kebab","Potatissallad", "Hamburgare", "Tacos"];
// console.log(foods.length);

// En loop som itererar igenom vår array

for(let x=0; x<foods.length; x++ ){

    console.log(foods[x]);

    // Exempel på if/else-statement i en loop
    // if(foods[x] === "Hamburgare"){
    //     console.log("Mums min favoriträtt!", foods[x])
    // } else {
    //     console.log("Usch, jag vill ha hamburgare")
    // }
}

console.log("Loopen är nu färdig!");