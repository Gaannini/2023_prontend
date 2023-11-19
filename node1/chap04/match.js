let a = "list.jsp?pg=324&sz=15".match(/pg=[0-9]+/)

console.log(a[0]);    // 정규식에 일치하는 문자열, pg=324
console.log(a.index); // 정규식에 일치하는 문자열의 위치 index, 9


let b = "list.jsp?pg=324&sz=15".match(/pg=([0-9]+)/)

console.log(b[0]);    // 정규식에 일치하는 문자열, pg=324
console.log(b.index); // 일치하는 문자열의 위치 index, 9
console.log(b[1]);    // 첫번째 괄호에 일치하는 부분, 324


let c = "list.jsp?pg=324&sz=15".match(/pg=([0-9]+)&sz=([0-9]+)/)

console.log(c[0])  // 매칭된 문자열 전체
console.log(c[1])  // 첫째 괄호에 매칭된 부분
console.log(c[2])  // 둘째 괄호에 매칭된 부분
console.log(c.index) // 매칭된 문자열의 위치 index
console.log(c.input);

// pg=324&sz=15
// 324
// 15
// 9
