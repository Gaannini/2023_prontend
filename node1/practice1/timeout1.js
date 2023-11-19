

function printTime(msg) {
    console.log(msg, new Date().toTimeString().split(' ')[0]);
}
for (let i = 1; i < 11; i++)
    setTimeout(printTime, i * 1000, "");

