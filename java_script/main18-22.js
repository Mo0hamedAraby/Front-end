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
num = 1;
1;
num++;
1;
num;
2;
// pre increment = Decrement
num = 1;
1;
++num;
2;

/* --------019 - Unary Plus And Negation Operators  --------- */
// Unary Plus
console.log(+100);
console.log(+"100");
console.log(+"-100");
console.log(+"Osama"); //NaN
console.log(+"15.5");
console.log(+0xff);
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

console.log(Number("100")) //Its To Change To Number Too

/* --------020 - Type Coercion  --------- */
