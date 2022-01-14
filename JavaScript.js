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

  //double char
  function doubleChar(str) {
    let result = '';
     for ( let i = 0; i < str.length; i++) {
       result += str[i] + str[i];
     }
     return result;
   }

   //merge two arrays

   function mergeArrays(a, b) {
    // your code here
    const maxLength = Math.max(a.length, b.length);
    let mergedArr = [];
    
    for (let i = 0; i < maxLength; i++){
      mergedArr.push(a[i]);
      mergedArr.push(b[i]);
  //     console.log(b[i])
    }
    return mergedArr.filter((value) => value !== undefined);
  }

  //find parity outlier
  function findOutlier(int){
    var even = int.filter(a=>a%2==0);
    var odd = int.filter(a=>a%2!==0);
    return even.length==1? even[0] : odd[0];
  }

  //logical calc
  function logicalCalc(array, op){
  
    let result = array[0];
   
    for ( let i = 1; i < array.length; i++ ){
      if (op == 'AND') {
        result = result && array[i];
        } 
      if ( op == 'OR') {
        result = result || array[i];
        } 
      if ( op == 'XOR') {
        result = result != array[i];
      } 
    }
    return result;
  }

  //converst string to camel case 

  function toCamelCase(str) {
    var regExp =/[-_]\w/ig;
   
         return str.replace(regExp,function(match){
               return match.charAt(1).toUpperCase();
          });
   }

   //array.diff 

   function arrayDiff(a, b) {
    return a.filter(e => !b.includes(e));
  }


  //persistent bugger 

  function persistence(num) {
    function multiply(n){
      return n.reduce(function(a,b){
        return a * b });
    }
    let count = 0;
    
    while(num.toString().length > 1){
      num = num.toString().split("");
      num = multiply(num);
      count ++;
    }
    return count;
  }

  //beginner series #3 Sum of Numbers

  function getSum( a,b )
{
 let lower, higher;
 let result = 0;
  
  if ( a == b) {
    return a;
  } else {
    if (a > b) {
      higher = a;
      lower = b;
    } else {
      higher = b;
      lower = a;
    } 
    for ( i = lower; i <= higher; i++){
      result += i;
    }
  }
  return result;
   
}

//reverse words 
function reverseWords(str) {
  
  var splitStr = str.split(" ").map(
  word => word.split("").reverse().join("")
  ).join(" ")
  
  return splitStr 
//   console.log(splitStr)
  
//   var reverseStr = splitStr.reverse()
//   var joinStr = reverseStr.join("")
}

//testing 1-2-3
var number=function(array){
  return array.map((line, index)=>
    `${index + 1}: ${line}`
    )
  //your awesome code here
}

//Is a number prime?

function isPrime(num) {
  if (num < 2) {
    return false;
  }
  if (num ===2 ){
    return true;
  }
  
  const dividor = Math.sqrt(num) + 1;
  
  for (let i = 2; i < dividor; i++) {
     if (num % i === 0) {
       return false;
     }
  }
  return true;
  
  //TODO
}

//high rank in number in array

const highestRank = (arr) => [...arr.reduce((acc, cur) => {
  acc.set(cur, (acc.get(cur) || 0) + 1);
  return acc;
}, new Map()).entries()]
  .sort((a, b) => {
    if (a[1] !== b[1]) {
      return b[1] - a[1];
    }
    
    return b[0] - a[0];
  })[0][0];


  //count characters in your string
  function count (string) {   
    // The function code should be here
    let newArr = new Array()
    newArr = string.split('')
    let obj = {}
    if (!string || string.length == 0){
      return obj
    } else {
      for(let i = 0; i <newArr.length; ++i){
        if(!obj[newArr[i]])
          obj[newArr[i]] = 0;
        ++obj[newArr[i]];
      }
    }
   return obj
  }
