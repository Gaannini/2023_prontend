let i = 3, j = 4;
let a = [5, 6, 7]

let a1 = [i, j, a];
console.log(a1);
//[ 3, 4, [ 5, 6, 7 ] ]

let a2 = [i, j, ...a];
console.log(a2);
//[ 3, 4, 5, 6, 7 ]

