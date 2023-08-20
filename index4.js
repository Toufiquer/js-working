console.log("First Log");
const a = "global const";

// blocking thread
const block5 = (
  nowDate = new Date() * 1,
  futureDate = new Date() * 1 + 5000
) => {
  while (nowDate <= futureDate) {
    nowDate = new Date() * 1;
  }
  console.log("Thread of execution is now clear");
  return true;
};
// if we call the function then it will block the thread of execution for 5 sec
// console.log(block5(), " => Line No: 10");

// // invoke 1 wait 5 sec
setTimeout(() => {
  //   debugger;
  console.log("Inside SetTimeOut 1");
  block5();
  console.log(a);
}, 1000);

// // waiting in task que
// // * if it was fetch the waiting in micro task que
setTimeout(() => {
  //   debugger;
  console.log("Inside SetTimeOut 2");
  console.log(a);
}, 2000);
console.log("Last Log");
