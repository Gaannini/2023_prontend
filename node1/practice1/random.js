let a = 10, b = 20;

for (let i = 0; i < 30; i++) {
    let result = Math.floor(Math.random() * (b - a + 1) + a);
    console.log(result);
}