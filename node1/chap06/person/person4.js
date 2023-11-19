function createPerson(s, i) {
    return { name: s, age: i };
}

let person1 = createPerson("홍길동", 16);
let person2 = createPerson("임꺽정", 18);

console.log(person1);
console.log(person2);

// { name: '홍길동', age: 16 }
// { name: '임꺽정', age: 18 }
