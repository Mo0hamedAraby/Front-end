/*--------- 018 - Arithmetic Operators -----------
+ - Addition
- - subtraction
* - Multiplication
/ - Division
** - Exponentiation (Es7)
% - Modulus (Division Remainder)
++ increment [Post / pre ]
++ Decrement [Post / pre ]
*/

console.log(10 + 20);
console.log(10 + "Osama");
// console.log(Number + "String") Its Not Work Its Work Like 10Osama

console.log(10 - 20);
console.log(10 + "Osama"); //NaN
console.log(typeof NaN);

console.log(10 * 20);
console.log(10 * -20);

console.log(10 / 20);
console.log(20 / 3);

console.log(2 ** 4);
console.log(2 * 2 * 2 * 2);

console.log(10 % 2);
console.log(11 % 2); // Remove 1
//Post Increment = Decrement
let num = 1;
1;
num++;
1;
num;
2;
console.log(num)
// pre increment = Decrement
num = 3;

++num;
4;
console.log(num)
/* --------019 - Unary Plus And Negation Operators  --------- */
// Unary Plus
console.log(+100);
console.log(+"100");
console.log(+"-100");
console.log(+"Osama"); //NaN
console.log(+"15.5");
console.log(+0xff); //255 Its Type Of Color
console.log(+null);
console.log(+false);
console.log(+true);
// Unary Negation
console.log(-100);
console.log(-"100");
console.log(-"-100");
console.log(-"Osama"); // NaN
console.log(-"15.5");
console.log(-0xff);
console.log(-null);
console.log(-false);
console.log(-true);

console.log(Number("100")); //Its To Change To Number Too

/* --------020 - Type Coercion  --------- */

let a = "10";
let b = 20;
let c = true; //True Its Value for It 1

console.log(a + b); //Its Main - 1020 - In Console
console.log(a + b); //When Make a = Osama = Osama20 Its Main - 1020 - In Console
console.log(+a + b); //When Make a = 10  And Add + In AIts Main - 30 - In Console
console.log(a + c); //When Make a = 10  And Add + In A Main - 10true - In Console
console.log(a + c + b); //When Make All Of Him + Its Main - 10true20 - In Console
console.log(a + c + b); //When Make All Of Him + Its and Add +a Its Main - 31 - In Console

/* -------- 021 - Assignment Operators  --------- */
let x = 10;

x = x + 20 // Its Details Of This For This Lesson
x += 20; 
x *= 2;
x /= 20;

console.log(x)
