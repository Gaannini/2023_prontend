let s = "one two three four";
let a = s.split(" ");

for (let i = 0; i < a.length; ++i)
    console.log(a[i]);

let j = "one, two,three  four";
let q = j.split(/[\t ,]+/);

for (let i = 0; i < q.length; ++i)
    console.log(q[i]);

// /[\t ,]+/
//   탭, 공백, 콤마 문자들의 결합과 일치하는 정규식
