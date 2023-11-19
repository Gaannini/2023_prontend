for (let i = 0; i < 20; ++i) {
    let a = Math.floor(Math.random() * 6 + 1);
    console.log(a);
}
//Math.random 메소드는, 0 보다 크거나 같고, 1보다 작은 난수를 리턴한다.
//1, 2, 3, 4, 5, 6

const MAX = 5, MIN = 2;

for (let i = 0; i < 20; ++i) {
    let a = Math.floor(Math.random() * (MAX - MIN + 1) + MIN);
    console.log(a);
}
//값은 MIN 보다 크거나 같고, MAX 보다 작거나 같은 정수들 중의 하나이다.