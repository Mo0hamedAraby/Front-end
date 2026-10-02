/* ---------- 0010 - Data Typeof Operator --------- */
console.log("osama Mohamed");
console.log(typeof "Osama Mohamed");
console.log(typeof 5000);
console.log(typeof 5000.99);
console.log(typeof [10, 15, 17]);
console.log(typeof ["Os", "Ah", "Sa"]);
console.log({ name: "Osama", age: 17, country: "Eg" });
console.log(typeof true);
console.log(typeof false);
console.log(typeof undefined);
console.log(typeof null);

/*----------- 011 - Variables Introduction -------*/
var user = "Sayed",
  age = 37;

console.log(user);
console.log(user);
console.log(user);
console.log(user);
console.log(age);

var hello = document.getElementById("hello");
hello.innerHTML = "Option";

/*----------- 014 - String Syntax And Character Escape Sequences-----------*/
console.log("Elzero Web 'School'");
console.log('Elzero Web "School"');
console.log("Elzero \\ Web 'School'");
console.log(
  "Elzero \
  Web \
  School",
); // تم إزالة الفاصلة الزائدة هنا
console.log("ELzero\nWeb\nSchool");

/*  ----------- 015 - Concatenation ----------- */
var a = "We Love";
var b = "JavaScript";
var c = " ";

// 1. في الـ Console (كل console.log يظهر في سطر جديد تلقائياً)
console.log(a + c + b);

// 2. في صفحة HTML (نستخدم <br> لنضمن أن كل جملة تنزل في سطر جديد)
document.write(a + c + b + "<br>");
document.write(a + " " + b + "<br>");

// This Is All We Can Make It With Variables

/*  ----------- 016 - Template Literals Template Strings ----------- */
// We Didn`t Add var , Let Because Its Install  before Lesson
a = "We Love";
b = "JavaScript";
e = "And";
let d = "Programming";

console.log(a + ' ""' + " " + b + "\n" + e + " " + d);
//  This Is Old Before EcmaScript
//  After EcmaScript
console.log(`${a}"" '' \\ ${b} ${e} ${d}`);
// When We  Have A back slash\ or Dauble cotes" We Can add It Like This
console.log(a + " " + b + "\n" + e + " " + d);
// When We Need To Start In New Line We Add Enter Only
console.log(`${a} ${b} 
  ${e} ${d}`);

// We Make After EcmaScript When You Need To Make It Before go to Babel Web
let title = "Elzero";
let desc = "Elzero Web School";
let markUp = `
  <div class="card">
  <div class="child">
    <h2>
      ${title}
    </h2>
    <p>
      ${desc}
    </p>
 </div>
 </div>
 `;
document.write(markUp);

