let person1 = { name: "홍길동", age: 16 };

let person2 = Object.assign({}, person1);
console.log(person2);

let person3 = { ...person1 };
console.log(person3);


//{ name: '홍길동', age: 16 }