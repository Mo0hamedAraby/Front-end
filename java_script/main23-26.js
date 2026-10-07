/* 
_______023 - Number______
-Number 
- Double Precision 
- Syntactic Suger "_"
- e
- **
- With Decrimal 
- Number + Bigint 
- Number Min Value 
- Number Max Value 
*/

console.log(1000000);
//To Make It Easy Its suger
console.log(1_000_000);
console.log(1e6);
console.log(10 ** 6);
console.log(10 * 10 * 10 * 10 * 10 * 10);
console.log(1000000.0);

console.log(Number.MAX_SAFE_INTEGER); // Its To Arrived Heighs Nummber Safe
console.log(Number.MAX_VALUE); // Its To Arrived Heighs Nummber In Langauge
console.log(Number.MAX_VALUE + 21412); // Its Not Add Any Number More

/* 
_____24 - Number Methods_____
 - Two Dots To Call A Methods
 - to String ()
 - toFixed ()
 - parseInt()
 - parseFloat()
 - isInteger()
 - isNaN()
 */

console.log((100).toString()); // To Change Number or 100.123 To String
console.log((100.1).toString());

console.log((100.66542).toFixed(2)); // Its To Abbreviate 2 Number

console.log(Number("100 Osama")); // NaN
console.log(+"100 Osama"); // NaN
console.log(parseInt("100 Osama")); //100
console.log(parseInt("Osama 100 Osama")); // NaN
console.log(parseInt(" 100.500 Osama")); // 100
console.log(parseFloat(" 100.500 Osama")); // 100.500

console.log(Number.isInteger("100")); //false
console.log(Number.isInteger(100.5)); //false
console.log(Number.isInteger(100)); //true

console.log(Number.isNaN("Osama" / 20)); //true
console.log(Number.isNaN(20)); //false
