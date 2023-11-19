let a = [3, 1, 6, 2, 4, 8, 10, 5, 11, 7, 9];
a.sort();
console.log(a);
//[ 1, 10, 11, 2, 3, 4, 5, 6, 7, 8, 9 ]


let b = [3, 1, 6, 2, 4, 8, 10, 5, 11, 7, 9];
b.sort(compareNumber);
console.log(b);

function compareNumber(i, j) {
    return i - j;
}
//[ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11 ]

let c = [3, 1, 6, 2, 4, 8, 10, 5, 11, 7, 9];
c.sort(compareNumber);
console.log(c);

function compareNumber(i, j) {
    return j - i;
}
//[ 11, 10, 9, 8, 7, 6,  5, 4, 3, 2, 1 ]
