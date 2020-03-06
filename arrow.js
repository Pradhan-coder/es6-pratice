// function DoubleIt(num){
//     return num * 2;
// }

// const DoubleIt = function myFun(num){
//          return num * 2;
// }
// const DoubleIt = num  => num * 2 //this is the best method i think.
// const add = (x, y) => x + y;
// const give5 = () => 5;

//const result = add(50, 7);
const doMath = (x, y) => {
    const sum = x +y;
    const diff = x - y;
    const result = sum * diff;
    return result;

}

//const result2 = give5();
const result3 = doMath(7, 5);
 console.log(result3);