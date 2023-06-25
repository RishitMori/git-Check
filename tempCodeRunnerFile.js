function sayhi(param) {
  let a = param;
  console.log("say hii rishit ", a);
  return param.length() > 25 ? true : "less than 25";
}
let obj = {
  name: "rishit",
  lastName: "mori",
  address: {
    city: "delhi",
    state: "uttar pradesh",
  },
  age: 21,
  iscollegeStudent: true,
  say: sayhi(this.name),
};

console.log(obj);