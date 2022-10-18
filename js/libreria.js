// function isPalindroma(str) {

//     let lowStr = str.toLowerCase();

//     let reverseStr = lowStr.split('').reverse().join(''); 
    
//     return reverseStr === lowStr;
// }

function getRandomNumber(min, max){

    return  Math.floor(Math.random() * (max - min +1) + min );
  
  }

// function pariDispari(num1,num2) {
    
//     let sum = num1 + num2;

//     console.log(sum);

//     if(sum % 2){
//         verifica = false;
//         scelta = "dispari";
//     }else{
//         verifica = true; 
//         scelta = "pari";
//        }

//     return sum;

//   }

//   function controllaInput(numeroParsato){

//     if (isNaN(numeroParsato)) {
//         document.getElementById('messaggio2').innerHTML = "";
//         document.getElementById('messaggio3').innerHTML = "";
        
//         alert('Devi inserire un numero');
        
//     }
//     else if (numeroParsato > 5 || numeroParsato < 1) {
//         alert("Devi inserire un numero da 1 a 5 !")
//     }

//     else{
//         return true;
//     }
//   }