let a = "When I find myself in times of trouble Mother Mary comes to me Speaking words of wisdom, let it be."

let b = 0;

while (true) {
    let i = a.search(/[aeiou]/, b);
    console.log(i);

    if (i == -1) break
    b = i + 1;
}