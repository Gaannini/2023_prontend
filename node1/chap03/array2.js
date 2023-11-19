let a = [3];
console.log("최초 크기 : " + a.length);

a[5] = 456;
console.log("새 크기 : " + a.length);
for (let i = 0; i < a.length; ++i)
    console.log("a[%d] : %s", i, a[i]);


let a1 = [1, 2, 3];
let a2 = ["a", "b", "c"];

console.log(typeof a1);//object
console.log(typeof a2);//object

