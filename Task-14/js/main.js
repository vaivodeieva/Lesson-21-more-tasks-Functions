//14. Write a function to convert an amount to coins.
//Sample function : amountTocoins(46, [25, 10, 5, 2, 1])
//Here 46 is the amount. and 25, 10, 5, 2, 1 are coins.
//Output : 25, 10, 10, 1


function amountTocoins(amount, coins)   {  
 if (amount === 0) {  
     return [];  
   }   else  {  
     if (amount >= coins[0]) {  
        left = (amount - coins[0]);  
        return [coins[0]].concat(amountTocoins(left, coins));  
        } else  {  
         coins.shift();  //.shift() paņem projām pirmo vienumu no coins virknes
         return amountTocoins(amount, coins);  
        }  
    }  
}   
console.log(amountTocoins(58, [25, 10, 5, 2,1])); 


