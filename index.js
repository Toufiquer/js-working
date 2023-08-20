const constA = "value A";
let letB = "value B";
var varC = "value c";

const arrFunction = (x, y) => {
  var a = { name: "array Function", a: "a", b: "b" };
  return a;
};
function oldFunction() {
  var a = { name: "Old Function", a: "a", b: "b" };
  return a;
}
const resultArrF = arrFunction();
const resultOldF = oldFunction();
console.log(resultArrF, resultOldF, varLast, "constLast");
var varLast = "value var Last";
const constLast = "value const Last";
