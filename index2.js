console.log("First Log");
const a = "global const";
setTimeout(() => {
  debugger;
  console.log("Inside Log");
  console.log(a);
}, 10000);
console.log("Last Log");
