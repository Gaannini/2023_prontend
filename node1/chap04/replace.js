let s = "hello world";
console.log(s.replace("o", "O"));
//console.log(s.replace(/o/g, "O")); -> 일치하는 부분 문자열들을 전부 치환
//console.log(s.replace(/o/i, "O")); -> 대소문자 무시
console.log(s); //hello world -> 원본 문자열은 변경되지 않음.

