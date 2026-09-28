/* ---------- 0010 - Data Typeof Operator ---------
------This Is Value Of Type
- String = "Osama"
- Number = 5000 , 
- Array => Object => (typeof [10, 15, 17]) (typeof ["OS", "Ah", "Sa" ])
- Exactly Object => (typeof {name:"osama", age: 17, country:"Eg"})
- boolean => (typeof true)
- boolean => (typeof false)
- boolean => (typeof undefined)
- boolean => (typeof null)
--- */
/*String*/ console.log("osama Mohamed");
/*String*/ console.log(typeof "Osama Mohamed");
/*number*/ console.log(typeof 5000);
/*number*/ console.log(typeof 5000.99);
/*Array object*/ console.log(typeof [10, 15, 17]);
/*Array object*/ console.log(typeof ["Os", "Ah", "Sa"]);
/*Exactly object*/ console.log({ name: "Osama", age: 17, country: "Eg" });
/*boolean*/ console.log(typeof true);
/*boolean*/ console.log(typeof false);
/*undefined*/ console.log(typeof undefined);
/*object*/ console.log(typeof null);

/*----------- 011 - Variables Introduction -------
Variabled Intro
- What Is Variable ?
- Why We Use Variables ?
- Declare A Variable And Use
- Syntax (Keyword | Variable Name | Assigment Operatot | Variable Value )
- Variable With Out Var
- Multiple Variables In The Same Line 
- Id And Global Variable
- Loosely Typed Vs Strongly Typed 
*/
var user = "Sayed",
  age = 37;

console.log(user);
console.log(user);
console.log(user);
console.log(user);
console.log(age);
console.log(hello);
/* Its Not Work New 
hello.innerHTML = "option"; 
console.log("hello");
*/
