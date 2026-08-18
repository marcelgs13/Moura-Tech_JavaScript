//Abordagem antiga
// var exportedName = (function () {
// var x, y, x;
// return {x: x, y: y};
// })();
// exportedName.x = 10;
// exportedName.y = 20;
// console.log(exportedName.x, exportedName.y);

//Abordagem moderna
function myFunction(a=1, b = "hello") {{
    console.log(a);
    console.log(b);
}}
myFunction()
myFunction(10, "world")
myFunction(10)

function array(a,b,...theArgsArray) {
    var c = theArgsArray[0];
}
console.log(array(1,2,3,4,5,6,7,8,9,10))