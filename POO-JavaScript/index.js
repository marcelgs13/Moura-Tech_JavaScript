let obj = { count: 0 };
obj.increment = function (amount) {
  this.count += amount;
  return this.count;
};
console.log(obj.increment(5)); 
console.log(obj.increment(1)); 
console.log("-------------------"); 

function plus1(value) {
  if (plus1.invocations == undefined) {
    plus1.invocations = 0;
  }
  plus1.invocations++;
  return value + 1;
}
console.log(plus1(5));
console.log(plus1.invocations);
console.log("-------------------"); 
function Rectangle(width, height) {
this.width = width;
this.height = height;
}
// Método adicionado ao protótipo
Rectangle.prototype.area = function() {
return this.width * this.height;
}
let r = new Rectangle(26, 14);
let v = r.area();
// Object.keys(r) 
console.log(Object.keys(r));
console.log(r.area());
console.log("-------------------"); 

// Abordagem Imperativa
// for (let i = 0; i < anArr.length; i++) {
// newArr[i] = anArr[i] * i;
// }

//Abordagem funcional
anArr = [1, 2, 3, 4, 5];
newArr = anArr.map(function (val, ind) {
return val * ind;
});
console.log(newArr);