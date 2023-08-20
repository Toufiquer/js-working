console.log("First Log");
const a = "global const";
setTimeout(() => {
  debugger;
  console.log("Inside SetTimeOut 2");
  console.log(a);
}, 2000);
setTimeout(async () => {
  debugger;
  console.log("Inside SetTimeOut 1");
  console.log(a);
}, 1000);

console.log("Last Log");
