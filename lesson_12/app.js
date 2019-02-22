async function f1() {
    return 1;
}

// console.log(f1().then(console.log));


async function f2() {
    let promise = new Promise((resolve, reject) => {
        setTimeout(() => resolve('done!'), 3000)
    })
    let result = await promise // 直到promise返回一个resolve值（*）
    console.log(result) // 'done!'
    console.log(22222)
}
// f2();

async function f3() {
    let promise = new Promise((resolve, reject) => {
        setTimeout(() => resolve('33333'), 3000)
    })
}

console.log(f3().then(console.log));
console.log('3333333---1');
