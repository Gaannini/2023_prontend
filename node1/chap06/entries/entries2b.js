let person = { name: "홍길동", age: 16 };

for (let [key, value] of Object.entries(person))
  console.log("%s: %s", key, value);

// name: 홍길동
// age: 16

// Object.entries(person) 메소드가 리턴하는 배열의 원소 각각에 대해서,
// 그 원소를 [key, value]에 대입하여 (destructuring assignment)
// for 문의 본문을 반복 실행한다.

// Object.entries(person) 메소드가 리턴하는 배열의 원소는
// [멤버변수이름, 값] 형태의 배열이다.
