let s = "hello world";

for (let i = 0; i < s.length; ++i)
    console.log("%s %s %d", s[i], s.charAt(i), s.charCodeAt(i));

//   h h 104
//   e e 101
//   l l 108
//   l l 108
//   o o 111
//       32
//   w w 119
//   o o 111
//   r r 114
//   l l 108
//   d d 100

let a = "안녕하세요";

for (let i = 0; i < a.length; ++i)
    console.log("%s %s %d", a[i], a.charAt(i), a.charCodeAt(i));

//   안 안 50504
//   녕 녕 45397
//   하 하 54616
//   세 세 49464
//   요 요 50836

