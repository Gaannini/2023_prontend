let a = ["one", "two", "three", "four"];

for (let i = 0; i < a.length; ++i)
    console.log(a[i]);

for (let s of a)
    console.log(s);
//of연산자 원소가 하나씩 꺼내짐

// one
// two
// three
// four
// one
// two
// three
// four
