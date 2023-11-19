let obj = {
    count: 0,
    startTimer: function () {
        console.log(this.count);
        let callback = () => { console.log(this.count++); };
        setInterval(callback, 1000)
    }
}

obj.startTimer();

// 0
// 0
// 1
// 2
// 3
// 4
// ... 생략 ...
