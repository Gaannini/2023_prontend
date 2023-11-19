let a = ["c:/temp/guide.hwp",
    "c:/pj/frontend/chap05/substring1.js",
    "homework.docx"];

console.log("파일확장자")
for (let i = 0; i < a.length; i++) {
    let result = a[i].match(/\.[a-z]+/)
    console.log(result[0]);
}

console.log("파일명")
for (let i = 0; i < a.length; i++) {
    let result = a[i].match(/([a-z0-9]+\.[a-z]+)/)
    console.log(result[1]);
}

console.log("파일이름")
for (let i = 0; i < a.length; i++) {
    let result = a[i].match(/([a-z0-9]+)\.[a-z]+/)
    console.log(result[1]);
}

