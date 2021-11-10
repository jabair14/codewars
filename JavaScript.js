//Printer Errors 

function printerError(s) {
    let count = 0;
  
  for ( let i = 0; i < s.length; i++) {
    if (s[i] > 'm') {
      count++;
    }
  }
  return count + '/' + s.length;
}


//square Every Digit

function squareDigits(num){
  
    //convert number to string
    let numStr = num.toString();
    let total = "";
    
    for (let i in numStr){
      total += (parseInt(numStr[i])**2 ).toString();
    }
    
    return parseInt(total);
  }


//credit card mask

function maskify(cc) {
    let masked = '';
    let lastFour = cc.substr(-4);
    
    for (let i = 0; i < cc.length - 4; i++){
      masked += '#';
    }
    return masked + lastFour;
  }

  
  //multiples of 3 or 5

  function solution(number){
    let arr = [];
    let multiple = [];
    
    //push all numbers between 0 and the number to arr
    for (let x = 0; x < number; x++){
      arr.push(x);
    }
    
    //if number in arr is a multiple of 3 or 5 push it to multiple
    for (let x = 0; x < arr.length; x++) {
      if (x % 3 === 0 || x % 5 === 0) {
        multiple.push(x);
      }
    }
    
    //sum the total of the multiple array
    const sumTotal = multiple.reduce((sum, num) => sum + num, 0);
    
    return sumTotal; 
  }

  //is Triangle 

  function isTriangle(a,b,c){
    if ((a + b <= c) || (a + c <= b) || (b + c <= a)){
     return false;
    } else {
      if ((a <= 0) || (b <= 0) || (c <= 0)){
        return false;
      } else {
        return true;
      }
    }
    
  }

  // You're a square

  var isSquare = function(n){
    let numberCheck;
    for (let i = 0; i < n + 1; i++){
      numberCheck = n / i;
      if (i === numberCheck){
        return true;
      }
    }
    if(n < 0) {
      return false; // fix me 
    } else if (numberCheck == 1){
      return false;
    } else {
      return true;
    }
  }