//Uppgift 1

function addOne(num) {
    // let result = num + 1;
    // return result;
  
    return num + 1;
  }
  
  // console.log(addOne(5));
  
  //Uppgift 2
  
  function convertToSec(hour) {
    
    let minutes = hour * 60;
    let seconds = minutes * 60;
    return seconds;
  
    // return hour 3600;
  }
  
  // console.log(convertToSec(2));
  // console.log(convertToSec(10));
  // console.log(convertToSec(15));
  // console.log(convertToSec(24));
  
  //Uppgift 3
  
  function convertAgeToDays(age) {
    return age * 365.25; //inklusive skottår
  }
  
//   console.log(convertAgeToDays(30));
  
  //Uppgift 4
  
  function getArea(base, height) {
    let area = (base * height) / 2;
    return area;
  }
  
  //Uppgift 5
  
  function convertDaysToMinutes(days) {

    let hours = days * 24;
    let minutes = hours * 60;

    return minutes;
  }
  
  //Uppgift 6
  
  function getFirstElement(arr){
    return arr[0];
  };

//   console.log(getFirstElement([7, 4, 10, 526236262]));
  
  //Uppgift 7
  function getGameScore(twoPointers, threePointers){

    let twoPointersTotal = twoPointers * 2;
    let threePointersTotal = threePointers * 3;

    return twoPointersTotal + threePointersTotal;
  };
  
  // console.log(getGameScore(10, 6));
  
  //Uppgift 8
  
  function countLegs (chickens, cows, pigs){
    let chickenLegs = chickens * 2;
    let cowLegs = cows * 4;
    let pigLegs = pigs * 4;
  
    let total = chickenLegs + cowLegs + pigLegs;
    return total;
  };
  
  //Uppgift 9
  
  //Lösning 1


  function isEven(num) {
    if (num % 2 === 0) {
      return true;
    } else {
      return false;
    }
  };




  //Lösning 2
  
  function isEven(num){
    return num % 2 === 0;
  };
    
  console.log(isEven(4));
  
  //Uppgift 10
  
  function isLessThan0(num){
    
    return num <= 0;

    // if(num <=0){
    //     return true
    // } else {
    //     return false
    // }
  };
  
  //Uppgift 11
  
  function isLessThan100 (num1, num2) {
    //Alternativ 1
    let total = num1 +num2;

    if(total < 100){
        return true
    } else {
        return false
    }
    //Alternativ 2
    
    // return num1 + num2 < 100;
  };
  
  console.log(isLessThan100(49, 50));
  