// 13. Write a function to compute the factors of a positive integer.
//Note:  A factor is a number that divides evenly into another number. As an example, the factors of 20 are 1,2,4,5, and 10. 
// ..jeb visi skaitļi, ar kuriem dalās dotais skaitlis.




const num = '24';

console.log(`The factors of ${num} are: `);

for (let i = 1; i <= num; i++) {  

    if (num % i === 0) {
        console.log(i);
    }
}

