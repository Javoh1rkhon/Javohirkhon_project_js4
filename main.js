let a = [[{ a: { price: 20 } }], [{ a: { price: 35 } }], [{ a: { price: 44 } }]]
console.log(a[0][0].a.price, a[1][0].a.price, a[2][0].a.price);
// console.log(a[0][0].a.price);     
// console.log(a[1][0].a.price);
// console.log(a[2][0].a.price);
let total = a[0][0].a.price + a[1][0].a.price + a[2][0].a.price 
console.log(total);