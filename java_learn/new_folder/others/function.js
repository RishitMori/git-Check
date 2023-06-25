// global this memoryAll
// memory allotment hoisting
// tempory dead zone : u cannot access the let,const before it is initialized yet hoisting(memoryallcation) is done for it.
// shadowing (illegal if let at outside and var inside fucntion is defined)

//does not need to call it call automatically and parameter passed is ("rishit", 10)
let d = (function c(...data) {
  console.log("prachi ", data[1]);
})("rishit", 10);

//arrow function

let fn = (param) => {
  console.log(param);
};

// function without name ;
let fn1 = function (param) {
  param[1] = 10;
};

let arr = [1, 2, 3, 4, 5];
fn1(arr);
console.log(arr);

const add1 = (function () {
  console.log("function is running");
  let counter = 0;
  return function () {
    counter += 1;
    return counter;
  };
})();

console.log(add1());
console.log(add1());

var func = (function () {
  return function () {
    console.log("this will be printed");
  };
})();
func();

var varname = 10;
function varname1() {
  const varname = 20;
  console.log(varname);
}
varname1();
