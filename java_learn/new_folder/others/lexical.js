// //lexical scope
// console.log("line number 1", varname);
// var varname = 10;
// function b() {
//   console.log("line number 2", varname);
// }
// console.log("line number 3", varname);

// function fn() {
//   console.log("line number 4", varname);
//   var varname = 20;
//   b();
//   console.log("line number 5", varname);
// }
// fn();

// scope of var
var a = 10;
console.log("line 6", a);
var a;
console.log("line 12", a);
function fn() {
  console.log("line 7", a);
  var a = 20;
  a++;
  console.log("line 8", a);
  if (a) {
    var a = 30;
    a++;
    console.log("line 9", a);
  }
  console.log("line 10", a); // print 31
}
fn();
console.log("line 11", a);

let arr = [1, 2, 3, 4, 5];
arr.risiht = "hello";
arr[50] = 45;
console.log("line 50", arr.length);

for (let key in arr) {
  console.log(key, "  :  ", arr[key]);
}
